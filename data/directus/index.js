import DirectusSDK from '@directus/sdk-js';

export const client = new DirectusSDK({
  url: 'http://localhost:8080/',
  project: '_example',
});
