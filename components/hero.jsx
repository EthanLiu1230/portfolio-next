import React from 'react';
import Header from './header';
import ScrollPrompt from './scroll-prompt/scroll-prompt';

import styled from 'styled-components';
import { ContentMarginX, ContentMarginY } from '../styles/utils';

const Content = styled.section`
  ${ContentMarginX};
  ${ContentMarginY};
  
  h1 {
    margin-bottom: 1.5rem;
    width: 70%;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  
  p {
    margin-bottom: 4rem;
    width: 50%;
    @media (max-width: 768px) {
      width: 70%;
    }
  }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  overflow: visible;
  border: white 1rem solid;
  min-height: 95vh;
  
  position: relative;
  
  .prompt {
    position: absolute;
    bottom: -1rem;
    right: 10%;
  }
  
  @media (max-width: 768px) {
    min-height: fit-content;
  }
`;

const Hero = ({ children }) => {
  return (
    <Container>
      <Header/>
      <Content>
        {children}
      </Content>
      <div className='prompt'><ScrollPrompt/></div>
    </Container>
  );
};

export default Hero;
