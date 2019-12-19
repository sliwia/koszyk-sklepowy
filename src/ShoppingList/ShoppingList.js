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
        <table id="shopping-list-table">
        <tr>
          <th id="th--photo"></th>
          <th>Nazwa</th>
          <th>Ilość [ szt/kg/l ]</th>
          <th>Cena [ zł ]</th>
        </tr>
          {
          this.state.selectedProducts.map((element, index )=> {
            return (<tr key={index} className="li-element"> 
                      <td><img src= {element.photo} alt={element.name} width="80px" height="60px" /></td> 
                      <td>{element.name}</td> 
                      <td>1</td>
                      <td>{element.price}</td> 
                    </tr>)
          })
          }
        </table>
        
      
    </div>
  );
  }
  
}