import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6px 10px;
  margin: 0;
  width: fit-content;
  
  background-color: ${({ theme }) => theme.colors.primary};
  
  font-family: Mulish, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  text-transform: capitalize;
`;

const Tag = ({ children }) => (
  <Container>
    <div>{children}</div>
  </Container>
);

export default Tag;