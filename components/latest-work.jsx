import React from "react"
import HoverButton from "./hover-button"
import Tag from "./tag"
import styled from "styled-components"

// no-styling container: use grid in pages/index.js to control margin instead
const Container = styled.section``

const TagGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  > * {
    margin-right: 1rem;
  }
`

const LatestWork = () => {
  return (
    <Container>
      <h3>latest work</h3>
      <h1>Chat App website</h1>
      <TagGroup>
        <Tag>Website Design</Tag>
        <Tag>Web Development</Tag>
        <Tag>Concept</Tag>
      </TagGroup>
      <p>This is a homepage design and build for a concept project – a chat
        application. I have designed the page first then later built a
        responsive page in Webflow.</p>
      <HoverButton/>
    </Container>
  )
}

export default LatestWork
