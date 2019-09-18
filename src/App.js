import React from "react";
import "antd/dist/antd.css";
import "./App.scss";

import { Header } from "./Header/Header";
import { SubMenuContainer } from "./SubMenuContainer/SubMenuContainer";
import { ProductsList } from "./ProductsList/ProductsList";

export const App = () => {
  return (
    <>
      <Header />
      <SubMenuContainer />
      <ProductsList />
    </>
  );
};
