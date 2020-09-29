import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 1500px;
    font-family: Mulish, sans-serif;
    font-size: 16px; /* 15px - 20px for main body text */
    line-height: 1.3; /* 1.2 - 1.45 */
    color: ${({ theme }) => theme.colors.text1};
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
    color: ${({ theme }) => theme.colors.text2};
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
`;

export default GlobalStyle;
