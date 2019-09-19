import React from "react";
import axios from "axios";
import { AddElementToShoppingList } from "../AddElementToShoppingList/AddElementToShoppingList";
import "./ProductsList.scss";

const API_URL = "https://api.mockaroo.com/api/ad8dc0f0?count=16&key=fc19d980";

export class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios
      .get(API_URL)
      .then(response => response.data)
      .then(data => {
        this.setState({ products: data });
      });
  }

  render() {
    return (
      <div className='all_product_list'>
        <div className='grid-container'>
          {this.state.products.map(elList => (
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
