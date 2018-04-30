import React from 'react';
import { Element } from 'react-scroll';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { v4 } from 'uuid';
import SectionHeader from 'components/SectionHeader';
import Link from 'components/Link';
import dataMock from './dataMock';
import {
  ResponsiveImg,
  ChildTitle,
  ChildTag,
  ContentWrapper
} from './style';

const Work = () => (
  <Element name="work">
    <Grid>
      <Row>
        <Col xs={12}>
          <SectionHeader title="Work" />
        </Col>
      </Row>
      <Row>
        {dataMock.map(item => (
          <Col xs={12} sm={6} md={6} lg={4} key={v4()}>
            <ContentWrapper>
              <Link href={item.link}>
                <ResponsiveImg src={item.path} />
              </Link>
              <ChildTitle>
                <Link href={item.link}>{item.title}</Link>
              </ChildTitle>
              <ChildTag>{`${item.tag}`}</ChildTag>
            </ContentWrapper>
          </Col>
        ))}
      </Row>
    </Grid>
  </Element>
);

export default Work;
