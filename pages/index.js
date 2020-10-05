import Hero from '../components/Hero';
import React from 'react';
import styled from 'styled-components';
import CtaButton from '../components/CtaButton';
import { ContentMarginX, ContentMarginY } from '../styles/utils';
import Tag from '../components/Tag';
import Thumbnail from '../components/Thumbnail';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

const GridLayout = styled.div`
  ${ContentMarginX};
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    >:nth-child(even) {
        justify-self: start;
        align-self: start;
    }
  }
`;

const TagGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  >* {
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
          <CtaButton onClick={() => router.push('/first-page')}/>
        </LatestWork>
        <Thumbnail/>

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
          <CtaButton onClick={() => router.push('/first-page')}/>
        </LatestWork>
        <Thumbnail/>

        <h1>What I Do</h1>
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
      </GridLayout>
      <Footer/>
    </>
  );
}
