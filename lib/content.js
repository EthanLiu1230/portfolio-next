import fs from 'fs';

export const projectsDirectory = `${process.cwd()}/content/projects`;

export function getAllFileIds(directory) {
  const fileNames = fs.readdirSync(directory);
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
