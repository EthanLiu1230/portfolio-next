import React from "react"
import VertLine from "./vert-line.svg"
import PromptText from "./prompt-text.svg"
import styled from "styled-components"

const Container = styled.div`
  width: 38px;
  height: 105px;
  
  position: relative;
  overflow: hidden;
`

const LineWrapper = styled.div`
  width: fit-content;
  height: 105px;
  
  animation-name: scrollDown;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
 
  transform-style: preserve-3d;
 
  
  @keyframes scrollDown {
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(150px);
    }
  }
`

const PromptWrapper = styled.div`
  margin-left: 23px;
  
  position: absolute;
  top: 0;
`

const ScrollPrompt = () => {
  return (
    <Container>
      <LineWrapper><VertLine/></LineWrapper>
      <PromptWrapper><PromptText/></PromptWrapper>
    </Container>
  )
}

export default ScrollPrompt