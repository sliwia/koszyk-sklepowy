import React from "react";
import axios from "axios";
import { AddElementToShoppingList } from "../AddElementToShoppingList/AddElementToShoppingList";
import "./ProductsList.scss";
import { EventEmitter } from '../EventEmitter';

const API_URL = "https://api.mockaroo.com/api/ad8dc0f0?count=100&key=fc19d980";

export class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showsToDisplay:[]

    };

    EventEmitter.subscribe('langChange', (event) => {
      const { products } = this.state;
      let showsToDisplay = products.filter(show => show.product.toLowerCase().startsWith(event.toLowerCase()))
      this.setState({showsToDisplay})
      })

  }
  componentDidMount() {
    axios
      .get(API_URL)
      .then(response => response.data)
      .then(data => {
        this.setState({ 
          products: data,
          showsToDisplay:data
         });
      });
  }

  render() {
    return (
      <div className='all_product_list'>
        <div className='grid-container'>
          {this.state.showsToDisplay.map(elList => (
            <AddElementToShoppingList
              product={elList.product}
              price={elList.price}
              photo={elList.photo}
              key={elList.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
