import React from "react";
import styled from "styled-components";
import { colors } from "./theme";

const StyledHeading = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  font-family: "Monument Extended";
  text-stroke: 1px ${colors.primaryColor};
  -webkit-text-stroke: 1px ${colors.primaryColor};
  -moz-text-stroke: 1px ${colors.primaryColor};
  color: transparent;
  margin-bottom: 2rem;
`;

const Heading = ({ name }) => <StyledHeading>{name}</StyledHeading>;

export default Heading;
