import React, { Component } from 'react';
import classes from './Mainpage.module.css';
import MainProfile from '../components/MainProfile/MainProfile';
import Aboutme from '../components/Aboutme/Aboutme';
class MainPage extends Component {
  componentDidUpdate() {
    console.log(`[MainPage] rendering`);
  }
  githubClickedHandler = () => {
    window.open('https://github.com/pongsirichatkaew/', '_blank');
  };

  facebookClickedHandler = () => {
    window.open('https://www.facebook.com/bank.chatkaew', '_blank');
  };
  lineClickedHandler = () => {
    window.open('http://line.me/ti/p/~pc.bank', '_blank');
  };

  mailClickedHandler = () => {
    window.open('mailto://pongsiri.cha@hotmail.com', '_blank');
  };
  render() {
    return (
      <div className={classes.MainPage}>
        <MainProfile
          githubClicked={this.githubClickedHandler}
          facebookClicked={this.facebookClickedHandler}
          mailClicked={this.mailClickedHandler}
        />
        <Aboutme
          githubClicked={this.githubClickedHandler}
          facebookClicked={this.facebookClickedHandler}
          mailClicked={this.mailClickedHandler}
          lineClicked={this.lineClickedHandler}
        />
      </div>
    );
  }
}

export default MainPage;
