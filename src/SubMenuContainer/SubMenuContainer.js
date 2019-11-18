import React from 'react';
import './SubMenuContainer.scss';
import { ShoppingBasketContainer } from './ShoppingBasketContainer/ShoppingBasketContainer';
import { SearchContainer } from './SearchContainer/SearchContainer';
import { CategoriesContainer } from './CategoriesContainer/CategoriesContainer';



export const SubMenuContainer = () => {
  return (
    <div className="sub-menu-container">
      <div className="item-submenu-container">
        <ShoppingBasketContainer />
      </div>
      <div className="item-submenu-container">
        <SearchContainer />
      </div>
      <div className="item-submenu-container categ-container">
        <CategoriesContainer />
      </div>
      
    </div>
  );
}

