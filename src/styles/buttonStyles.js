import { css } from "styled-components";
import { colors, transition } from "./theme";

const buttonStlyes = css`
  color: ${colors.white};
  border: 1px solid ${colors.primaryColor};
  background-color: transparent;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    ${colors.primaryColor} 50%,
    ${colors.primaryColor}
  );
  background-position: 100% 0px;
  background-size: 200% 100%;
  transition: ${transition};

  &:hover {
    background-position: 0 0;
    color: ${colors.white};
  }
`;

export default buttonStlyes;
