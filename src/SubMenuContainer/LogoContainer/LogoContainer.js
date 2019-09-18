import React from "react";
import "./LogoContainer.scss";
import Logo from "../../files/groceries.png";

export const LogoContainer = () => {
  return (
    <>
      <div className='logo-container'>
        <img src={Logo} width='100' height='100' alt='website logo' />
      </div>
    </>
  );
};
