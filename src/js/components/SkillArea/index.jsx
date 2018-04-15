import React from 'react';
import { Element } from 'react-scroll';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { v4 } from 'uuid';
import adjustStyle from './adjustStyle';
import textMock from './textMock';
import ListChild from './ListChild';
import { SectionHeader } from './style';

const SkillArea = () => (
  <Element name="skill">
    <Grid style={adjustStyle.grid}>
      <Row>
        <Col xs={12}>
          <SectionHeader>SKILL</SectionHeader>
        </Col>
      </Row>
      <Row>
        {Object.values(textMock).map((item, i) => (
          <ListChild data={item} id={i} key={v4()} />
        ))}
      </Row>
    </Grid>
  </Element>
);

export default SkillArea;
