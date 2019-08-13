import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../MainCssFiles/Container.css'
import './ShoppingBasket.css'


export function ShoppingBasket() {
  return (
    <div className="container shopping-basket-container">
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}

