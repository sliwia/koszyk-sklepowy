import React from 'react';
import './ShoppingBasketContainer.scss';
import { ButtonWithIcon } from '../../ComponentsUI/ButtonWithIcon/ButtonWithIcon';

export class ShoppingBasketContainer extends React.Component {
  render() {
    return (
      <>

        <div className="shopping-button-container">
          <ButtonWithIcon onClick={this.props.open} iconName={"shopping-cart"} buttonName={"Pokaż kosz"} />
        </div>
       

      </>
    );
  }
}