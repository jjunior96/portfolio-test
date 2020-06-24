import { createGlobalStyle } from 'styled-components';

/* 
  #322E40
  #4E4BA6
  #44428C
  #F2DE77
  #0D0D0D
*/

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: #fff;
    color: #1F2C73;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
