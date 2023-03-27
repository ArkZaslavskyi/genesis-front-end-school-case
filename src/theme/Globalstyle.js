import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-active: #e99d35;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
  margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .Container {
    width: 480px;
    padding: 0 16px;
    margin: 0 auto;
  }

  .section {
    padding: 8px 0;
  }

  @media screen and (min-width: 768px) {
    .Container {
      width: 768px;
    }
  }

  @media screen and (min-width: 1280px) {
    .Container {
      width: 1280px;
    }
  }
`;

export default GlobalStyle;
