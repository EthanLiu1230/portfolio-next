import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = 'empty';
const contentDirectory = `${process.cwd()}/content`;

// sort and get Posts' meta data
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);
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
  const projectData = await getFileData(fullPath);
  // Combine the data with the id
  return {
    id,
    ...projectData,
  };
}

// get data from .md file
async function getFileData(fullPath) {
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
  const hero = await getFileData(`${contentDirectory}/home/hero.md`);
  const whatIDo = await getFileData(`${contentDirectory}/home/whatIDo.md`);
  const footer = await getFileData(`${contentDirectory}/common/footer.md`);

  return {
    hero, whatIDo, footer,
  };
}