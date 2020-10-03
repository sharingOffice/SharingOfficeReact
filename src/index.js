import './index.css';

import * as serviceWorker from './serviceWorker';

import { applyMiddleware, compose, createStore } from "redux";

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = configureStore();


ReactDOM.render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// <BrowserRouter> <React.StrictMode>
// <App />
// </React.StrictMode> </BrowserRouter>,
serviceWorker.unregister();
