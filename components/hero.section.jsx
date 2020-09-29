import React from "react"
import HoverButton from "./hover-button"
import Header from "./header"
import ScrollPrompt from "./scroll-prompt/scroll-prompt"

import styled from "styled-components"
import { Color, ContentMarginX, ContentMarginY } from "./styles"

const Text = styled.div`
  h1 {
    margin-bottom: 1.5rem;
    width: 75%;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  p {
    margin-bottom: 4rem;
    width: 50%;
    @media (max-width: 768px) {
      width: 70%;
    }
  }
`

const Content = styled.section`
  ${ContentMarginX};
  ${ContentMarginY};
`

const Container = styled.div`
  background: ${Color.background};
  overflow: visible;
  border: white 1rem solid;
  min-height: 100vh;
  
  position: relative;
  
  .prompt {
    position: absolute;
    bottom: -1rem;
    right: 10%;
  }
  
  @media (max-width: 768px) {
    min-height: fit-content;
  }
`

const Hero = () => {
  return (
    <Container>
      <Header/>
      <Content>
        <Text>
          <h1>Hi, I’m Ethan, Web Developer
            and Web Designer
          </h1>
          <p>I design and build beautiful websites for businesses around the
            globe. If you need a modern and powerful website, send me an email.
            If we are a good fit, I will give you a time and cost estimate.</p>
        </Text>
        <HoverButton/>
      </Content>
      <div className='prompt'><ScrollPrompt/></div>
    </Container>
  )
}

export default Hero
