import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import {Black} from "../utilities";

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "heliosipmscreen.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="div"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          
        </BackgroundImage>
      )
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  border: 1px solid ${Black};
  box-shadow: -5px 5px 16px 0px rgba(100,100,100,0.55);
`;

export default StyledBackgroundSection;