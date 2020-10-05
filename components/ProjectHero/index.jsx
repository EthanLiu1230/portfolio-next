import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { ContentMarginX, ContentMarginY } from '../../styles/utils';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  overflow: visible;
  border: white 1rem solid;
  text-align: center;
`;
const Content = styled.div`  
  ${ContentMarginX};
  ${ContentMarginY};
  margin-bottom: 12rem;
`;
const ProjectHero = ({ children }) => {
  return (
    <Container>
      <Header/>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default ProjectHero;
