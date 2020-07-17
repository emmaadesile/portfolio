import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/sections/layout';
import SEO from '../components/seo';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/footer';
import Loading from '../components/sections/loading';
import GlobalStyle from '../styles/GlobalStyle';

const IndexPage = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <SEO title="Home" />
          <Projects data={data} />
          <Contact />
          <Footer />
        </Layout>
      )}
    </React.Fragment>
  );
};

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
