import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './OpenBasketButton.scss'


export function OpenBasketButton() {
  return (
    <div className="container shopping-basket-container">
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}

