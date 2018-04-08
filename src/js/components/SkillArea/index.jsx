import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { colorGenerator, iconGenerator } from './domain';
import adjustStyle from './adjustStyle';
import textMock from './textMock';
import ListChild from './ListChild';
import { v4 } from 'uuid';
import { SectionHeader, IconArea } from './style';

const SkillArea = () => (
  <Grid style={adjustStyle.grid}>
    <Row>
      <Col xs={12}>
        <SectionHeader>SKILL</SectionHeader>
      </Col>
    </Row>
    <Row>{Object.values(textMock).map((item, i) => <ListChild data={item} id={i} key={v4()} />)}</Row>
  </Grid>
)

export default SkillArea;
