import React from "react"
import ForwardArrow from "./forward-arrow.svg"
import styled from "styled-components"
import { Color } from "../../styles"

const Container = styled.div`
  display: flex;
  align-items: normal;
  width: fit-content;
`

const PromptWrapper = styled.div`
  display: inline-block;
  color: ${Color.grey};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .03em;
  
  margin-right: 12px;
`

const ArrowWrapper = styled.div`
  width: min-content;
  height: min-content;
`

const Forward = () => (
  <Container>
    <PromptWrapper>See this project</PromptWrapper>
    <ArrowWrapper><ForwardArrow/></ArrowWrapper>
  </Container>
)

export default Forward