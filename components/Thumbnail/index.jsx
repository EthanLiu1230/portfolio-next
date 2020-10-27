import React from 'react';
import ForwardArrow from './assets/ForwardArrow.svg';
import Dots from './assets/Dots.svg';
import styled from 'styled-components';

const Prompt = styled.div`
  display: flex;

  span {  
    //font-family: Mulish, sans-serif;
    //font-size: 16px; /* 15px - 20px for main body text */
    //line-height: 1.3; /* 1.2 - 1.45 */
    color: ${({ theme }) => theme.colors.text2};
    margin-right: .5rem;
  }
  
  svg {
    align-self: center;
  }
  
  position: absolute;
  right: 0;
  bottom: -25px;
  
  opacity: 0;
  
  transition-property: all;
  transition-duration: .4s;
  transition-delay: .1s;
  transition-timing-function: ease-in-out;
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: -27px;
  left: -23px;
`;

const ImageWrapper = styled.div`
    
  display: flex;
  justify-content: center;
  align-self: end;
  background: ${({ theme }) => theme.colors.primary};
  
  width: 100%;
  height: fit-content;
  
  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
  }
  
  transition-property: all;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
`;

const Container = styled.div`
  width: 100%;
  
  position: relative;
  
  cursor: pointer;
  
  display: flex;
  
  :hover {
    ${ImageWrapper} {
      transform: translate3d(8px, -8px, 0);
    }
    
    ${Prompt} {
      transform: translateX(8px);
      opacity: 1;
    }
  }
`;

const Thumbnail = ({ image }) => {
  return (
    <Container>
      <DotsWrapper><Dots/></DotsWrapper>
      <ImageWrapper><img src={image} alt='Thumbnail > img'/></ImageWrapper>
      <Prompt>
        <span>see this project</span>
        <ForwardArrow/>
      </Prompt>
    </Container>
  );
};

Thumbnail.propTypes = {};

Thumbnail.defaultProps = {
  image: '/images/project-preview.png',
};

export default Thumbnail;
