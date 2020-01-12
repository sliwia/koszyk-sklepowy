import React from 'react';
import { Steps, Icon, Tooltip } from 'antd';
import { EventEmitter } from '../EventEmitter';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { MethodsOfPayment } from '../MethodsOfPayment/MethodsOfPayment';
import './StepsOfShopping.scss';


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

export class StepsOfShopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      showPopup: false
    };

    EventEmitter.subscribe("visibilityBasket", event => {
      this.setState({ 
        showPopup: event,
        current:0
      });
    });

  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  closePopup() {
    this.setState({
      showPopup: false
    });
  }

  render() {
    const { current } = this.state;
    let prevButton = <div></div>;
    let nextButton = <div></div>;
    let stepsContainerStyle="steps-container";
    if (current > 0) {
      prevButton = <div onClick={() => this.prev()} ><Icon type="left" /> Wstecz</div>
    }

    if (current < steps.length - 1) {
      nextButton = <div onClick={() => this.next()}>Dalej <Icon type="right" /></div>
    }

    if (this.state.showPopup===false) {
      stepsContainerStyle="steps-cintainer-hide";
    }

    return (
      <div className={stepsContainerStyle} >
        <Tooltip placement="bottom" title={"Zamknij"}>
          <div className="btn-close" onClick={this.closePopup.bind(this)}>
            <Icon type="close-square" style={{ fontSize: '27px', color: 'white' }} />
          </div>
        </Tooltip>
        
        <div className="header-content">
          <h1>
            Moje zakupy
          </h1>
        </div>

        <Steps current={current}>
          {steps.map((index, i = 1) => (
            <Step key={current + i++} icon={<Icon type={index.icon} />} />
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
}