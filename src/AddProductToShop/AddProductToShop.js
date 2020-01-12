import React from "react";
import { connect } from 'react-redux';
import { Tooltip, Icon } from "antd";
import "./AddProductToShop.scss";
import * as actionTypes from '../store/actions';


const AddProductToShop = (props) => {

  const addProductToLocalStrorage = (elementId) =>  {
    // Reset item "selectedProductsIds"
    //localStorage.setItem('selectedProductsIds', '')
    props.onProductToLocalStrorage(elementId);
   
    let separator ='; ';
    if (localStorage.getItem("selectedProductsIds") === null) {
      localStorage.setItem('selectedProductsIds', '');
    }
    if (localStorage.getItem("selectedProductsIds") === '') {
      separator = '';
    }

    let selectedProductId = localStorage.getItem('selectedProductsIds') + separator + elementId;
    localStorage.setItem('selectedProductsIds', selectedProductId);

    // console.log('ctr prop',props.ctr)
    // console.log('ctr prop',props.test)
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