import React from 'react';
import './SearchContainer.scss';
import { InputWithIcon } from '../../ComponentsUI/InputWithIcon/InputWithIcon';


export const SearchContainer = () => {
    return (
    <>
    <div className="item-submenu-container">
      <div className="input-search-container">
        <InputWithIcon iconType={"search"} type={"text"} placeholderText={"Wyszukaj"} />
      </div>
        
    </div>
    </>
    );
}