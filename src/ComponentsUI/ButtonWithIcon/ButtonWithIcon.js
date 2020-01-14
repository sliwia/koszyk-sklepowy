import React from 'react';
import { Icon } from 'antd';
import './ButtonWithIcon.scss';


export const ButtonWithIcon = (props) => {
  const styleBtn = {
    height: props.heightBtn,
    fontSize: props.fontSize
  }
  return (
  <>
    <button style={styleBtn} className="btn-icon"><Icon type={ props.iconName } style={{ fontSize: props.iconSize }} /> { props.buttonName }</button>
  </>
  );
}