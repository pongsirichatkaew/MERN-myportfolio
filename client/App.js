import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { Button } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import MainPage from './core/MainPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import navbarReducer from './store/reducers/navbar';

const rootReducer = combineReducers({
  navbar: navbarReducer
});

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <MainRouter />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
