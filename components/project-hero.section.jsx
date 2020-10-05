import React from "react"
import styled from "styled-components"
import HoverLink from "../hover-link/hover-link.styles"
import Header from "./Header"

const Container = styled.div`
  background: #F9EFE7;
  overflow: visible;
  border: white 1rem solid;
  min-height: 90vh;
  text-align: center;
`
const Content = styled.div`
  max-width: 735px;
  margin: 6rem auto 4rem;
`
const ProjectHero = () => {
  return (
    <Container>
      <Header/>
      <Content>
        <h3>project showcase</h3>
        <h1>Mobile Web App</h1>
        <p>This is a homepage
          design and build for a concept project – a chat application. I have
          designed the page first then later built a responsive page in
          Webflow.</p>
        <HoverLink>visit live site</HoverLink>
      </Content>
    </Container>
  )
}

export default ProjectHero
