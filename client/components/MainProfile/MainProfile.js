import React from 'react';

import classes from './MainProfile.module.css';
import srcImage from '../../assets/images/images.png';
import { Button, Row, Col } from 'antd';

const mainPage = props => {
  return (
    <div id="main" className={classes.Content}>
      <Row className={classes.FullRow} type="flex">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img className={classes.Image} src={srcImage} alt="my-image"></img>
        </Col>
        <Col
          className={'animated fadeInUp'}
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
        >
          <p className={classes.TextHeader}>
            HELLO MY NAME IS <br />
            PONGSIRI CHATKAEW
          </p>
          <Row type="flex" justify="center" align="middle">
            <Col span={3}>
              <Button
                shape="circle"
                icon="mail"
                onClick={props.mailClicked}
                size="large"
              />
            </Col>
            <Col span={3}>
              <Button
                shape="circle"
                icon="facebook"
                onClick={props.facebookClicked}
                size="large"
              />
            </Col>
            <Col span={3}>
              <Button
                shape="circle"
                icon="github"
                onClick={props.githubClicked}
                size="large"
              />
            </Col>
            <Col span={24} style={{ marginTop: '16px' }}>
              <Button
                className={classes.ButtonCV}
                type="primary"
                icon="download"
                size="large"
              >
                DOWNLOAD MY CV
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default mainPage;
