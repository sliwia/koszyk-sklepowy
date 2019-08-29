import React from 'react';
import { Header } from './Header/Header';
import { OpenBasketButton } from './OpenBasketButton/OpenBasketButton'
import { ProductsList } from './ProductsList/ProductsList'
import './App.scss'

export class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <OpenBasketButton />
        <ProductsList />
      </>
      
    );
  }
}