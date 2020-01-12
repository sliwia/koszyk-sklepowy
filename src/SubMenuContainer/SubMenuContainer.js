import React from 'react';
import { Divider } from 'antd';
import './SubMenuContainer.scss';
import ShoppingBasketContainer  from './ShoppingBasketContainer/ShoppingBasketContainer';
import { SearchContainer } from './SearchContainer/SearchContainer';
import CategoriesContainer from './CategoriesContainer/CategoriesContainer';



export const SubMenuContainer = () => {
  const diverStyle = {  color: 'white', padding: '0px 4px' }
  
  return (
    <div className="sub-menu-container">
        <Divider orientation="left" style={diverStyle}>Zakupy</Divider>
        <ShoppingBasketContainer />
        <Divider orientation="left" style={diverStyle}>Wyszukiwanie</Divider>
        <SearchContainer />
        <Divider orientation="left" style={diverStyle}>Filtry dodatkowe</Divider>
        <CategoriesContainer />
    </div>
  );
}

