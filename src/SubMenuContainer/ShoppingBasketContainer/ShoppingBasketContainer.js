import React from 'react';
import './ShoppingBasketContainer.scss';
import { Button } from '../../ComponentsUI/Button/Button';


export const ShoppingBasketContainer = () => {
    return (
    <>
    <div className="item-submenu-container">
        <Button iconName={ "shopping-cart" } buttonName={"Pokaż kosz"}/>
        {/* <button><Icon type="shopping-cart" /> Pokaż kosz</button> */}
    </div>
    
    </>
    );
}