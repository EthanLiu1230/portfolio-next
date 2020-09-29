import React from "react"
import HoverLink from "./hover-link"
import styled from "styled-components"
import { ContentMarginX } from "./styles"

const Container = styled.header`
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${ContentMarginX};
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  font-family: Mulish, sans-serif;
  font-weight: 900;
  font-size: 22px;
  line-height: 25px;
`

const LinkGroup = styled.nav`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 1rem;
    align-self: start;
    > * {
      justify-self: start;
    }
  }
`

const Header = () => (
  <Container>
    <Logo>Ethan.Liu</Logo>
    <LinkGroup>
      <HoverLink to="/page-2/">my work</HoverLink>
      <HoverLink to="/page-2/">get in touch</HoverLink>
    </LinkGroup>
  </Container>
)

export default Header