import React from 'react';
import './ShoppingBasketContainer.scss';
import { ButtonWithIcon } from '../../ComponentsUI/ButtonWithIcon/ButtonWithIcon';


export const ShoppingBasketContainer = () => {
    return (
    <>
    
    <div className="shopping-button-container">
        <ButtonWithIcon iconName={ "shopping-cart" } buttonName={"Pokaż kosz"}/>
    </div>
    
    </>
    );
}