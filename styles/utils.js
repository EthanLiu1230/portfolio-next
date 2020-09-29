import { css } from 'styled-components';

export const ContentMarginX = css`
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 960px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const ContentMarginY = css`
  margin-top: 6rem;
  margin-bottom: 6rem;
  @media (max-width: 960px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const defaultTheme = {
  colors: {
    primary: '#F9EFE7',
    text1: '#000000',
    text2: '#b7b4b9',
    highlight: '#ffe872'
  }
};