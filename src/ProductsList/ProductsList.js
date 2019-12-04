import React from "react";
//import axios from "axios";
import { AddElementToShoppingList } from "../AddElementToShoppingList/AddElementToShoppingList";
import "./ProductsList.scss";
import { EventEmitter } from "../EventEmitter";
import { Products } from '../files/products.json'

//const API_URL = "https://api.mockaroo.com/api/ad8dc0f0?count=100&key=fc19d980";

export class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showsToDisplay: Object.entries(Products) // nie jestem pewna czy to dobry pomysł
    };

    EventEmitter.subscribe("textChange", event => {
      // const { products } = this.state;
      let showsToDisplay = Object.entries(Products).filter(show =>

        show[1].product.toLowerCase().startsWith(event.toLowerCase())
      );
      this.setState({ showsToDisplay });
    });
  }
  // for endpoint
  // componentDidMount() {
  //   axios
  //     .get(API_URL)
  //     .then(response => response.data)
  //     .then(data => {
  //       this.setState({
  //         products: data,
  //         showsToDisplay: data
  //       });
  //     });
  // }

  

  render() {
    return (
      <div className='all-product-list'>
        <div className='grid-container'>
          { this.state.showsToDisplay.map(elList => (
           
            <AddElementToShoppingList
              product={elList[1].product}
              price={elList[1].price}
              discount={elList[1].discount}
              discountValue={elList[1].discountValue}
              photo={elList[1].photo}
              key={elList.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
