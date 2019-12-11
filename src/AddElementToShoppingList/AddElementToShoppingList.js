import React from "react";
import { Tooltip, Icon } from "antd";
import "./AddElementToShoppingList.scss";


export class AddElementToShoppingList extends React.Component {

  addProduct(e) {
    // Reset item "selectedProductsIds"
    //localStorage.setItem('selectedProductsIds', '')

    let separator ='; ';
    if (localStorage.getItem("selectedProductsIds") === null) {
      localStorage.setItem('selectedProductsIds', '');
    }
    if (localStorage.getItem("selectedProductsIds") === '') {
      separator = '';
    }
    let selectedProductId = localStorage.getItem('selectedProductsIds') + separator + e.target.id;
    localStorage.setItem('selectedProductsIds', selectedProductId);
    //create list from string 
    // let productsStr = localStorage.getItem("selectedProductsIds");
    // let productsArray = productsStr.split("; ");
    // let productArryUniqueValue = [... new Set(productsArray)]

    // console.log('productsArray',productsArray);
    // console.log('productArryUniqueValue',productArryUniqueValue);
  }

  render() {
    let discount;
    if (this.props.discount === true) {
      discount = (
        <div className="discount-label">{ "-" }{ this.props.discountValue }{ "%" } </div>
      );
    }
    const liStyle = { backgroundImage: "url(" + this.props.photo + ")" };
    return (
      <div className="grid-container--item">
        <div className="grid-container--item--elements">
          {discount}
          <div className="product-img" style={liStyle}></div>
          <span className="title">{this.props.name}</span>
          <span className="price">
            Cena:
            {"  " + this.props.price + " zł"}
          </span>
          <Tooltip placement="right" title={"Dodaj do koszyka"}>
            <div id={this.props.productId} className="btn-add-product" onClick={this.addProduct.bind(this)}>
               <Icon type="shopping-cart" style={{ fontSize: '25px', fontWeight: 'bold' }}/>
            </div>
          </Tooltip>
          
        </div>
      </div>
    );
  }
}
