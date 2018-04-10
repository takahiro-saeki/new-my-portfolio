import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ListChild from './ListChild';
import dataMock from './dataMock';
import SectionHeader from './style';

const Timeline = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <SectionHeader>TIMELINE</SectionHeader>
      </Col>
    </Row>
    <Row>{dataMock.map(item => <ListChild data={item} />)}</Row>
  </Grid>
);

export default Timeline;
