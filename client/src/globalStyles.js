import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}
`;