import styled from 'styled-components';
import img from '../../../img/top.jpg';

export const Container = styled.div`
  background-image: url(${img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #464646;
`;

export const UnderCover = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.5);
`;
