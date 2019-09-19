import React from "react";
import "./LogoContainer.scss";
import Logo from "../../files/groceries.png";

export const LogoContainer = () => {
  return (
    <>
      <div className='logo-container'>
        <img src={Logo} width='45' height='45' alt='website logo' />
        <h1> Witaj w naszym sklepie</h1>
      </div>
    </>
  );
};
