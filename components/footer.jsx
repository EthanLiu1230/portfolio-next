import React from "react"
import styled from "styled-components"
import { Color, ContentMarginX, ContentMarginY } from "./styles"

const Container = styled.footer`
  background: ${Color.background};
  border: white 1rem solid;
  overflow: visible;
  min-height: 370px;
  
  position: relative;
`

const ContentContainer = styled.div`
  ${ContentMarginY};
  ${ContentMarginX};
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const Reserved = styled.div`
  display: block;
  color: black;
  font-size: 14px;
  opacity: 50%;
  line-height: 1.8;
  margin-left: 10%;
  margin-bottom: 24px;
  
  position: absolute;
  bottom: 0;
`

const Footer = () => {
  return (
    <Container>
      <ContentContainer>
        <h1>
          Want to work?
        </h1>
        <p>
          If you need a modern and powerful website for your business, startup
          or
          personally, I am available for work. You can email me directly at
          dev_ethan@outlook.com.
        </p>
      </ContentContainer>
      <Reserved>
        © All right reserved – Ethan.Liu
      </Reserved>
    </Container>
  )
}

export default Footer
