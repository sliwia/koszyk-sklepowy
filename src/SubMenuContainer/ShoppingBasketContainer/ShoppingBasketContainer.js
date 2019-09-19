import React from 'react';
import './ShoppingBasketContainer.scss';
import { Button } from '../../ComponentsUI/Button/Button';


export const ShoppingBasketContainer = () => {
    return (
    <>
    <div className="item-submenu-container">
        <div className="shopping-button-container">
            <Button iconName={ "shopping-cart" } buttonName={"Pokaż kosz"}/>
        </div>
    </div>
    
    </>
    );
}