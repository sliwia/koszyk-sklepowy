import React from 'react';
import './SubMenuContainer.scss';
import { LogoContainer } from './LogoContainer/LogoContainer';
import { ShoppingBasketContainer } from './ShoppingBasketContainer/ShoppingBasketContainer';
import { SearchContainer } from './SearchContainer/SearchContainer';
import { CategoriesContainer } from './CategoriesContainer/CategoriesContainer';



export const SubMenuContainer = () => {
  return (
    // todo: wszystkie divy to będą osobne komponenty
    <div className="sub-menu-container">
      <LogoContainer />
      <ShoppingBasketContainer />
      <SearchContainer />
      <CategoriesContainer />
    </div>
  );
}

