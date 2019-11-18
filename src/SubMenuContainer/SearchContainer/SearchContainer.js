import React from 'react';
import './SearchContainer.scss';
import { InputWithIcon } from '../../ComponentsUI/InputWithIcon/InputWithIcon';
import { EventEmitter } from '../../EventEmitter';


export const SearchContainer = () => {
  const setProductFilter = (e) => {
    EventEmitter.dispatch('textChange', e.target.value)
  }


  return (
  <>
  <div className="input-search-container">
    <InputWithIcon iconType={"search"} type={"text"} placeholderText={"Wyszukaj"} onKeyUp={setProductFilter}/>   
  </div>
  </>
  );
}