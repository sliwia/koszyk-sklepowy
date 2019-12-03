import React from 'react';
import { Steps, Icon } from 'antd';
import './StepsOfShopping.scss';

const { Step } = Steps;

const steps = [
  {
    content: 'Zaloguj się aby kontynuować zakupy',
    icon: 'user',
  },
  {
    content: 'Tu będzie lista zakupów',
    icon: 'shopping-cart',
  },
  {
    content: 'Dokonaj opłaty',
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
    return (
      <div className="steps-container" >
        
        <div className="header-content">
          <h1>
            Moje zakupy
          </h1>
        </div>
        
      
      <div> 
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} icon={<Icon type={item.icon} />} />
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
          <div onClick={() => this.prev()} ><Icon type="left" /> Wstecz</div>
          
          <div onClick={() => this.next()}>Dalej <Icon type="right" /></div>
          {/* {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Dalej
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Zakupy zakończone!')}>
              Zakończ
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Wstecz
            </Button>
          )} */}
        </div>
      
      
      </div>
        
      </div>
    );
  }
}