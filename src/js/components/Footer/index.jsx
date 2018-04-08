import React from 'react';
import Container from './style';

const Footer = () => (
  <Container>
    <div>© <span>{new Date().getFullYear()}</span> takahiro-saeki</div>
  </Container>
)

export default Footer;
