import React from 'react';
import './Header.css';
import '../MainCssFiles/Container.css'

export function HeaderView() {
  return (
    <div className ="header-container">
      <div className="container titles-container">
          <h1 >Zrób zakupy !</h1>
          <h2>Sprawdź co masz w koszyku:</h2>
      </div>
    </div>
  );
  }