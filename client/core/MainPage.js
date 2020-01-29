import React from 'react';
import classes from './Mainpage.module.css';
import MainProfile from '../components/MainProfile/MainProfile';
import Aboutme from '../components/Aboutme/Aboutme';
const mainPage = props => {
  return (
    <div className={classes.MainPage}>
      <MainProfile />
      <Aboutme />
    </div>
  );
};

export default mainPage;
