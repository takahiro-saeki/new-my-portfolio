import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Language from 'material-ui/svg-icons/action/language';
import { Grid, Row, Col } from 'react-flexbox-grid';

const SkillArea = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h2>SKILL</h2>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Card>
          <div><Language /></div>
          <CardTitle title="Card title" />
          <CardText></CardText>
        </Card>
      </Col>
    </Row>
  </Grid>
)

export default SkillArea;
