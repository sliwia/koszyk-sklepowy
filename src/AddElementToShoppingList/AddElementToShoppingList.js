import React from "react";
import "./AddElementToShoppingList.scss";

export class AddElementToShoppingList extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  render() {
    let discount;
    if (this.props.discount === true) {
      discount = (
        <div className='discount_label'>{this.props.discountValue} {"% taniej"} </div>
      );
    }
    const liStyle = { backgroundImage: "url(" + this.props.photo + ")" };
    return (
      <div className='grid-container--item'>
        <div className='grid-container--item--elements'>
          {discount}
          <div className='product-img' style={liStyle}></div>
          <span className='title'>{this.props.product}</span>
          <span className='price'>
            Cena:
            {"  " + this.props.price}
          </span>
          <div className='btn-green'>dodaj do koszyka</div>
        </div>
      </div>
    );
  }
}
