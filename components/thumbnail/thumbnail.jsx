import React from 'react';
import Dots from './dots.svg';
import Forward from './forward/forward';

import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;
  
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  
  transition-property: bottom, left;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ForwardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 8px;
  opacity: 0;
  
  transition-property: all;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
`;

const Container = styled.div`
  position: relative;
  width: 548px;
  height: 485px;
  
  :hover {
    cursor: pointer;
    ${ImageWrapper} {
      bottom: 33px;
      left: 33px;
    }
    ${ForwardWrapper} {
      right: -8px;
      opacity: 1;
    }
  }
`;

const Thumbnail = ({ image }) => (
  <Container>
    <ImageWrapper><img src={image}
                       alt="thumbnail"/></ImageWrapper>
    <DotsWrapper><Dots/></DotsWrapper>
    <ForwardWrapper><Forward/></ForwardWrapper>
  </Container>
);

Thumbnail.defaultProps = {
  image: '/images/thumbnail.png'
};

export default Thumbnail;



