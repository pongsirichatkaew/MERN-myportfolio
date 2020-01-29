import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import MainPage from './core/MainPage';
class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  //   componentDidMount() {
  //     const jssStyles = document.getElementById('jss-server-side');
  //     if (jssStyles && jssStyles.parentNode) {
  //       jssStyles.parentNode.removeChild(jssStyles);
  //     }
  //   }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}
export default MainRouter;
