import React from "react";
import "antd/dist/antd.css";
import "./App.scss";

import { Header } from "./Header/Header";
import { SubMenuContainer } from "./SubMenuContainer/SubMenuContainer";
import { ProductsList } from "./ProductsList/ProductsList";
import { StepsOfShopping } from "./StepsOfShopping/StepsOfShopping";

class App extends React.Component {
  render() {
    
    return (
      <>
        <Header />
        <SubMenuContainer />
        <ProductsList />
        <StepsOfShopping />
      </>
    );
  }
};

export default App