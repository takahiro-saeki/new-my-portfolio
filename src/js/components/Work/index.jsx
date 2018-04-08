import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SectionHeader, ResponsiveImg } from './style';

const Work = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <SectionHeader>SKILL</SectionHeader>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6} md={6} lg={4}>
        <ResponsiveImg src={require('../../../img/book1.png')}/>
      </Col>
      <Col xs={12} sm={6} md={6} lg={4}>
        <ResponsiveImg src={require('../../../img/book1.png')}/>
      </Col>
      <Col xs={12} sm={6} md={6} lg={4}>
        <ResponsiveImg src={require('../../../img/book1.png')}/>
      </Col>
      <Col xs={12} sm={6} md={6} lg={4}>
        <ResponsiveImg src={require('../../../img/book1.png')}/>
      </Col>
    </Row>
  </Grid>
)

export default Work;
