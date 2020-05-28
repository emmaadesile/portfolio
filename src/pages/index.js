import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/sections/layout";
import SEO from "../components/seo";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Projects data={ data } />
    <Contact />
  </Layout>
);

export default IndexPage;

export const ImageQuery = graphql`
  query {
    projectOne: file(relativePath: { eq: "moviemania.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectOne2: file(relativePath: { eq: "movie.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectTwo: file(relativePath: { eq: "ride-my-way.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectTwo2: file(relativePath: { eq: "ride.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
