import React from 'react';
import { Icon } from 'antd';
import './ShoppingBasketContainer.scss';



export const ShoppingBasketContainer = () => {
    return (
    <>
    <div className="item-submenu-container">
        <button><Icon type="shopping-cart" /> Pokaż kosz</button>
    </div>
    
    </>
    );
}