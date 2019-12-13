import React from "react";
import { Tooltip, Icon } from "antd";
import "./AddProductToShop.scss";


export class AddProductToShop extends React.Component {

  addProductToLocalStrorage = (elementId) =>  {
    // Reset item "selectedProductsIds"
    //localStorage.setItem('selectedProductsIds', '')
    let separator ='; ';
    if (localStorage.getItem("selectedProductsIds") === null) {
      localStorage.setItem('selectedProductsIds', '');
    }
    if (localStorage.getItem("selectedProductsIds") === '') {
      separator = '';
    }

    let selectedProductId = localStorage.getItem('selectedProductsIds') + separator + elementId;
    localStorage.setItem('selectedProductsIds', selectedProductId);
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
            <div id={this.props.productId} className="btn-add-product" onClick={this.addProductToLocalStrorage.bind(this, this.props.productId)}>
               <Icon type="shopping-cart" style={{ fontSize: '25px', fontWeight: 'bold' }}/>
            </div>
          </Tooltip>
          
        </div>
      </div>
    );
  }
}
