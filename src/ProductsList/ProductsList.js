import React from 'react';
import axios from 'axios';
import { AddElementToShoppingList } from '../AddElementToShoppingList/AddElementToShoppingList';
import './ProductsList.scss';
// import { Products } from '../files/products.json';
const API_URL = 'https://api.mockaroo.com/api/ad8dc0f0?count=16&key=fc19d980';


export class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[]
    }
  }
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ products: data });
      })
    }
    
  render() {
    
    return (

      <div className="container">

            <br></br>

            { console.log(this.state.products)}
            <div className="grid-container">
             {
             
              Object.entries(this.state.products)
              .map((listValue, index) =>{
                var product = listValue[1].product;
                var price = listValue[1].price;
                var photo = listValue[1].photo;
                return <AddElementToShoppingList product={product} price={price} photo={photo} key={index}/>;
            
              })
            } 
            </div>
      </div>
    );
  }
}