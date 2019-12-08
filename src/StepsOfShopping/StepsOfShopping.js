import React from 'react';
import { Steps, Icon, Tooltip,Result } from 'antd';
import './StepsOfShopping.scss';
import { EventEmitter } from '../EventEmitter';

const { Step } = Steps;

const steps = [
  {
    title: '',
    description: 'Zaloguj się',
    content: <Result
    icon={<Icon type="user" />}
    title="Zaloguj się!"
    subTitle="Następnie kontynuuj zakupy"
    
  />,
    icon: 'user',
  },
  {
    title: '',
    description: 'Zatwierdź listę zakupów',
    content: 'Tu będzie lista zakupów',
    icon: 'shopping-cart',
  },
  {
    title: 'test',
    description: 'Opłata',
    content: 'Dokonaj opłaty',
    icon: 'credit-card'
  },
  {
    title: 'test',
    description: 'Zakupy zakończone',
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
      this.setState({ showPopup: event });
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
          <span>Zaloguj się</span>
          <span>Zatwierdź listę zakupów</span>
          <span>Opłata</span>
          <span>Zakupy zakończone</span>
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