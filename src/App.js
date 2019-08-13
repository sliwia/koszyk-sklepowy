import React from 'react';
import { HeaderView } from './Header';
import { ShoppingBasket } from './ShoppingBasket'
import './App.css'

export class App extends React.Component {
    render() {
  
      return (
        <div>
          <HeaderView />
          <ShoppingBasket />
        </div>
        
      );
    }
  }