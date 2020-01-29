import React, { Component } from 'react';
import $ from 'jquery';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navigation/Navbar';
import MainPage from './core/MainPage';
import * as actions from './store/actions/index';
class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  //   componentDidMount() {
  //     const jssStyles = document.getElementById('jss-server-side');
  //     if (jssStyles && jssStyles.parentNode) {
  //       jssStyles.parentNode.removeChild(jssStyles);
  //     }
  //   }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = event => {
    const profile = $('#main').offset().top;
    const about = $('#about').offset().top;
    const offsetFirstElement = about - profile;
    const offset = 230;
    var scrollPosition = window.scrollY + 64;
    if (scrollPosition >= 0 && scrollPosition < offset) {
      this.props.onSelectedScroll('1', true);
    } else {
      this.props.onSelectedScroll('2', true);
    }
  };
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

const mapDispatchToProps = dispatch => {
  return {
    onSelectedScroll: (selectedKey, animated) =>
      dispatch(actions.scrollToNewSection(selectedKey, animated))
  };
};
export default connect(null, mapDispatchToProps)(MainRouter);
