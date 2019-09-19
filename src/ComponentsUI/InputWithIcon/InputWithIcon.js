import React from 'react';
import { Icon } from 'antd';
import './InputWithIcon.scss';


export const InputWithIcon = (props) => {
    return (
      <div className="input-icons"> 
        <Icon className="icon" type={props.iconType} />
        <input className="input-field" 
        type={props.type} 
        placeholder={props.placeholderText}/> 
      </div> 
    );
}