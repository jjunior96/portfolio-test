import { createGlobalStyle } from 'styled-components';

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
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
