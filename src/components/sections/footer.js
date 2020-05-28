import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";

const Container = styled.footer`
  color: ${colors.lightGrey};
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
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on{" "}
      <a href="https://www.netlify.com">Netlify</a>
    </BuiltWith>
  </Container>
);

export default Footer;
