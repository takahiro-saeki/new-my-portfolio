// @flow

import React from 'react';
import { Container, UnderCover } from './style';
import MainIcon from './MainIcon';

type Props = {
  height: number
};

const Header = ({ height }: Props) => (
  <Container style={{ height }}>
    <UnderCover>
      <MainIcon />
    </UnderCover>
  </Container>
);

Header.defaultProps = {
  height: 0
};

export default Header;
