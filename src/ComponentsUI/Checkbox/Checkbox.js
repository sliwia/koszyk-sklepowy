import React from 'react';
import './Checkbox.scss';


export const Checkbox = (props) => {
    return (
    <>
      <label>
        <input
        className="checkbox"
        name={props.name}
        type="checkbox"
        checked={false}
        />
        {props.labelName}  
      </label>
    </>
    );
}