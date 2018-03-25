import React from 'react';
import lang from 'lang';
import hiro from '../../../../img/hiro.jpg';
import { Container, IconArea } from './style';

const MainIcon = () => (
  <Container>
    <IconArea src={hiro} />
    <br />
    <span>{lang('EN').NAME}</span>
    <br />
    <span>{lang('EN').NAME_DESC}</span>
  </Container>
)

export default MainIcon;
