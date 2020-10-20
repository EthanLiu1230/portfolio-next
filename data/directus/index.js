import DirectusSDK from '@directus/sdk-js';

export const client = new DirectusSDK({
  url: 'http://localhost:8080/',
  project: '_',
});

export const getProjects = async () => {
  const { data } = await client.getItems(
    'projects',
    { fields: '*.*,preview.data,detail.data' });
  return data.map(p => ({
    ...p, preview: p.preview.data.full_url, detail: p.detail.data.full_url,
  }));
};