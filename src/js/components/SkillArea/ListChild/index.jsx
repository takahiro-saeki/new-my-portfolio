// @flow

import React from 'react';
import { Col } from 'react-flexbox-grid';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { iconGenerator } from '../domain';
import adjustStyle from '../adjustStyle';
import { IconArea, BasePadding, DashedHr } from './style';

type Props = {
  data: {
    title: string,
    main: string,
    cartTitlei: string,
    list: string
  },
  id: number
};

const ListChild = ({ data, id }: Props) => (
  <Col xs={12} sm={6} md={6} lg={4}>
    <Card style={{marginBottom: '1rem'}}>
      <IconArea>{iconGenerator(id)}</IconArea>
      <CardTitle title={data.title} titleStyle={adjustStyle.cardTitle} />
      <CardText>{data.main}</CardText>
      <BasePadding>
        <DashedHr />
      </BasePadding>
      <CardText>{data.list}</CardText>
    </Card>
  </Col>
);

ListChild.defaultProps = {
  data: {},
  id: 0
};

export default ListChild;
