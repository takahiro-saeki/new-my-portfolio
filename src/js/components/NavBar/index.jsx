import React from 'react';
import { v4 } from 'uuid';
import { Container, GrieWrap, GridItem } from './style';

const NavBar = ({list}) => (
  <Container>
    <GrieWrap>
      {list.map(item => <GridItem key={v4()}>{item.title}</GridItem>)}
    </GrieWrap>
  </Container>
)

NavBar.defaultProps = {
  list: []
}

export default NavBar;
