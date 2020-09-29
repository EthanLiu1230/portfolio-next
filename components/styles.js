import { createGlobalStyle, css } from "styled-components"

export const Color = {
  background: "#F9EFE7",
  grey: "#b7b4b9",
  text: "#000000"
}

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 1440px;
  }
  
  body {
    font-family: Mulish, sans-serif;
    margin: 0;
    font-size: 16px; /* 15px - 20px for main body text */
    line-height: 1.3; /* 1.2 - 1.45 */
    color: ${Color.text};
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  
  h1 {
    font-family: Abril Fatface, serif;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 1.37;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 37px;
    }
  }
  
  h3 {
    font-family: Mulish, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.1;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: ${Color.grey};
    margin-bottom: 1rem;
  }
  
  p {
    font-family: Mulish, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.8;
  
    margin-top: 2rem;
    margin-bottom: 4rem;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  a {
    text-decoration: none;
  }
`

export const ContentMarginX = css`
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`

export const ContentMarginY = css`
  margin-top: 6rem;
  margin-bottom: 6rem;
  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`
