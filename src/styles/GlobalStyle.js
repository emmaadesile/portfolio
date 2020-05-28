import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import FontFaces from "../fonts/fonts";

const { colors, fonts, fontSizes, breakpoints } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${colors.black};
    width: 100%;
    font-family: ${fonts.MonumentExtended};
    font-size: ${fontSizes.md};
    color: ${colors.black};
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
    color: ${colors.white};
    font-family: ${fonts.MonumentExtended};
    font-weight: bolder;
  }

  h1 {
    &.header-title {
      line-height: 1.1;

      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 70px;
      }
      @media screen and (max-width: ${breakpoints.md}){
        font-size: 50px;
      }
      @media screen and (max-width: ${breakpoints.xs}) {
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
    transition: ${theme.transition};
    display: inline-block
  }
`;

export default GlobalStyle;
