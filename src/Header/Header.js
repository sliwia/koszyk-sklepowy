import React from 'react';
import './Header.scss';
import { InputWithIcon } from '../ComponentsUI/InputWithIcon/InputWithIcon';
import { WhiteButton } from '../ComponentsUI/WhiteButton/WhiteButton';
import Logo from "../files/groceries.png";


export const Header = () => {
  
  return (
    <div className ="header-container">
      <div className='logo-container'>
        <img src={Logo} width='50' height='50' alt='website logo' />
        <h1> Witaj w naszym sklepie</h1>
      </div>

      <div className="login-container">
        <InputWithIcon iconType={"user"} type={"text"} placeholderText={"Login"} />
        <InputWithIcon iconType={"lock"} type={"password"} placeholderText={"Hasło"} />
        <WhiteButton buttonName={"Zaloguj"} />
      </div>
      
    </div>
  );
}