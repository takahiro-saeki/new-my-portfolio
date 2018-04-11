import React from 'react';
import { v4 } from 'uuid';
import { Container, GrieWrap, GridItem } from './style';

type Props = {
  list: Array<Object>
};

const NavBar = ({ list }: Props) => (
  <Container>
    <GrieWrap>
      {list.map(item => <GridItem key={v4()}>{item.title}</GridItem>)}
    </GrieWrap>
  </Container>
);

NavBar.defaultProps = {
  list: []
};

export default NavBar;
