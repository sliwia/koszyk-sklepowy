import React from 'react';
import { Header } from './Header';
import { OpenBasketButton } from './OpenBasketButton'
import { ProductsList } from './ProductsList'
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