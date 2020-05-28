import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

// https://criscodes.hashnode.dev/how-to-render-multiple-images-in-gatsby-using-image-component-cjxoowlou000pfms1o91x71ts
const Image = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((img) => {
    return filename.includes(img.node.name);
  });

  if (!image) return null;

  const imageFluid = image.node.childImageSharp.fluid;
  return <Img alt={alt} fluid={imageFluid} />;
};

export default Image;
