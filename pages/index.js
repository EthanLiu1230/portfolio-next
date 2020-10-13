import Hero from '../components/Hero';
import React from 'react';
import styled from 'styled-components';
import CtaButton from '../components/CtaButton';
import { get } from '../data';
import { ContentMarginX, Panarama } from '../styles/utils';
import Tag from '../components/Tag';
import Thumbnail from '../components/Thumbnail';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { baseUrl } from '../data';

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

export default function Home ({ hero, projects, whatIDo, footer }) {
  const router = useRouter();
  return (
    <>
      <Hero>
        <ReactMarkdown source={hero}/>
        <CtaButton onClick={() => router.push('/first-page')}/>
      </Hero>

      {
        projects.map(project => (
          <Project>
            <LatestWork_A>
              <Panarama>latest work</Panarama>
              <h1>{project.title}</h1>
              <TagGroup>
                <Tag>Website Design</Tag>
                <Tag>Web Development</Tag>
                <Tag>Concept</Tag>
              </TagGroup>
            </LatestWork_A>
            <ThumbnailWrap>
              <Thumbnail image={`${baseUrl}${project.thumbnail.url}`}/>
            </ThumbnailWrap>

            <LatestWork_B>
              <ReactMarkdown source={project.description}/>
              <CtaButton onClick={() => router.push('/first-page')}/>
            </LatestWork_B>
          </Project>))
      }

      <WhatIDo>
        <h1>What I <strong>Do</strong></h1>
        <div>
          <ReactMarkdown source={whatIDo}/>
        </div>
      </WhatIDo>
      <Footer>
        <ReactMarkdown source={footer}/>
      </Footer>
    </>
  );
}

export async function getStaticProps () {
  const { hero, whatIDo } = await get(`/homepage`);
  const projects = await get(`/projects`);
  const { footer } = await get(`/common`);
  return {
    props: {
      hero,
      whatIDo,
      projects,
      footer,
    },
  };
}