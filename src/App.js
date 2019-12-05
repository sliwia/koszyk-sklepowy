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
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <>
        <Header />
        <SubMenuContainer />
        <ProductsList />
        {this.state.showPopup ?
          <StepsOfShopping
            text='zamknij'
            closePopup={this.togglePopup.bind(this)}

          />
          : null
        }
      </>
    );
  }
};

export default App