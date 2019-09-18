import React from 'react';
import './LogoContainer.scss';
import Logo from '../../files/groceries.png';


export const LogoContainer = () => {
    return (
    <>
        <div class="logo-container"><img src={ Logo } width="100" width="100" alt="website logo" /></div>     
    </>
    );
}