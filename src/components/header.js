import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {colors} from '../styles/theme';

const StyledHeader = styled.header`
  margin: 0 auto;
  max-width: 1440px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  .header-name {
    font-size: 70px;
    text-transform: uppercase;
    width: 514px;
  }

  .header-info {
    margin-top: 2em;
    line-height: 1.5em;
    width: 600px;
    color: ${colors.primaryColor}
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
