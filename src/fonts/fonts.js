import { css } from "styled-components";

const FontFaces = css`
  @font-face {
    font-family: "Fira Sans Regular";
    font-weight: normal;
    src: url("FiraSans-Regular.otf") format("otf");
  }

  @font-face {
    font-family: "Fira Sans Bold";
    font-weight: bold;
    src: url("FiraSans-Bold.otf") format("otf");
  }

  @font-face {
    font-family: "Fira Sans ExtraBold";
    font-weight: bolder;
    src: url("FiraSans-ExtraBold.otf") format("otf");
  }

  @font-face {
    font-family: "Monument Extended";
    font-weight: normal;
    src: url("MonumentExtended-Regular.otf") format("otf");
  }

  @font-face {
    font-family: "Monument Extended Bold";
    font-weight: bolder;
    src: url("MonumentExtended-Ultrabold.otf") format("otf");
  }
`;
export default FontFaces;
