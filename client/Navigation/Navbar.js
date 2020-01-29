import React from 'react';
import classes from './Navbar.module.css';
import { Layout, Menu } from 'antd';

const navbar = props => {
  return (
    <div>
      <Menu
        className={classes.Navbar}
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Portfolio</Menu.Item>
      </Menu>
    </div>
  );
};

export default navbar;
