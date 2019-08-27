import React from 'react';
import './ProductsList.scss';
import { Products } from '../files/products.json';
import { AddElementToShoppingList } from '../AddElementToShoppingList';

export class ProductsList extends React.Component {
  

  render() {
    return (
      
      <div className="container">

            <br></br>
            {
              //tu bedzie wyszukiwarka 
              console.log(Products)
            }
            
            <ul>
            {
              
              Object.entries(Products)
              .map((listValue, index) =>{
                var product = listValue[1].product;
                var price = listValue[1].price;
                var photo = listValue[1].photo;
                return <AddElementToShoppingList product={product} price={price} photo={photo} />;
            
              })
            }
            </ul>
           

  
        
      </div>
      
    );
  }
}