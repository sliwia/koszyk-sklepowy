import React from "react";
import "./AddElementToShoppingList.scss";

export class AddElementToShoppingList extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  render() {
    const liStyle = { backgroundImage: "url(" + this.props.photo + ")" };
    return (
      <div className='grid-container--item'>
        <div className='grid-container--item--elements'>
          <div className='product-img' style={liStyle}></div>
          <span>{this.props.product}</span>
          <span>Cena: {this.props.price}</span>
          <div className='btn-green'>dodaj do koszyka</div>
        </div>
      </div>
    );
  }
}
