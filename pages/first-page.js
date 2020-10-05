import StyledLink from '../components/StyledLink';
import React from 'react';
import ProjectHero from '../components/ProjectHero';
import Link from 'next/link';
import Footer from '../components/Footer';
import ProjectDetail from '../components/ProjectDetail';

const FirstPage = () => {
  return (
    <>
      <ProjectHero>
        <h3>project showcase</h3>
        <h1>Mobile Web App</h1>
        <p>This is a homepage
          design and build for a concept project – a chat application. I have
          designed the page first then later built a responsive page in
          Webflow.</p>
        <Link href={'/'}><StyledLink>visit live site</StyledLink></Link>
      </ProjectHero>
      <ProjectDetail/>
      <Footer/>
    </>
  );
};

export default FirstPage;
