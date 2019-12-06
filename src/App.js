import React from "react";
import "antd/dist/antd.css";
import "./App.scss";

import { Header } from "./Header/Header";
import { SubMenuContainer } from "./SubMenuContainer/SubMenuContainer";
import { ProductsList } from "./ProductsList/ProductsList";
import { StepsOfShopping } from "./StepsOfShopping/StepsOfShopping";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  closePopup() {
    this.setState({
      showPopup: false
    });
  }
  openPopup() {
    this.setState({
      showPopup: true
    });
  }
  render() {
    let steptrue = <StepsOfShopping />
    let openClose
    if (this.state.showPopup === true) {
      openClose = steptrue
    }
    return (
      <>
        <Header />
        <SubMenuContainer />
        <ProductsList />
        {openClose}
      </>
    );
  }
};

export default App