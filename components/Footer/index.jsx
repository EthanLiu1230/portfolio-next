import React from 'react';
import styled from 'styled-components';
import { ContentMarginX, ContentMarginY } from '../../styles/utils';

const Container = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  border: white 1rem solid;
  overflow: visible;
  min-height: 370px;
  
  position: relative;
`;

const Content = styled.div`
  ${ContentMarginY};
  ${ContentMarginX};
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  h1 {
    margin-right: 1rem;
  }
  
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

const Footer = () => {
  return (
    <Container>
      <Content>
        <h1>
          Want to work?
        </h1>
        <p>
          If you need a modern and powerful website for your business, startup
          or
          personally, I am available for work. You can email me directly at
          dev_ethan@outlook.com.
        </p>
      </Content>
      <Reserved>
        © All right reserved – Ethan.Liu
      </Reserved>
    </Container>
  );
};

export default Footer;