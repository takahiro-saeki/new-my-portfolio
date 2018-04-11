import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { v4 } from 'uuid';
import dataMock from './dataMock';
import { SectionHeader, ResponsiveImg } from './style';
import imgConfig from './domain/imgConfig';

console.log(imgConfig)

const Work = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <SectionHeader>SKILL</SectionHeader>
      </Col>
    </Row>
    <Row>
      {dataMock.map(() => (
        <Col xs={12} sm={6} md={6} lg={4} key={v4()}>
          <div>test</div>
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
