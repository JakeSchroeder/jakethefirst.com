import { createGlobalStyle } from 'styled-components';
import { Black, Gray, DarkBlack} from "./Colors";
import { Typography } from "./";

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    line-height: 1.66;
    font-size: ${Typography.body};

    @media (max-width: 800px) {
      font-size: 16px;
    }


  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${Typography.bodyFont};
    font-weight: 400;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    background: linear-gradient(180deg,#9dccee,#fff);
    background-size: 100% 100%;
    color: #415D6E;
    font-display: swap;
  }
  
  h1, h2, h3, h4 {
    font-family: ${Typography.headingFont};
    margin: 0;
    font-weight: 600;
    color: ${DarkBlack};
    font-display: swap;
    line-height: 1.2;
  }
  
  p {
    margin: 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    font-family: ${Typography.bodyFont};
  }



 


`;

export default GlobalStyle;
