import React from 'react';
import { HeaderView } from '../Header';
import { ShoppingBasket } from '../ShoppingBasket/ShoppingBasket.js'

export class MainView extends React.Component {
    render() {
  
      return (
        <div>
          <HeaderView />
          <ShoppingBasket />
        </div>
        
      );
    }
  }