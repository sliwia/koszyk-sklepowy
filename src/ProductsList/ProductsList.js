import React from "react";
import { connect } from 'react-redux';
import AddProductToShop from "../AddProductToShop/AddProductToShop";
import "./ProductsList.scss";
import { EventEmitter } from "../EventEmitter";
import * as actionTypes from '../store/actions';

// published backend
// const allProducts = "https://api.mockaroo.com/api/ad8dc0f0?count=100&key=fc19d980";

//local backend
// endpoint with all products -> method GET
//const allProducts = "http://127.0.0.1:5000/product"; 

// published backend (Server-1470151-1)
// endpoint with all products -> method GET
//const allProducts = "http://46.41.138.226:5000/product";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText:''
    };

    EventEmitter.subscribe("textChange", event => {
      this.setState({ filterText: event.toLowerCase() });
    });
  }
  //for endpoint
  componentDidMount() {
      this.props.onGetAllProducts();
  }

  render() {
    return (
      <div className="all-product-list">
        <div className="grid-container">
          {this.props.getProducts.filter( element => {
            return ((element.category==='fruits' && this.props.shwFruits===true) ||
                    (element.category==='vegetables' && this.props.shwVegetables===true) ||
                    (element.category==='juices' && this.props.shwJuices===true )||
                    (element.category==='dairy products' && this.props.shwDairyProducts===true)||
                    (element.category==='oil' && this.props.shwOils===true)) &&
                    (element.name.toLowerCase().startsWith(this.state.filterText))
                    
          })
          .map((elList, index) => (
            <AddProductToShop
              productId = { elList.id }
              name={elList.name}
              price={elList.price}
              discount={elList.discount}
              discountValue={elList.discountValue}
              photo={elList.photo}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shwFruits: state.showFruits,
    shwVegetables: state.showVegetables,
    shwJuices: state.showJuices,
    shwDairyProducts: state.showDairyProducts,
    shwOils: state.showOils,
    getProducts: state.getAllProducts
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    onGetAllProducts: () => dispatch(actionTypes.initProducts())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);