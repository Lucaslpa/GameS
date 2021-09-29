import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body,html {
    border: none; 
         margin: 0;
         padding: 0; 
    font-family: Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    font-size: 62.5% 
  }

  * {
      font-family: Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      border: none; 
         margin: 0;
         padding: 0; 
    }

`;
