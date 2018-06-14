import React from 'react';
import { element, string } from 'prop-types';
import Container from './style';

const Link = ({ children, href }) => {
  return <Container href={href}>{children}</Container>;
};

Link.defaultProps = {
  children: null,
  href: ''
};

Link.propTypes = {
  children: element,
  href: string
};

export default Link;
