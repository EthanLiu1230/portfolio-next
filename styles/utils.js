import { css } from 'styled-components'

export const ContentMarginX = css`
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 960px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`

export const ContentMarginY = css`
  margin-top: 8rem;
  margin-bottom: 8rem;
  @media (max-width: 960px) {
    margin-top: 0;
    margin-bottom: 4rem;
  }
`

export const defaultTheme = {
  colors: {
    primary: '#F9EFE7',
    text1: '#000000',
    text2: '#b7b4b9',
    highlight: '#ffe872',
  },
}