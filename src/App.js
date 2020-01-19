import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShopView from "./ShopView/ShopView";
import AdminPanelView from "./AdminPanelView/AdminPanelView";
import "antd/dist/antd.css";
import "./App.scss";



class App extends React.Component {
  render() {
    return (
      <>
        <Router>
            <Route exact path="/" component={ShopView}></Route>
            <Route path="/admin" component={AdminPanelView}></Route>
        </Router>
      </>
    );
  }
};



export default App;