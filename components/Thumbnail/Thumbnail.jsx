import React from 'react';
import ForwardArrow from './assets/ForwardArrow.svg';
import Dots from './assets/Dots.svg';
import styled from 'styled-components';

const Prompt = styled.span``;

const Image = styled.img``;

const Grid = styled.div``;

const Thumbnail = () => {
  return (
    <Grid>
      <Dots/>
      <Image/>
      <Prompt>
        see this project
      </Prompt>
      <ForwardArrow/>
    </Grid>
  );
};

export default Thumbnail;
