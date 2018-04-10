import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SectionHeader from './style';

const Timeline = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <SectionHeader>TIMELINE</SectionHeader>
      </Col>
    </Row>
    <Row>
      <div>test</div>
    </Row>
  </Grid>
);

export default Timeline;
