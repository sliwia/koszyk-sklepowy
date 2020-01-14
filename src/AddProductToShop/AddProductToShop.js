import React from "react";
import { connect } from 'react-redux';
import { Tooltip, Icon } from "antd";
import "./AddProductToShop.scss";
import * as actionTypes from '../store/actions';


const AddProductToShop = (props) => {

  const addProductToLocalStrorage = (elementId) =>  {
    // Reset item "selectedProductsIdsObj"
    //localStorage.setItem('selectedProductsIdsObj', '')

    //for objects
    if (localStorage.getItem('selectedProductsIdsObj') === null) {
      localStorage.setItem('selectedProductsIdsObj', '{}'); // for objects
    }
    let parseObjectWithProducts = JSON.parse(localStorage.getItem('selectedProductsIdsObj'));
    let newValue;
    if (parseObjectWithProducts[elementId]!==undefined) {
      newValue=parseObjectWithProducts[elementId];
    } else {
      newValue=0;
    }
    parseObjectWithProducts[elementId]= newValue + 1
    let objToString = JSON.stringify(parseObjectWithProducts);
    localStorage.setItem('selectedProductsIdsObj', objToString);

    props.onProductToLocalStrorage(elementId);
  }

  
  let discount;
  if (props.discount === true) {
    discount = (
      <div className="discount-label">{ "-" }{ props.discountValue }{ "%" } </div>
    );
  }
  const liStyle = { backgroundImage: "url(" + props.photo + ")" };
  return (
    <div className="grid-container--item">
      <div className="grid-container--item--elements">
        {discount}
        
        <div className="product-img" style={liStyle}></div>
        <span className="title">{props.name}</span>
        <span className="price">
          Cena:
          {"  " + props.price + " zł"}
        </span>
        <Tooltip placement="right" title={"Dodaj do koszyka"}>
          <div id={props.productId} className="btn-add-product" onClick={addProductToLocalStrorage.bind(this, props.productId)}>
              <Icon type="shopping-cart" style={{ fontSize: '25px', fontWeight: 'bold' }}/>
          </div>
        </Tooltip>
        
      </div>
    </div>
  );
  
}

const mapStateToProps = state => {
  return {
    newIdsList: state.productsIdsArray,//ctr jest to nowy props stworzony dla komponentu, pobiera wartosci ze stanow na zewnatrz komponentu
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    onProductToLocalStrorage: (id) => dispatch({type: actionTypes.ADD_NEXT_ID_TO_LOCALSTORAGE, newId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductToShop);