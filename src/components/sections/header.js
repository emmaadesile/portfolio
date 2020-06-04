import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, fontSizes, breakpoints } from "../../styles/theme";

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
      width: 514px;
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
    <h1 className="header-name">Emmanuel Adesile</h1>
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
