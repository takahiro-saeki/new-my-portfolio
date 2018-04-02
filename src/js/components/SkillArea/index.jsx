import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Language from 'material-ui/svg-icons/action/language';
import { Grid, Row, Col } from 'react-flexbox-grid';

const colorGenerator = color => ({
  height: '80px',
  width: '80px',
  padding: '1.5rem',
  border: `1px solid ${color}`,
  color,
  borderRadius: '50%'
})

const SkillArea = () => (
  <Grid style={{maxWidth: '1024px', width: '100%', padding: '1rem'}}>
    <Row>
      <Col xs={12}>
        <h2>SKILL</h2>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6} md={6} lg={4}>
        <Card>
          <div style={{padding: '1rem', textAlign: 'center'}}>
            <Language
              style={colorGenerator('#C2185B')}
            />
          </div>
          <CardTitle title="Card title" titleStyle={{fontSize: '1rem', fontWeight: 'bold'}} />
          <CardText>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
</CardText>
<div>
  <hr />
</div>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
</CardText>
        </Card>
      </Col>
    </Row>
  </Grid>
)

export default SkillArea;
