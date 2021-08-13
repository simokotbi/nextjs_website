// html,
// body {
//   padding: 0;
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// * {
//   box-sizing: border-box;
// } */

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 2.6rem;
    background: ${props => props.theme.colors.colorgrey40};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.secondary};
  }
  a {
    

    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;