import { getAllFileIds, projectsDirectory } from '../../lib/content';

export default function Project({ params }) {
  return (
    <div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllFileIds(projectsDirectory);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      params,
    },
  };
}
