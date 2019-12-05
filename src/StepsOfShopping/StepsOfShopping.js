import React from 'react';
import { Steps, Icon } from 'antd';
import './StepsOfShopping.scss';

const { Step } = Steps;

const steps = [
  {
    title: '',
    description: 'Zaloguj się',
    content: 'Zaloguj się aby kontynuować zakupy',
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


    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }




  render() {
    const { current } = this.state;
    let prevButton = <div></div>;
    let nextButton = <div></div>;
    if (current > 0) {
      prevButton = <div onClick={() => this.prev()} ><Icon type="left" /> Wstecz</div>
    }

    if (current < steps.length - 1) {
      nextButton = <div onClick={() => this.next()}>Dalej <Icon type="right" /></div>
    }

    return (
      <div className="steps-container" >

        <div className="header-content">
          <h1>
            Moje zakupy
          </h1>
        </div>


        <div>
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
        <div className='btn close' onClick={this.props.closePopup}>{this.props.text}</div>

      </div>
    );
  }
}