import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { Button } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import MainPage from './core/MainPage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
