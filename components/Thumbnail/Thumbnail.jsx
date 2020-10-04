import React from 'react';
import ForwardArrow from './assets/ForwardArrow.svg';
import Dots from './assets/Dots.svg';
import styled from 'styled-components';

const Prompt = styled.div`
  display: flex;

  span {  
    font-family: Mulish, sans-serif;
    font-size: 16px; /* 15px - 20px for main body text */
    line-height: 1.3; /* 1.2 - 1.45 */
    color: ${({ theme }) => theme.colors.text2};
    margin-right: 1rem;
  }
  
  svg {
    align-self: center;
  }
  
  position: absolute;
  right: 0;
  bottom: 0;
`;

const DotsWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  
  position: absolute;
  bottom: 0;
`;

const Image = styled.img`
  grid-column: 2/3;
  grid-row: 1/2;
`;

const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: 25px auto;
  grid-template-rows: auto 25px;
  
  position: relative;
`;

const Thumbnail = ({ image, to }) => {
  return (
    <Grid>
      <DotsWrapper><Dots/></DotsWrapper>
      <Image src={image}/>
      <Prompt>
        <span>see this project</span>
        <ForwardArrow/>
      </Prompt>
    </Grid>
  );
};

Thumbnail.propTypes = {};

Thumbnail.defaultProps = {};

export default Thumbnail;
