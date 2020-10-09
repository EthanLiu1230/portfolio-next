import remark from 'remark';
import html from 'remark-html';

// const processedContent = await remark().
//   use(html).
//   process(matterResult.content)
// const contentHtml = processedContent.toString()

const testContent = '# i am **Ethan**';

const mdToHtml = async (mdString) => {
  const processedContent = await remark().use(html).process(mdString);
  const contentHtml = processedContent.toString();
  return contentHtml;
};

const getHero = async () => {
  const title = await mdToHtml(testContent);
  return {
    title,
    description: '',
  };
};

export {
  getHero,
};