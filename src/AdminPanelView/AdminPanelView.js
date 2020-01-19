import React, { useEffect} from "react";
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { Icon, Button, Modal } from 'antd';
import './AdminPanelView.scss';
import * as actionTypes from '../store/actions';
import AdminPanelModal from "../AdminPanelModal/AdminPanelModal";

const { confirm } = Modal;

const AdminPanelView = (props) => {

    useEffect(() => {
        props.onGetAllProducts();
      }, []);

    const showDeleteConfirm = (id,name) => {
        confirm({
            title: 'Usuń produkt',
            content: 'Czy na pewno chcesz usunąć produkt: ' + name.toLowerCase() + '?',
            okText: 'Tak',
            okType: 'danger',
            cancelText: 'Nie',            

            onOk() {
                // dodac usuwanie z localstorage
                props.onDelProduct(id);
            },
            onCancel() {
            console.log('Cancel');
            },
        });
    }
    const showAdminModal = () => {
        props.onShowModal();
    }
    
    return (
    
        <div className="container admin-container">
            <Link to="/"><Button className="btn-return"><Icon type="arrow-left" /> Powrót do sklepu</Button></Link>
            <h1>Edytuj listę produktów w sklepie</h1>
            <Button className="btn-add" onClick={showAdminModal}> <Icon type="plus-circle" /> Dodaj nowy produkt </Button>
            {(props.showModal===true)?<AdminPanelModal />:<span></span>}
            <table id="admin-main-table">
                <tr>
                    <th>Produkt</th>
                    <th>Cena</th>
                    <th>Promocja</th>
                    <th>Promocja [%]</th>
                    <th>Zdjęcie</th>
                    {/* <th>Edytuj</th> */}
                    <th>Usuń</th>
                </tr>
                {props.allProducts.map((elList, index) => {
                    return (
                        <tr key={index}>
                            <td>{elList.name}</td>
                            <td>{elList.price}</td>
                            <td>{ elList.discount ===false ? "NIE": "TAK" }</td>
                            <td>{elList.discountValue ===null? "": elList.discountValue}</td>
                            <td>{elList.photo}</td>
                            {/* <td><Button>Edytuj</Button></td> */}
                            <td><Button onClick={showDeleteConfirm.bind(this,elList.id, elList.name)}>Usuń</Button></td>
                        </tr>
                    )

                })}
            </table>
            
        </div>
        
    );
};

const mapStateToProps = state => {
    return {
        allProducts: state.getAllProducts,
        showModal: state.showEditProductModal
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onGetAllProducts: () => dispatch(actionTypes.initProducts()),
        onDelProduct: (id) => dispatch(actionTypes.delProduct(id)),
        onShowModal: () => dispatch({type: actionTypes.SHOW_EDIT_PRODUCT_MODAL})
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelView);