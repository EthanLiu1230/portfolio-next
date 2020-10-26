import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = 'empty';
const contentDirectory = `${process.cwd()}/content`;

// sort and get Posts' meta data
export async function getAllProjectsData() {
  const allProjectIds = getAllProjectIds();
  const data = allProjectIds.map(projectId => {
    const { params: { id } } = projectId;
    return getProjectData(id);
  });
  return await Promise.all(data);
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(`${contentDirectory}/projects`);
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

export async function getProjectData(id) {
  const fullPath = `${contentDirectory}/projects/${id}.md`;
  console.log('fullPath', fullPath);
  const projectData = await getContent(fullPath);
  // Combine the data with the id
  return {
    id,
    ...projectData,
  };
}

// get data from .md file,
// fullPath from system root
async function getContent(fullPath) {
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into html string
  const processedContent = await remark().
    use(remarkHtml).
    process(matterResult.content);
  const html = processedContent.toString();

  return {
    html,
    ...matterResult.data,
  };
}

export async function getHomepage() {
  const hero = await getContent(`${contentDirectory}/home/hero.md`);
  const whatIDo = await getContent(`${contentDirectory}/home/whatIDo.md`);
  const footer = await getContent(`${contentDirectory}/common/footer.md`);

  const projects = await getAllProjectsData();
  // console.log(projects);

  return {
    hero, whatIDo, footer, projects,
  };
}