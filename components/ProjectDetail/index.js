import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  
  img {
    max-width: 930px;
    height: auto;
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
