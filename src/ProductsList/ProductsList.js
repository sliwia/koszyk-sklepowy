import React from "react";
import axios from "axios";
import { AddElementToShoppingList } from "../AddElementToShoppingList/AddElementToShoppingList";
import "./ProductsList.scss";
import { EventEmitter } from "../EventEmitter";

// published backend
//const allProducts = "https://api.mockaroo.com/api/ad8dc0f0?count=100&key=fc19d980";

//local backend
const allProducts = "http://127.0.0.1:5000/product";

export class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showsToDisplay: [],
      products: []
      
    };

    EventEmitter.subscribe("textChange", event => {
      let showsToDisplay = this.state.products.filter(show =>
        show.name.toLowerCase().startsWith(event.toLowerCase())
      );
      this.setState({ showsToDisplay });
    });
  }
  //for endpoint
  componentDidMount() {
    axios
      .get(allProducts)
      .then(response => response.data)
      .then(data => {
        this.setState({
          products: data,
          showsToDisplay: data
        });
      });
  }

  render() {
    return (
      <div className="all-product-list">
        <div className="grid-container">
          {this.state.showsToDisplay.map((elList, index) => (
            //console.log(elList)
            <AddElementToShoppingList
              productId = { elList.id }
              name={elList.name}
              price={elList.price}
              discount={elList.discount}
              discountValue={elList.discountValue}
              photo={elList.photo}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
