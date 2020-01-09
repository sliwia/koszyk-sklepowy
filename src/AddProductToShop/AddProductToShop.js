import React from "react";
import { connect } from 'react-redux';
import { Tooltip, Icon } from "antd";
import "./AddProductToShop.scss";


const AddProductToShop = (props) => {

  const addProductToLocalStrorage = (elementId) =>  {
    // Reset item "selectedProductsIds"
    //localStorage.setItem('selectedProductsIds', '')
    props.onProductCounter();
   
    let separator ='; ';
    if (localStorage.getItem("selectedProductsIds") === null) {
      localStorage.setItem('selectedProductsIds', '');
    }
    if (localStorage.getItem("selectedProductsIds") === '') {
      separator = '';
    }

    let selectedProductId = localStorage.getItem('selectedProductsIds') + separator + elementId;
    localStorage.setItem('selectedProductsIds', selectedProductId);

    console.log('ctr prop',props.ctr)
    console.log('ctr prop',props.test)
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
        {/* liczba dodawanych produktów, komponent renderuje się po zmianie liczby produktow w storze */}
        <span>{props.ctr}</span>
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
    test: state.results,
    ctr: state.countProducts //ctr jest to nowy props stworzony dla komponentu, pobiera wartosci ze stanow na zewnatrz komponentu
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    onProductCounter: () => dispatch({type:'ADD_PRODUCT'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductToShop);