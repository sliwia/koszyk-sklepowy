import React from "react";
import { connect} from 'react-redux';
import { Form,
    Input,
    Tooltip,
    Icon,
    InputNumber,
    Select,
    Button,
    AutoComplete,
    } from 'antd';
import './AdminPanelModal.scss';
import * as actionTypes from '../store/actions';

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
};

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class AdminPanelModal extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            autoCompleteResult: []
          };
    }

    handleSubmit = e => {
       e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            let newProduct = values;
            this.props.onAddProduct(newProduct);
            this.props.onShowModal();
          }
        });
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net','.pl'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
      };

    showAdminModal = () => {
        this.props.onShowModal();
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
          ));
        return (
            <div className="admin-modal-container">
                <div className="modal-content">
                    <span className="close" onClick={this.showAdminModal} >&times;</span>
                    <h1>Uzupełnij dane</h1>
                    <Form className="form-container" {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label={
                            <span>
                            Nazwa produktu &nbsp;
                            <Tooltip title="Podaj pełną nazwę produktu">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        }
                        >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Uzupełnij pole nazwa!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>

                    <Form.Item 
                        label={
                            <span>
                            Kategoria produktu &nbsp;
                            <Tooltip title="Wybierz kategorię produktu">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                    }
                    >
                        {getFieldDecorator('category', {
                            rules: [{ required: true, message: 'Wybierz kategorię produktu' }],
                        })(<Select defaultValue="fruits" style={{ width: 200 }}>
                            <Option value="fruits">Owoce</Option>
                            <Option value="vegetables">Warzywa</Option>
                            <Option value="dairy products">Nabiał</Option>
                            <Option value="juices">Soki</Option>
                            <Option value="oil">Olej</Option>
                          </Select>)}
                    </Form.Item>

                    <Form.Item
                        label={
                            <span>
                            Cena produktu &nbsp;
                            <Tooltip title="Podaj cenę produktu">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        }
                        >
                        {getFieldDecorator('price', {
                            rules: [{ required: true, message: 'Uzupełnij pole cena!' }],
                        })(<InputNumber min={1} max={100} defaultValue={1} style={{ width: 200 }} />)}
                    </Form.Item>

                    <Form.Item
                        label={
                            <span>
                            Promocja &nbsp;
                            <Tooltip title="Wybierz opcję czy produkt jest w promocji">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        } 
                        >
                        {getFieldDecorator('discount', {
                            rules: [{ required: true, message: 'Wybierz czy produkt jest promocyjny' }],
                        })(<Select defaultValue={false} style={{ width: 200 }}>
                            <Option value={false}>NIE</Option>
                            <Option value={true}>TAK</Option>
                          </Select>)}
                    </Form.Item>

                    <Form.Item
                        label={
                            <span>
                            Procent obnizki [%] &nbsp;
                            <Tooltip title="Podaj o ile procent jest obnizona cena produktu ">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        }
                        >
                        {getFieldDecorator('discountValue', {
                            rules: [{ required: true, message: 'Uzupełnij pole procent obnizki!' }],
                        })(<InputNumber min={0} max={100} value={1} style={{ width: 200 }} />)}
                    </Form.Item>

                    

                    <Form.Item 
                        label={
                            <span>
                            Link do zdjęcia &nbsp;
                            <Tooltip title="Wklej link do zdjęcia produktu">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        } 
                    >
                        {getFieldDecorator('photo', {
                            rules: [{ required: true, message: 'Dodaj link do zdjęcia!' }],
                        })(
                            <AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleWebsiteChange}
                            placeholder="Link"
                            >
                            <Input />
                            </AutoComplete>,
                        )}
                        </Form.Item>
                        
                        <Form.Item wrapperCol={{ span: 21, offset: 20 }}>
                            <Button type="primary" htmlType="submit">
                                Zapisz zmiany
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            
        );
    }
    
};

const mapStateToProps = state => {
    return {
        allProducts: state.getAllProducts
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onGetAllProducts: () => dispatch(actionTypes.initProducts()),
        onAddProduct: (prObj) => dispatch(actionTypes.addNewProduct(prObj)),
        onShowModal: () => dispatch({type: actionTypes.SHOW_EDIT_PRODUCT_MODAL})
    };
  };

const AdminPanelModalForm = Form.create({name: 'register'})(AdminPanelModal);

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelModalForm);