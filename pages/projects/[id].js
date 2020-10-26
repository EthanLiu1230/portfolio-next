import {
  getAllProjectIds, getProjectData,
} from '../../lib/content';
import ProjectHero from '../../components/ProjectHero';
import { Panarama } from '../../styles/utils';
import Link from 'next/link';
import ProjectDetail from '../../components/ProjectDetail';
import Footer from '../../components/Footer';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function Project({ projectData }) {
  return (
    <>
      <ProjectHero>
        <Panarama>project showcase</Panarama>
        {ReactHtmlParser(projectData.html)}
        <Link href={'/'}><a>visit live site</a></Link>
      </ProjectHero>
      <ProjectDetail/>
      <Footer/>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}