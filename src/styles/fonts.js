import { css } from 'styled-components';
import FiraSansBold from '../fonts/FiraSansBold.otf';
import FiraSansExtraBold from '../fonts/FiraSansExtraBold.otf';
import FiraSansRegular from '../fonts/FiraSansRegular.otf';
import MonumentExtendedRegular from '../fonts/MonumentExtendedRegular.otf';
import MonumentExtendedUltrabold from '../fonts/MonumentExtendedUltrabold.otf';

const FontFaces = css`
  @font-face {
    font-family: 'Fira Sans';
    font-weight: normal;
    src: url(${FiraSansRegular}) format('opentype');
  }

  @font-face {
    font-family: 'Fira Sans Bold';
    font-weight: bold;
    src: url(${FiraSansBold}) format('opentype');
  }

  @font-face {
    font-family: 'Fira Sans ExtraBold';
    font-weight: bolder;
    src: url(${FiraSansExtraBold}) format('opentype');
  }

  @font-face {
    font-family: 'Monument Extended';
    font-weight: normal;
    src: url(${MonumentExtendedRegular}) format('opentype');
  }

  @font-face {
    font-family: 'Monument Extended Bold';
    font-weight: bolder;
    src: url(${MonumentExtendedUltrabold}) format('opentype');
  }
`;
export default FontFaces;