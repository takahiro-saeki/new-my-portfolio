import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import colorPicker from '../domain/colorPicker';
import { CompanyArea, DescArea } from './style';

const baseMargin = {
  margin: '1rem auto'
}

const ListChild = ({ data }) => {
  if (data.id % 2 !== 0) {
    return (
      <Row style={baseMargin}>
        <Col xs={12} sm={4}>
          <CompanyArea style={colorPicker(data.id)}>
            <h2>{data.title}</h2>
            <h3>{data.date}</h3>
          </CompanyArea>
        </Col>
        <Col xs={12} sm={8}>
          <DescArea>{data.content}</DescArea>
        </Col>
      </Row>
    );
  }
  return (
    <Row style={baseMargin}>
      <Col xs={12} sm={8}>
        <DescArea>{data.content}</DescArea>
      </Col>
      <Col xs={12} sm={4}>
        <CompanyArea style={colorPicker(data.id)}>
          <h2>{data.title}</h2>
          <h3>{data.date}</h3>
        </CompanyArea>
      </Col>
    </Row>
  )
};

export default ListChild;
