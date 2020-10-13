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

const Content = styled.div`
  ${ContentMarginX};
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
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
