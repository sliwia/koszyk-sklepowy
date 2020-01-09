import React from 'react';
import axios from "axios";
import { InputNumber, Icon, Tooltip } from 'antd';
import './ShoppingList.scss'


// published backend (test)
// const allProducts = "https://api.mockaroo.com/api/ad8dc0f0?count=100&key=fc19d980";

//local backend
// endpoint with all products -> method GET
//const allProducts = "http://127.0.0.1:5000/product"; 


// published backend (Server-1470151-1)
// endpoint with all products -> method GET
const allProducts = "http://46.41.138.226:5000/product";

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

  onChange = (value) => {
    console.log('changed', value);
  }

  render(){
    return (
    <div className ="shopping-list-content">
        <table id="shopping-list-table">
        <tr>
          <th id="th--photo"></th>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>Cena [ zł ]</th>
          <th></th>
        </tr>
          {
          this.state.selectedProducts.map((element, index )=> {
            return (<tr key={index} className="li-element"> 
                      <td><img src= {element.photo} alt={element.name} width="80px" height="60px" /></td> 
                      <td>{element.name}</td> 
                      <td><InputNumber min={1} max={100} defaultValue={1} onChange={this.onChange} /></td>
                      <td>{element.price}</td> 
                      <td><Tooltip placement="bottomRight" title={'Usuń produkt'}><div className="btn-del-product"> <Icon type="delete" /></div></Tooltip></td> 
                    </tr>)
          })
          }
        </table>
        
      
    </div>
  );
  }
  
}