import React from 'react';
import './Header.scss';
import { InputWithIcon } from '../ComponentsUI/InputWithIcon/InputWithIcon';
import { WhiteButton } from '../ComponentsUI/WhiteButton/WhiteButton';



export const Header = () => {
  
  return (
    <div className ="header-container">
      <div className="login-container">
        <InputWithIcon iconType={"user"} type={"text"} placeholderText={"Login"} />
        <InputWithIcon iconType={"lock"} type={"password"} placeholderText={"Hasło"} />
        <WhiteButton buttonName={"Zaloguj"} />
      </div>
      
    </div>
  );
}