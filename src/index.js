import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import Root from "./components/Root";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  html, body {
    margin: 0;
    padding: 0;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Montserrat, sans-serif;
  }
`;

render(
  <>
    <GlobalStyle />
    <Root />
  </>,
  document.getElementById("app")
);
