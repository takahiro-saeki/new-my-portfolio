import React from 'react';
import Container from './style';

const Link = ({ children, href }) => {
  return (
    <Container href={href}>{children}</Container>
  )
}

export default Link;
