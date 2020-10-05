import React from 'react';
import styled from 'styled-components';
import { ContentMarginX } from '../../styles/utils';

const Container = styled.div`
  display: flex;
  justify-content: center;
  ${ContentMarginX};
  
  img {
    max-width: 960px;
    height: auto;
    transform: translateY(-10rem);
    @media (max-width: 960px) {
      transform: translateY(-4rem);
    }
  }
`;

const ProjectDetail = ({ image }) => {
  return (
    <Container>
      <img src={image} alt="project detail, max-width: 930px"/>
    </Container>
  );
};

ProjectDetail.defaultProps = {
  image: '/images/project-detail.png'
};

export default ProjectDetail;
