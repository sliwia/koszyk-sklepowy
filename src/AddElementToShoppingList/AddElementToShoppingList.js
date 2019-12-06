import React from "react";
import { Tooltip } from "antd";
import "./AddElementToShoppingList.scss";


export class AddElementToShoppingList extends React.Component {
  // constructor(props) {
  //  super(props);

  // }

  addProduct(e) {
    // Reset item "selectedProductsIds"
    //localStorage.setItem('selectedProductsIds', '')

    let separator ='; '
    if (localStorage.getItem("selectedProductsIds") === null) {
      localStorage.setItem('selectedProductsIds', '')
    }
    if (localStorage.getItem("selectedProductsIds") === '') {
      separator = ''
    }
    let selectedProductId = localStorage.getItem('selectedProductsIds') + separator + e.target.id;
    localStorage.setItem('selectedProductsIds', selectedProductId)
    console.log(localStorage.getItem('selectedProductsIds'));
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
          <span className="title">{this.props.product}</span>
          <span className="price">
            Cena:
            {"  " + this.props.price + " zł"}
          </span>
          {/* Dodać toltip "dodaj do koszyka" a przy dodaj dodać ionke +, przy kliknięciu dodać zmiane koloru ła - imitacja kliknięcia*/}
          <Tooltip placement="right" title={"Dodaj do koszyka"}>
            <div id={this.props.productId} className="btn-add-product" onClick={this.addProduct.bind(this)}> + </div>
          </Tooltip>
          
          
        </div>
      </div>
    );
  }
}
