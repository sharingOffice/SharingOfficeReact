import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import './css/menu.css';

import {DoSth, MyRoutes, RouteWithSubRoutes} from './components/my-routes';
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
    <Switch>
      {MyRoutes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
    </div>
  );
}

export default App;
