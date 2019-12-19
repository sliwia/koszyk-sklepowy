import React from 'react';
import { Icon } from 'antd';
import './ButtonWithIcon.scss';


export const ButtonWithIcon = (props) => {
  return (
  <>
    <button className="btn-icon"><Icon type={ props.iconName } style={{ fontSize: props.iconSize }} /> { props.buttonName }</button>
  </>
  );
}