import React from 'react';
import './ShoppingBasketContainer.scss';
import { ButtonWithIcon } from '../../ComponentsUI/ButtonWithIcon/ButtonWithIcon';
import { StepsOfShopping } from '../../StepsOfShopping/StepsOfShopping';


export class ShoppingBasketContainer extends React.Component  {
  render() {
    return (
      <>
      
      <div className="shopping-button-container">
          <ButtonWithIcon iconName={ "shopping-cart" } buttonName={"Pokaż kosz"}/>   
      </div>
      
      
      </>
    );
  }
}