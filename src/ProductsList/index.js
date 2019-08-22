import React from 'react';
import './ProductsList.css'
import { Products } from '../files/products.json' 
import { AddElementToShoppingList } from '../AddElementToShoppingList'
export class ProductsList extends React.Component {

  render() {
    return (
      
      <div className="container">
            <h2>Lista produktów dostępnych w sklepie</h2>
            <br></br>
            {
              //tu bedzie wyszukiwarka 
            }
            {

              
                console.log(Products)
            }
            <ul>
            
            {<AddElementToShoppingList />}
            </ul>
           

  
        
      </div>
      
    );
  }
}