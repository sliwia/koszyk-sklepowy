import React, { useState } from 'react';
import './Header.scss';
import { InputWithIcon } from '../ComponentsUI/InputWithIcon/InputWithIcon';
import { WhiteButton } from '../ComponentsUI/WhiteButton/WhiteButton';
import Logo from "../files/groceries.png";
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const login = "admin";
  const password = "admin";
  const [loginText, setLoginText] = useState('')
  const [passwordText, setPasswordText] = useState('')

  const getLogin = (e) =>{
    setLoginText(e.target.value);
  }
  const setPaswd = (e) =>{
    setPasswordText(e.target.value);
  }

  return (
    <div className ="header-container">
      <div className='logo-container'>
        <img src={Logo} width='50' height='50' alt='website logo' />
        <h1> Witaj w naszym sklepie</h1>
      </div>
      <div className="login-container">
        <InputWithIcon iconType={"user"} type={"text"} placeholderText={"Login"}  onKeyUp={getLogin}/>
        <InputWithIcon iconType={"lock"} type={"password"} placeholderText={"Hasło"} onKeyUp={setPaswd} />
        {(loginText===login && passwordText===password) ? <Link to="/admin"><WhiteButton buttonName={"Zaloguj"} /></Link>:<WhiteButton buttonName={"Zaloguj"}  />}
      </div>
      
    </div>
  );
}