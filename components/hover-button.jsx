import React from "react"
import { navigate } from "gatsby"

import styled from "styled-components"

const Container = styled.div`
  width: 209px;
  height: 67px;
  position: relative;
`

const Button = styled.button`
  width: 201px;
  height: 59px;
  background: black;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border: none;
  
  font-family: Nunito Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.42;
  /* identical to box height, or 26px */
  text-align: center;
  text-transform: lowercase;
  
  transition-property: all;
  transition-duration: .2s;

  :hover {
    cursor: pointer;
    top: 8px;
    left: 8px;
  }
`

const StrokeBox = styled.div`
  width: 201px;
  height: 59px;
  border: 3px solid #000000;
  box-sizing: border-box;
  
  position: absolute;
  top: 8px;
  left: 8px;
`

const HoverButton = ({ children, to }) => (
  <Container>
    <Button onClick={() => navigate(to)}>{children}</Button>
    <StrokeBox/>
  </Container>
)

HoverButton.defaultProps = {
  children: "See my work"
}

export default HoverButton