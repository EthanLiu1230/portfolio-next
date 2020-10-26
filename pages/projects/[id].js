import {
  getAllFileIds,
  getProjectIds,
  projectsDirectory,
} from '../../lib/content';

export default function Project({ params }) {
  return (
    <div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getProjectIds();
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
