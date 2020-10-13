import { createGlobalStyle } from 'styled-components';
import FontFaces from './fonts';

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  :root {
    /* fonts */
    --font-Monument: 'Monument Extended', Helvetica, sans-serif;
    --font-fira: 'Fira Sans', San Francisco, SF Pro Text, -apple-system, system-ui,BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;

    /* colors */
    --primaryColor: #ff0054;
    --almostWhite: #EDEDED;
    --white: #fff;
    --black: #000;
    --lightGrey: #B7B7B7;
    --faintGrey: #333232;
    --darkGrey: #3e3d3d;
    --grey: #c7c7c7;
    --iconGrey: #777777;
    --transition: all 0.5s cubic-bezier(0,.52,.59,.83);

    /* fonts-size */
    --xxs:320px;
    --xs: 400px;
    --sm: 640px;
    --md: 768px;
    --lg: 1024px;
    --xl: 1280px;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--black);
    width: 100%;
    font-family: var(--font-Monument);
    font-size: var(--md);
    color: var(--black);
    min-height: 100vh;
    min-height: -webkit-fill-available;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--white);
    font-weight: bolder;
  }

  h1 {
    &.header-title {
      line-height: 1.1;

      @media screen and (min-width: var(--lg)) {
        font-size: 70px;
      }
      @media screen and (min-width: var(--md)){
        font-size: 50px;
      }
      @media screen and (min-width: var(--xs)) {
        font-size: 30px;
      }
    }
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    display: inline-block;
  }
`;

export default GlobalStyle;
