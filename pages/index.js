import Hero from '../components/Hero';
import React from 'react';
import styled from 'styled-components';
import CtaButton from '../components/CtaButton';
import { ContentMarginX, Panarama } from '../styles/utils';
import Tag from '../components/Tag';
import Thumbnail from '../components/Thumbnail';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

import ReactMarkdown from 'react-markdown';

const TagGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  >* {
    margin-right: .6rem;
    margin-bottom: .6rem;
  }
`;

const LatestWork_A = styled.div``;

const LatestWork_B = styled.div``;

const ThumbnailWrap = styled.div``;

const Project = styled.section`
  ${ContentMarginX};
  margin-bottom: 10rem;
  margin-top: 10rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-row-gap: 2rem;
  
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 4rem;
    grid-row-gap: 0;
    
    ${ThumbnailWrap} {
      grid-row: 1/3;
      grid-column: 2/3;
      align-self: center;
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
`;

const WhatIDo = styled.section`
  ${ContentMarginX};
  margin-top: 10rem;
  margin-bottom: 8rem;
  h1 {
    transform: translateX(-6px);
    margin-bottom: 4rem;
  }
  
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    h1 {
      transform: none;
      grid-column: 1/2;
    }
  }
`;

const input = '# This is a **header** \n And this is a paragraph';

export default function Home ({ hero }) {
  const router = useRouter();
  return (
    <>
      <Hero>
        <ReactMarkdown source={input}/>
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

        <ThumbnailWrap><Thumbnail/></ThumbnailWrap>

        <LatestWork_B>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            beatae culpa, doloribus esse ex laboriosam reprehenderit vitae? Ad
            asperiores dolores doloribus eius enim ex officia porro, praesentium
            quidem quis sit..</p>
          <CtaButton onClick={() => router.push('/first-page')}/>
        </LatestWork_B>

      </Project>

      <WhatIDo>
        <h1>What I <strong>Do</strong></h1>
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
  );
}

// export async function getStaticProps () {
//   const hero = await getHero();
//   // const projects = await getProjects() // array
//   // const skills = await getSkills() // array
//   // const footer = await getFooter()
//   return {
//     props: {
//       // hero, projects, skills, footer,
//       hero,
//     },
//   };
// }