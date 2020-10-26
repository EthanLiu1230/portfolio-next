import fs from 'fs';
// import hero from '../content/home/hero.md';
const heroPath = '../content/home/hero.md';

const projectsAbsDir = `${process.cwd()}/content/projects`;

export function getProjectIds() {
  const fileNames = fs.readdirSync(projectsAbsDir);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  // Important: The returned list is not just an array of strings — it must be
  // an array of objects that look like the comment above. Each object must
  // have the params key and contain an object with the id key (because we’re
  // using [id] in the file name). Otherwise, getStaticPaths will fail.
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export const getProjectData = (id) => {
  const filePath = `${contentDir}/projects/${id}.md`;
  const project = import(filePath);
  console.log(project);
};

export async function getHomepage() {
  const heroDir = `../content/home/hero.md`;
  const hero = await import(heroDir).then(
    module => module.default);
  const whatIDo = await import(`../content/home/whatIDo.md`).then(
    module => module.default);
  const footer = await import(`../content/common/footer.md`).then(
    module => module.default);

  // todo: add projects to homepage
  return {
    hero, whatIDo, footer,
  };
}


