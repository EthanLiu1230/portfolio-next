import Hero from '../components/Hero'
import React from 'react'
import styled from 'styled-components'
import CtaButton from '../components/CtaButton'
import { ContentMarginX, ContentMarginY, Panarama } from '../styles/utils'
import Tag from '../components/Tag'
import Thumbnail from '../components/Thumbnail'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

const TagGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  >* {
    margin-right: .6rem;
    margin-bottom: .6rem;
  }
`

const LatestWork_A = styled.div`

`

const LatestWork_B = styled.div`

`

const ThumbnailWrapper = styled.div`
`

const Project = styled.section`
  ${ContentMarginX};
  ${ContentMarginY};
  
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 4rem;
    
    ${ThumbnailWrapper} {
      grid-row: 1/3;
      grid-column: 2/3;
    }
    
    ${LatestWork_A} {
      grid-row: 1/2;
      grid-column: 1/2;
    }    
    ${LatestWork_B} {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
`

const WhatIDo = styled.section`
  ${ContentMarginX};
  ${ContentMarginY};
`

export default function Home () {
  const router = useRouter()
  return (
    <>
      <Hero>
        <h1>Hi, I’m Ethan,
          <b>Web Developer</b> and <b>Web Designer</b>
        </h1>
        <p>
          I design and build beautiful websites for businesses around the
          globe. If you need a modern and powerful website, send me an email.
          If we are a good fit, I will give you a time and cost estimate.
        </p>
        <CtaButton onClick={() => router.push('/first-page')}/>
      </Hero>

      <Project>

        <LatestWork_A>
          <Panarama>latest work</Panarama>
          <h1>Chat App website</h1>
          <TagGroup>
            <Tag>Website Design</Tag>
            <Tag>Web Development</Tag>
            <Tag>Concept</Tag>
          </TagGroup>
        </LatestWork_A>

        <ThumbnailWrapper><Thumbnail/></ThumbnailWrapper>

        <LatestWork_B>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            beatae culpa, doloribus esse ex laboriosam reprehenderit vitae? Ad
            asperiores dolores doloribus eius enim ex officia porro, praesentium
            quidem quis sit..</p>
          <CtaButton onClick={() => router.push('/first-page')}/>
        </LatestWork_B>

      </Project>

      <WhatIDo>
        <h1>What I <b>Do</b></h1>
        <div>
          <h2>Design</h2>
          <p>I design beautiful and powerful websites for modern businesses. Any
            business today needs a website that wins customers’ trust and helps
            you do your business well. I make sure your website is up to that
            standard.</p>
          <h2>Development</h2>
          <p>I build websites in Webflow where I can create responsive, powerful
            and fully custom websites. Plus, Webflow has an incredibly simple
            Content Editor for you and your team to edit website content quickly
            and easily.</p>
        </div>
      </WhatIDo>
      <Footer/>
    </>
  )
}
