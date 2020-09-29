import React from 'react';
import ForwardArrow from './forward-arrow.svg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: normal;
  width: fit-content;
`;

const PromptWrapper = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text2};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .03em;
  
  margin-right: 12px;
`;

const ArrowWrapper = styled.div`
  width: min-content;
  height: min-content;
`;

const Forward = () => (
  <Container>
    <PromptWrapper>See this project</PromptWrapper>
    <ArrowWrapper><ForwardArrow/></ArrowWrapper>
  </Container>
);

export default Forward;