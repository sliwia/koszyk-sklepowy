import React from "react";
import { connect } from 'react-redux';
import { Tooltip, Icon } from "antd";
import "./AddProductToShop.scss";


class AddProductToShop extends React.Component {


  addProductToLocalStrorage = (elementId) =>  {
    // Reset item "selectedProductsIds"
    //localStorage.setItem('selectedProductsIds', '')
    this.props.onProductCounter()
   
    let separator ='; ';
    if (localStorage.getItem("selectedProductsIds") === null) {
      localStorage.setItem('selectedProductsIds', '');
    }
    if (localStorage.getItem("selectedProductsIds") === '') {
      separator = '';
    }

    let selectedProductId = localStorage.getItem('selectedProductsIds') + separator + elementId;
    localStorage.setItem('selectedProductsIds', selectedProductId);

    console.log('ctr prop',this.props.ctr)
    console.log('ctr prop',this.props.test)
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
          {/* liczba dodawanych produktów, komponent renderuje się po zmianie liczby produktow w storze */}
          <span>{this.props.ctr}</span>
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

const mapStateToProps = state => {
  return {
    test: state.results,
    ctr: state.countProducts //ctr jest to nowy props stworzony dla komponentu, pobiera wartosci ze stanow na zewnatrz komponentu
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    onProductCounter: () => dispatch({type:'ADD_PRODUCT'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductToShop);