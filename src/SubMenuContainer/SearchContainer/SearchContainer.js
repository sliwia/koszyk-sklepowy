import React from 'react';
import './SearchContainer.scss';
import { InputWithIcon } from '../../ComponentsUI/InputWithIcon/InputWithIcon';


export const SearchContainer = () => {
  const setProductFilter = (e) => {
    console.log(e.target.value)
    // let showsToDisplay = shows.filter(show => show.name.toLowerCase().startsWith(e.target.value))

  }


  return (
  <>
  <div className="item-submenu-container">
    <div className="input-search-container">
      <InputWithIcon iconType={"search"} type={"text"} placeholderText={"Wyszukaj"} onKeyUp={setProductFilter}/>
    </div>
      
  </div>
  </>
  );
}