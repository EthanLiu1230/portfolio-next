import Hero from '../components/hero';
import React from 'react';
import styled from 'styled-components';
import CtaButton from '../components/CtaButton/CtaButton';
import { ContentMarginX, ContentMarginY } from '../styles/utils';
import Tag from '../components/tag';
import Thumbnail from '../components/Thumbnail/Thumbnail';
import { useRouter } from 'next/router';

const GridLayout = styled.div`
  ${ContentMarginX};
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  >* {
    ${ContentMarginY};
  }
  >:nth-child(odd) {
    justify-self: start;
    align-self: start;
    width: 90%;
  }
  >:nth-child(even) {
    justify-self: end;
    align-items: start;
    margin-left: .5rem;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
      >:nth-child(even) {
        justify-self: start;
        align-items: start;
      }
  }
`;

const TagGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  > * {
    margin-right: 1rem;
  }
`;

const LatestWork = styled.div``;

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero>
        <h1>Hi, I’m Ethan,
          Web Developer and Web Designer
        </h1>
        <p>
          I design and build beautiful websites for businesses around the
          globe. If you need a modern and powerful website, send me an email.
          If we are a good fit, I will give you a time and cost estimate.
        </p>
        <CtaButton onClick={() => router.push('/first-page')}/>
      </Hero>
      <GridLayout>
        <LatestWork>
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
          <CtaButton label='la'/>
        </LatestWork>
        <Thumbnail/>
      </GridLayout>
    </>
  );
}
