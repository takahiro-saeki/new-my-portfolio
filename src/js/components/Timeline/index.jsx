import React from 'react';
import { Element } from 'react-scroll';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { v4 } from 'uuid';
import ListChild from './ListChild';
import dataMock from './dataMock';
import SectionHeader from './style';

const Timeline = () => (
  <Element name="timeline">
    <Grid>
      <Row>
        <Col xs={12}>
          <SectionHeader>TIMELINE</SectionHeader>
        </Col>
      </Row>
      <Row>{dataMock.map(item => <ListChild data={item} key={v4()} />)}</Row>
    </Grid>
  </Element>
);

export default Timeline;
