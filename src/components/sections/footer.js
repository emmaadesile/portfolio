import React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../../styles/theme";

const Container = styled.footer`
  color: ${colors.lightGrey};
  padding: 0 1.5rem;

  @media (min-width: ${breakpoints.xs}) {
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    text-align: left;
  }

  margin-bottom: 5rem;
`;

const Copyright = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BuiltWith = styled.p`
  font-size: 11px;

  a {
    color: ${colors.primaryColor};
  }
`;

const Footer = () => (
  <Container>
    <Copyright>
      © {new Date().getFullYear()} Copyright Emmanuel Adesile. All rights
      reserved.
    </Copyright>
    <BuiltWith>
      Built with{" "}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://www.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
    </BuiltWith>
  </Container>
);

export default Footer;
