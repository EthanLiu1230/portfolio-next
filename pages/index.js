import Hero from '../components/hero';
import React from 'react';
import HoverButton from '../components/hover-button';

export default function Home() {
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
        <HoverButton>See my work</HoverButton>
      </Hero>
    </>
  );
}
