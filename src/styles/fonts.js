import { css } from 'styled-components';
// import FiraSansBold from '../fonts/FiraSansBold.otf';
// import FiraSansExtraBold from '../fonts/FiraSansExtraBold.otf';
// import FiraSansRegular from '../fonts/FiraSansRegular.otf';
// import MonumentExtendedRegular from '../fonts/MonumentExtendedRegular.otf';
// import MonumentExtendedUltrabold from '../fonts/MonumentExtendedUltrabold.otf';

const FontFaces = css`
  @font-face {
    font-family: 'Fira Sans';
    font-weight: normal;
    src: url('../fonts/FiraSansRegular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Fira Sans Bold';
    font-weight: bold;
    src: url('../fonts/FiraSansBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Fira Sans ExtraBold';
    font-weight: bolder;
    src: url('../fonts/FiraSansExtraBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Monument Extended';
    font-weight: normal;
    src: url('../fonts/MonumentExtendedRegular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Monument Extended Bold';
    font-weight: bolder;
    src: url('../fonts/MonumentExtendedUltrabold.otf') format('opentype');
  }
`;
export default FontFaces;