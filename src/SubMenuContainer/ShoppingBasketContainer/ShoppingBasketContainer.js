import React from 'react';
import { connect } from 'react-redux';
import './ShoppingBasketContainer.scss';
import { ButtonWithIcon } from '../../ComponentsUI/ButtonWithIcon/ButtonWithIcon';
import { EventEmitter } from '../../EventEmitter';

const ShoppingBasketContainer = (props) => {
  const showShoppingBasket = () => {
    EventEmitter.dispatch('visibilityBasket', 'true')
  }
  let sumOfProducts = [...new Set(props.arrayWithIds)].length;
  let sumOfProductsElement;
  if (sumOfProducts>0) {
    sumOfProductsElement = <div className="sum-of-products" >{sumOfProducts}</div>
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
    arrayWithIds: state.productsIdsArray
  };
}


export default connect(mapStateToProps)(ShoppingBasketContainer);