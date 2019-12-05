import React from "react";
import "antd/dist/antd.css";
import "./App.scss";

import { Header } from "./Header/Header";
import { SubMenuContainer } from "./SubMenuContainer/SubMenuContainer";
import { ProductsList } from "./ProductsList/ProductsList";
import { StepsOfShopping } from "./StepsOfShopping/StepsOfShopping";
import { ButtonWithIcon } from '././ComponentsUI/ButtonWithIcon/ButtonWithIcon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  closePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  openPopup() {
    this.setState({
      showPopup: this.state.showPopup
    });
  }
  render() {
    return (
      <>
        <Header />
        <SubMenuContainer />
        <ProductsList />
        <StepsOfShopping
          text='zamknij'
          closePopup={this.closePopup.bind(this)}

        />

        <ButtonWithIcon
          action={this.openPopup.bind(this)}
          iconName={"shopping-cart"}
          buttonName={"Pokaż kosz"}
        />

      </>
    );
  }
};

export default App