import React from 'react';
import './WhiteButton.scss';


export const WhiteButton = (props) => {
    return (
    <>
      <div className="btn-white"> { props.buttonName }</div>
    </>
    );
}