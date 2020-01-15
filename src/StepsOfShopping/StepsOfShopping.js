import React, { useState } from 'react';
import { Steps, Icon, Tooltip } from 'antd';
 import { connect } from 'react-redux';
import ShoppingList from '../ShoppingList/ShoppingList';
import { MethodsOfPayment } from '../MethodsOfPayment/MethodsOfPayment';
import './StepsOfShopping.scss';
import * as actionTypes from '../store/actions';

const { Step } = Steps;

const steps = [
  {
    content: <ShoppingList />,
    icon: 'shopping-cart',
  },
  {
    content: <MethodsOfPayment />,
    icon: 'credit-card'
  },
  {
    content: 'Zakupy zakończone!',
    icon: 'check-circle'
  }
];

const StepsOfShopping = (props) =>{
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const closePopup = () => {
    props.onShowBasket(false)
  }

  const currentStep = current;
  let prevButton = <div></div>;
  let nextButton = <div></div>;

  if (currentStep > 0) {
    prevButton = <div onClick={() => prev()} ><Icon type="left" /> Wstecz</div>
  }

  if (currentStep < steps.length - 1) {
    nextButton = <div onClick={() => next()}>Dalej <Icon type="right" /></div>
  }
  return (
    <div className="steps-container" >
      <Tooltip placement="bottom" title={"Zamknij"}>
        <div className="btn-close" onClick={() => closePopup()}>
          <Icon type="close-square" style={{ fontSize: '27px', color: 'white' }} />
        </div>
      </Tooltip>
      
      <div className="header-content">
        <h1>
          Moje zakupy
        </h1>
      </div>

      <Steps current={currentStep}>
        {steps.map((index, i = 1) => (
          <Step key={currentStep + i++} icon={<Icon type={index.icon} />} />
        ))}
      </Steps>

      <div className="titles-content">
        <span>Szczegóły zakupów</span>
        <span>Metoda płatności</span>
        <span>Potwierdzenie</span>
      </div>

      <div className="steps-content">
        {steps[current].content}
      </div>
      <div className="steps-btns">
        {prevButton}
        {nextButton}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    onShowBasket: (event) => dispatch({type: actionTypes.SHOW_SHOPPING_BASKET_POPUP, showBasket: event})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(StepsOfShopping);