import React from 'react';
import './Header.scss';


export function Header() {
  return (
    <div className ="header-container">
      <div className="container titles-container">
          <h1 >Zrób zakupy !</h1>
          <h2>Sprawdź co masz w koszyku:</h2>
      </div>
    </div>
  );
}