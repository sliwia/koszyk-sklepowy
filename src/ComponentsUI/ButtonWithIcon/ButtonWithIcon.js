import React from 'react';
import { Icon } from 'antd';
import './ButtonWithIcon.scss';


export const ButtonWithIcon = (props) => {
    return (
    <>
      <button><Icon type={ props.iconName } /> { props.buttonName }</button>
    </>
    );
}