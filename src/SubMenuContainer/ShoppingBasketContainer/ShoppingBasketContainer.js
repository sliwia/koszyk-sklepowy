import React from 'react';
import { connect } from 'react-redux';
import './ShoppingBasketContainer.scss';
import { ButtonWithIcon } from '../../ComponentsUI/ButtonWithIcon/ButtonWithIcon';
import { EventEmitter } from '../../EventEmitter';

const ShoppingBasketContainer = (props) => {
  const showShoppingBasket = () => {
    EventEmitter.dispatch('visibilityBasket', 'true')
  }
  // let productsStr = localStorage.getItem("selectedProductsIds");
  // let productsArray;
  // if (productsStr === null) {
  //   productsArray = [];
  // } else {
  //   productsArray = productsStr.split("; ");
  // }
  // let productArryLength = [...new Set(productsArray)].length;
  // if (props.sumOfProduct){
    
  // }
  let sumOfProductsElement;
  if (props.sumOfProduct>0) {
    sumOfProductsElement = <div className="sum-of-products" >{props.sumOfProduct}</div>
  }

  return (
    <>
      <div className="shopping-button-container" onClick={showShoppingBasket}>
        { sumOfProductsElement }
        <ButtonWithIcon iconName={"shopping-cart"} buttonName={"Pokaż kosz"} iconSize={'30px'} />
      </div>
    </>
  );
  
}

const mapStateToProps = state => {
  return {
    sumOfProduct: state.tempCounterProduct //sumOfProduct jest to nowy props stworzony dla komponentu, pobiera wartosci ze stanow na zewnatrz komponentu
  };
}


export default connect(mapStateToProps)(ShoppingBasketContainer);