import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import dataMock from './dataMock';
import { SectionHeader, ResponsiveImg } from './style';

const Work = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <SectionHeader>SKILL</SectionHeader>
      </Col>
    </Row>
    <Row>
      {dataMock.map(item => (
        <Col xs={12} sm={6} md={6} lg={4}>
          <div>
            {import(item.path).then(item => console.log(item))}
          </div>
        </Col>
      ))}
      <Col xs={12} sm={6} md={6} lg={4}>
        <div>
          <ResponsiveImg src={require('../../../img/book1.png')} />
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={4}>
        <ResponsiveImg src={require('../../../img/book1.png')} />
      </Col>
      <Col xs={12} sm={6} md={6} lg={4}>
        <ResponsiveImg src={require('../../../img/book1.png')} />
      </Col>
      <Col xs={12} sm={6} md={6} lg={4}>
        <ResponsiveImg src={require('../../../img/book1.png')} />
      </Col>
    </Row>
  </Grid>
);

export default Work;
