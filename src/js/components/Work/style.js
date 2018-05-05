import styled from 'styled-components';

export const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    opacity: 0.7;
  }
`;

export const ChildTitle = styled.h3`
  padding-top: 0.7rem;
  font-size: 14px;
  margin: 0 auto;
`;

export const ChildTag = styled.div`
  font-size: 14px;
`;

export const ContentWrapper = styled.div`
  margin-bottom: 1rem;
`;
