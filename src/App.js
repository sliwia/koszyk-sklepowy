import React from "react";
import "antd/dist/antd.css";
import "./App.scss";

import { Header } from "./Header/Header";
import { SubMenuContainer } from "./SubMenuContainer/SubMenuContainer";
import ProductsList from "./ProductsList/ProductsList";
import StepsOfShopping  from "./StepsOfShopping/StepsOfShopping";
import { connect} from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SubMenuContainer />
        <ProductsList />
        {(this.props.shwPopup===true)?<StepsOfShopping />:<div></div>}
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    shwPopup: state.showPopup,
    
  };
}

export default connect(mapStateToProps)(App);