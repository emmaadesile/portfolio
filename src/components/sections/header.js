import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { colors, fontSizes, breakpoints } from "../../styles/theme";

const slideIn = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(30px);
  } 
  100% {
    opacity: 1;
    transform: translateY(0);
  } 
`;

const StyledHeader = styled.header`
  max-width: ${breakpoints.xl};
  color: ${colors.primaryColor};
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;

  .header-name {
    text-transform: uppercase;

    /* &:nth-child(1) {
      animation: ${slideIn} 500ms ease-in 1s;
    }

    &:nth-child(2) {
      animation: ${slideIn} 500ms ease-in;
      animation-delay: 2s;
    } */
  }

  .header-info {
    margin-top: 1.5rem;
    line-height: 1.5rem;
  }

  @media (min-width: ${breakpoints.xxs}) and (max-width: ${breakpoints.xxs}) {
    .header-name {
      font-size: 2.3rem;
      line-height: 3rem;
    }

    .header-info {
      font-size: ${fontSizes.xxs};
      line-height: 1.3rem;
    }
  }

  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: 1fr;

    .header-name {
      font-size: 3.1rem;
      line-height: 3rem;
    }

    .header-info {
      font-size: ${fontSizes.sm};
    }
  }

  @media (min-width: ${breakpoints.md}) {
    margin: 0 auto;

    .header-name {
      text-transform: uppercase;
      font-size: 5rem;
      max-width: 514px;
      line-height: 4.5rem;
    }

    .header-info {
      font-size: ${fontSizes.md};
      width: 600px;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <h1 className="header-name">
      <div>Emmanuel</div>
      <div>Adesile</div>
    </h1>
    <p className="header-info">
      I’m a Frontend Engineer and UI Designer currently based in Lagos, Nigeria.
      I specialize in building high quality Web and Mobile apps. I love
      exploring innovative ways of solving problems.
    </p>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
