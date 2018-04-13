import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { v4 } from 'uuid';
import SectionHeader from 'components/SectionHeader';
import dataMock from './dataMock';
import { ResponsiveImg, ChildTitle, ChildTag } from './style';

const Work = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <SectionHeader title="Work" />
      </Col>
    </Row>
    <Row>
      {dataMock.map(item => (
        <Col xs={12} sm={6} md={6} lg={4} key={v4()}>
          <ResponsiveImg src={item.path} />
          <ChildTitle>{item.title}</ChildTitle>
          <ChildTag>{`${item.tag}`}</ChildTag>
        </Col>
      ))}
    </Row>
  </Grid>
);

export default Work;
