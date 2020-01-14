import React from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { InputNumber, Icon, Tooltip } from 'antd';
import './ShoppingList.scss'
import * as actionTypes from '../store/actions';


// published backend (test)
// const allProducts = "https://api.mockaroo.com/api/ad8dc0f0?count=100&key=fc19d980";

//local backend
// endpoint with all products -> method GET
//const allProducts = "http://127.0.0.1:5000/product"; 


// published backend (Server-1470151-1)
// endpoint with all products -> method GET
const allProducts = "http://46.41.138.226:5000/product";

class ShoppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedProducts: [],
      dataAboutProducts:{},
      updateList: false
    }
  }

  componentDidMount() {
    let productsStr = localStorage.getItem("selectedProductsIdsObj");
    
    if (productsStr === null) {
      return
    }

    let productsArray = JSON.parse(productsStr);
    this.setState({
      dataAboutProducts: productsArray
    })
    let productArryUniqueValue = Object.keys(productsArray);
    
    axios
      .get(allProducts)
      .then(response => response.data)
      .then(data => {
        let selectedProducts = data.filter(product =>
          productArryUniqueValue.includes((product.id).toString())>0
        );
        this.setState({
          selectedProducts,
        });
      });
  }

  onChange = (elementId) =>(newValue)=> {
    let parseObjectWithProducts = JSON.parse(localStorage.getItem('selectedProductsIdsObj'));
    parseObjectWithProducts[elementId]= newValue;
    let objToString = JSON.stringify(parseObjectWithProducts);
    localStorage.setItem('selectedProductsIdsObj', objToString);
  }

  delProduct = (elementId) => {
    let parseObjectWithProducts = JSON.parse(localStorage.getItem('selectedProductsIdsObj'));
    delete parseObjectWithProducts[elementId]

    let objToString = JSON.stringify(parseObjectWithProducts);
    localStorage.setItem('selectedProductsIdsObj', objToString);
    this.props.onDelElement(Object.keys(parseObjectWithProducts));
    let newSelectedProductsListIds = Object.keys(parseObjectWithProducts);
    let selectedProducts = this.state.selectedProducts.filter(product =>
      newSelectedProductsListIds.includes((product.id).toString())>0
    );
    this.setState({
      selectedProducts: selectedProducts
    })

  }

  render(){
    return (
    <div className ="shopping-list-content">
        <table id="shopping-list-table">
        <tr>
          <th id="th--photo"></th>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>Cena [ zł ]</th>
          <th></th>
        </tr>
          {
          this.state.selectedProducts.map((element, index )=> {
            let idPr = element.id;
            return (<tr key={index} className="li-element">
                      <td><img src= {element.photo} alt={element.name} width="80px" height="60px" /></td> 
                      <td>{element.name}</td> 
                      <td><InputNumber id={idPr} min={1} max={100} defaultValue={this.state.dataAboutProducts[idPr]} onChange={this.onChange(idPr)} /></td>
                      <td>{element.price}</td> 
                      <td><Tooltip placement="bottomRight" title={'Usuń produkt'}><div className="btn-del-product" onClick={this.delProduct.bind(this, idPr)}> <Icon type="delete" /></div></Tooltip></td> 
                    </tr>)
          })
          }
        </table>
        
      
    </div>
  );
  }
  
}

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    onDelElement: (list) => dispatch({type: actionTypes.DEL_ID_ELEMENT, prodsIdsArray: list})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList)