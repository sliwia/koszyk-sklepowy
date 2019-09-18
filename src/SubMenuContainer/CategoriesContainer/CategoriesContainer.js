import React from 'react';
import { Icon } from 'antd';
import './CategoriesContainer.scss';


export const CategoriesContainer = () => {
    return (
    <>
        <div className="item-submenu-container">
            <div className="item-categories" >Kategorie <Icon type="down" /></div>
            <div className="submenu-categories">
                <div><Icon type="minus" /> Owoce</div>
                <div><Icon type="minus" /> Warzywa</div>
                <div><Icon type="minus" /> Nabiał</div>
                <div><Icon type="minus" /> Soki</div>
            </div>
        </div>
    </>
    );
}