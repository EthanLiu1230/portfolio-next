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
  grid-column-gap: 4rem;

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
          Want to <strong>work?</strong>
        </h1>
        <p>
          If you need a modern and powerful website for your business, startup
          or
          personally, I am available for work. You can email me directly at
          <a href={`mailto:dev_ethan@outlook.com`}> dev_ethan@outlook.com.</a>
        </p>
      </Content>
      <Reserved>
        © All right reserved – Ethan.Liu
      </Reserved>
    </Container>
  );
};

export default Footer;
