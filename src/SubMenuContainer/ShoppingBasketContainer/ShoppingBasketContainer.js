import React from 'react';
import './ShoppingBasketContainer.scss';
import { ButtonWithIcon } from '../../ComponentsUI/ButtonWithIcon/ButtonWithIcon';
import { EventEmitter } from '../../EventEmitter';

export const ShoppingBasketContainer = () => {

  const showShoppingBasket = () => {
    EventEmitter.dispatch('visibilityBasket', 'true')
  }
  let productsStr = localStorage.getItem("selectedProductsIds");
  let productsArray;
  if (productsStr === null) {
    productsArray = [];
  } else {
    productsArray = productsStr.split("; ");
  }
  let productArryLength = [...new Set(productsArray)].length;
  
  let sumOfProductsElement;
  if (productArryLength>0 && productsArray[0] !== "") {
    sumOfProductsElement = <div className="sum-of-products" >{productArryLength}</div>
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