import React from 'react';
import {Button,Input, Icon} from 'antd';
import './SubMenuContainer.scss';
import Logo from '../files/groceries.png';


export const SubMenuContainer = () => {
  return (
    // todo: wszystkie divy to będą osobne komponenty
    <div className="sub-menu-container">
      <div class="logo-container"><img src={ Logo } width="100" width="100" alt="website logo" /></div>
      <div>Kosz na zakupy </div>
      <div class="search-container">
      <Input
        suffix={
          <Button
            className="search-btn"
            style={{ marginRight: -12 }}
            size="large"
            type="primary"
          >
            <Icon type="search" />
          </Button>
        }
        />
      </div>
      <div>Kategorie</div>
    </div>
  );
}

