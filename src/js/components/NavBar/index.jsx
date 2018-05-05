import React from 'react';
import { Link } from 'react-scroll';
import { v4 } from 'uuid';
import { Container, GrieWrap, GridItem } from './style';

const linkStyle = {
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer'
};

type Props = {
  list: Array<Object>
};

const NavBar = ({ list }: Props) => (
  <Container>
    <GrieWrap>
      {list.map(item => (
        <GridItem key={v4()}>
          <Link
            to={item.link}
            smooth
            offset={-53}
            duration={500}
            style={linkStyle}
          >
            {item.title}
          </Link>
        </GridItem>
      ))}
    </GrieWrap>
  </Container>
);

NavBar.defaultProps = {
  list: []
};

export default NavBar;
