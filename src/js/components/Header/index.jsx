import React from 'react';
import { Container, UnderCover } from './style';
import MainIcon from './MainIcon';

const Header = ({ height }) => (
  <Container style={{ height }}>
    <UnderCover>
      <MainIcon />
    </UnderCover>
  </Container>
);

export default Header;
