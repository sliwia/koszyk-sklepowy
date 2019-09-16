import React from 'react';
import { Header } from './Header/Header';
import {SubMenuContainer} from './SubMenuContainer/SubMenuContainer'
import 'antd/dist/antd.css';
import './App.scss'

export class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <SubMenuContainer />
      </>
    );
  }
}