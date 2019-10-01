import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: roboto,sans-serif,'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family:roboto,sans-serif, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif,sans-serif;;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: roboto,sans-serif, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  pre{
    font-family: roboto,sans-serif, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
   div{
    font-family: roboto,sans-serif, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
