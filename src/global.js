import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0px;

    p, span, input, li, button {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
    }
  }
`;