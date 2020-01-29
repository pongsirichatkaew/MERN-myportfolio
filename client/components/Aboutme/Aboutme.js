import React, { Component } from 'react';
import classes from './Aboutme.module.css';
import { Row, Col, Icon, Button, Timeline } from 'antd';
import srcProfile from '../../assets/images/profile.jpg';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithub,
  faLine
} from '@fortawesome/free-brands-svg-icons';

import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faClock } from '@fortawesome/free-regular-svg-icons';

library.add(faFacebookSquare);
library.add(faGithub);
library.add(faLine);
library.add(faMobileAlt);
library.add(faPaperPlane);
library.add(faClock);

class Aboutme extends Component {
  state = {
    contactDetail: [
      {
        icon: ['fas', 'mobile-alt'],
        detail: '061-4129476 (Bank)'
      },
      {
        icon: ['far', 'paper-plane'],
        detail: 'pongsiri.cha@hotmail.com',
        clicked: this.props.mailClicked
      },
      {
        icon: ['fab', 'facebook-square'],
        detail: 'bank.chatkaew',
        clicked: this.props.facebookClicked
      },
      {
        icon: ['fab', 'github'],
        detail: 'pongsirichatkaew',
        clicked: this.props.githubClicked
      },
      {
        icon: ['fab', 'line'],
        detail: 'pc.bank',
        clicked: this.props.lineClicked
      }
    ]
  };
  componentDidUpdate() {
    console.log(`[Aboutme] rendering`);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.animated.about !== this.props.animated.about;
  }
  render() {
    let contactDetail = null;
    let contactProfile = null;
    let animatedClassFadeIn = [];
    let animatedClassBounce = [];
    if (this.props.animated.about === true) {
      contactProfile = (
        <div style={{ color: 'white', paddingLeft: '30px' }}>
          <p style={{ fontSize: '36px' }}>About me</p> <br />
          <p>
            Hi, I am a Software Engineer for almost one year. I experience in
            internal company web development such as KPI online, booking room
            and invoice form using VueJs(frontend) and Flask(backend) libraries.
            I also enjoy being challenged with projects that require me to work
            outside my comfort zone and knowledge set, as continuing to learn
            new programming languages and development techniques <br />
          </p>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '36px' }}>ContactDetail</p>
            {this.state.contactDetail.map(contact => (
              <div key={contact.icon} style={{ color: 'white' }}>
                <FontAwesomeIcon icon={contact.icon} />
                <span className={classes.SpanClicked} onClick={contact.clicked}>
                  {contact.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      );

      contactDetail = (
        <div style={{ color: 'white', paddingLeft: '30px' }}>
          <p style={{ fontSize: '36px' }}>My experience</p>
          <p style={{ textAlign: 'left' }}>
            INET - Internet Thailand Public Co., Ltd.(INET)
            <br />
            Software Engineer
            <br /> <FontAwesomeIcon icon={['far', 'clock']} /> 
            February 2019 - December 2019
            <br /> • Maintained and develop internal web site and database for
            the company such as KPI online, booking room, invoice form
            <br />
            <br />
            Depth first CO., LTD. Developer(Intern)
            <br /> <FontAwesomeIcon icon={['far', 'clock']} /> June 2017 -
            August 2017
            <br /> • Learning Java and concept of OOP.
            <br />• Learning Android and how to code on Android Studio.
          </p>
        </div>
      );
      animatedClassFadeIn = ['animated', 'fadeInLeft'];
      animatedClassBounce = ['animated', 'bounce'];
    }

    return (
      <div id="about" className={classes.Content}>
        <Row className={classes.FullRow} type="flex">
          <Col
            className={animatedClassFadeIn.join(' ')}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            {contactProfile}
          </Col>
          <Col
            className={animatedClassFadeIn.join(' ')}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <div style={{ color: 'white', paddingRight: '30px' }}>
              {contactDetail}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animated: state.navbar.animated
  };
};

export default connect(mapStateToProps, null)(Aboutme);
