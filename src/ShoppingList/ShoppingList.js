import React from 'react';
import axios from "axios";
import './ShoppingList.scss'


// published backend
//const allProducts = "https://api.mockaroo.com/api/ad8dc0f0?count=100&key=fc19d980";

//local backend
// endpoint with all products -> method GET
const allProducts = "http://127.0.0.1:5000/product"; 

export class ShoppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedProducts: []
    }
  }

  componentDidMount() {
    //create list from string 
    let productsStr = localStorage.getItem("selectedProductsIds");
    
    if (productsStr === null) {
      return
    }

    let productsArray = productsStr.split("; ");
    let productArryUniqueValue = [...new Set(productsArray)];

    //console.log('productsArray',productsArray);
    //console.log('productArryUniqueValue',productArryUniqueValue);
    axios
      .get(allProducts)
      .then(response => response.data)
      .then(data => {
        let selectedProducts = data.filter(product =>
          productArryUniqueValue.includes((product.id).toString())>0
        );
        this.setState({
          selectedProducts,
        });
      });
  }
  render(){
    return (
    <div className ="shopping-list-content">
        {
          this.state.selectedProducts.map((element, index )=> {
          return (<div key={index} className="li-element"> <img src= {element.photo} alt={element.name} width="50px" height="50px" /><span>{element.name}</span> <span>Cena: {element.price} zł</span> </div>)
        })
        }
      
    </div>
  );
  }
  
}