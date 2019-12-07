import React from 'react';
import './ShoppingBasketContainer.scss';
import { ButtonWithIcon } from '../../ComponentsUI/ButtonWithIcon/ButtonWithIcon';
import { EventEmitter } from '../../EventEmitter';

export const ShoppingBasketContainer = () => {

  const showShoppingBasket = () => {
    EventEmitter.dispatch('visibilityBasket', 'true')
  }
    return (
      <>
        <div className="shopping-button-container" onClick={showShoppingBasket}>
          <ButtonWithIcon iconName={"shopping-cart"} buttonName={"Pokaż kosz"} />
        </div>
      </>
    );
  
}