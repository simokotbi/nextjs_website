import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration:none;
  }
  html {
    /* font-size: 92.5%; */
    scroll-behavior: smooth;
    
/* background-color: greenyellow; */
  }
  body {
    cursor: default;
    background-color: #f8f8f8;
   
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