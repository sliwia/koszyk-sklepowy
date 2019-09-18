import React from 'react';
import { Icon } from 'antd';
import './Button.scss';


export const Button = (props) => {
    return (
    <>
      {/* todo: trzeba przekazyać w parametrach kolor główny i na jaki ma się zmieniać */}
      <button><Icon type={ props.iconName } /> { props.buttonName }</button>
    </>
    );
}