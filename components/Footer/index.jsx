import React from 'react';
import styled from 'styled-components';
import { ContentMarginX } from '../../styles/utils';

const Container = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  border: white 1rem solid;
  overflow: visible;
  min-height: 370px;
  
  position: relative;
`;

const Reserved = styled.div`
  display: block;
  color: black;
  font-size: 14px;
  opacity: 50%;
  line-height: 1.8;
  margin-left: 10%;
  margin-bottom: 24px;
  
  position: absolute;
  bottom: 0;
`;

const Content = styled.footer`
  ${ContentMarginX};
  margin-top: 3rem;
  margin-bottom: 8rem;
  h1 {
    transform: translateX(-6px);
    margin-bottom: 4rem;
  }
  
  p {
    transform: translateY(-1.5rem);
  }
  
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    h1 {
      transform: none;
      grid-column: 1/2;
    }
  }
`;

const Footer = ({ children }) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
      <Reserved>
        © All right reserved – Ethan.Liu
      </Reserved>
    </Container>
  );
};

export default Footer;
