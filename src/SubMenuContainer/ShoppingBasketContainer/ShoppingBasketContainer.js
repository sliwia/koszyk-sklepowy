import React from 'react';
import { connect } from 'react-redux';
import './ShoppingBasketContainer.scss';
import { ButtonWithIcon } from '../../ComponentsUI/ButtonWithIcon/ButtonWithIcon';
import * as actionTypes from '../../store/actions';

const ShoppingBasketContainer = (props) => {
  let sumOfProducts = props.arrayWithIds.length;
  let sumOfProductsElement;
  if (sumOfProducts>0) {
    sumOfProductsElement = <div className="sum-of-products" >{sumOfProducts}</div>
  }

  return (
    <>
      <div className="shopping-button-container" onClick={()=>props.onShowBasket(true)}>
        { sumOfProductsElement }
        <ButtonWithIcon iconName={"shopping-cart"} buttonName={"Pokaż kosz"} iconSize={'30px'} heightBtn={"50px"} fontSize={"18pt"}/>
      </div>
    </>
  );
  
}

const mapStateToProps = state => {
  return {
    arrayWithIds: state.productsIdsArray
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    onShowBasket: (event) => dispatch({type: actionTypes.SHOW_SHOPPING_BASKET_POPUP, showBasket: event})
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBasketContainer);