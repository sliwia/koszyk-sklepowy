import React from 'react';
import { Header } from './Header';
import { OpenBasketButton } from './OpenBasketButton'
import { ProductsList } from './ProductsList'
import './App.css'

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <OpenBasketButton />
        <ProductsList />
      </div>
      
    );
  }
}