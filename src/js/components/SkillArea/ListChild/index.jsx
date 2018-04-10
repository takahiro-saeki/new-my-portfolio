import React from 'react';
import { Col } from 'react-flexbox-grid';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import { iconGenerator } from '../domain';
import adjustStyle from '../adjustStyle';
import IconArea from './style';

const ListChild = ({ data, id }) => (
  <Col xs={12} sm={6} md={6} lg={4}>
    <Card>
      <IconArea>{iconGenerator(id)}</IconArea>
      <CardTitle title={data.title} titleStyle={adjustStyle.cardTitle} />
      <CardText>{data.main}</CardText>
      <div>
        <hr />
      </div>
      <CardText>{data.list}</CardText>
    </Card>
  </Col>
);

export default ListChild;
