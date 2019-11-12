import React, { Fragment } from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";


// import Layout from "../components/Layout";
import Seo from "../components/utilities/Seo";

import styled from "styled-components";

import { Typography, Gray, Blue, Black, Sizes, Section, Container} from "../components/utilities";
import { LinkButton } from "../components/elements";



const MeImg = styled(Img)`
  border-radius: 50%;
  margin-bottom: 16px;
  box-shadow: 0px 0px 10px ${Black};

`;

const SectionHeading = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const SectionSubHeading = styled.h2`
  color: ${Blue};
  margin-bottom: 32px;
  font-weight: 400;
`;

const Description = styled.p`
  text-align: left;

`;

const StyledLink = styled.a`
  color: ${Blue};
  transition: all .3s ease-in-out;
  position: relative;
  display: inline-block;

  &:hover {
    
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      background: ${Blue};
      display: block;
      position: absolute;
      bottom: 0px;
      border-radius: 2px;
    }
  }

  
`;

const StackContainer = styled.div`
    display: flex;


    @media (max-width: 500px) {
   flex-direction: column;
  }
`;

const StackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 16px;
  border-left: 1px solid ${Gray};

 


`;

const StackHeader = styled.h3`
  font-size: ${Typography.medium};
  text-align: left;
  font-family: ${Typography.headingFont};
  margin-bottom: 16px;
  font-weight: 500;
`;

const StackItem = styled.li`
  text-align: left;

  padding-left: ${({ inset }) => (inset ? `12px` : `0px`)};
  padding-top: 6px;
  padding-bottom: 6px;
  border-left: ${({ inset }) => (inset ? `1px solid ${Gray}` : `0`)};

`;

const StackWrapper = styled.div`
  width: 100%;
  @media (max-width: 800px) {
   margin-bottom: 16px;

   &:last-child {
     margin: 0;
   }
  }
`;

const IndexPage = ({ data }) => (
  <Fragment>
    <Seo title="Me" />
      <Section border paddingTop={Sizes.xlarge} paddingBottom={Sizes.xlarge} paddingLeft={Sizes.xxlarge} paddingRight={Sizes.xxlarge}>
        <Container>
        <MeImg fixed={data.imageOne.childImageSharp.fixed} alt={"a pic of jake's face"} />
        <SectionHeading>UX Designer / Frontend Developer</SectionHeading>
        <SectionSubHeading>Based in <StyledLink href="https://goo.gl/maps/cK3G8HNKap9xgXqp6" target="_blank" rel="nofollow">Chicago</StyledLink>, IL</SectionSubHeading>
        <Description>
            Hello World! My name is Jake Schroeder and I am a designer/developer making web apps in <StyledLink href="https://reactjs.org/" target="_blank" rel="nofollow">ReactJS</StyledLink>. I am currently attending DePaul University majoring in User Experience
            Design and minoring in Software Engineering. I transferred after my freshman year at Parsons School of Design. I own my own freelance web practice called <StyledLink href="https://isophex.com" target="_blank" rel="nofollow">Isophex</StyledLink> and I do contract work for <StyledLink href="https://heliosip.com" target="_blank" rel="nofollow">Helios IPM</StyledLink>. When i'm not developing, I spend most of my time listening to music, working out at the gym and
            of course, honing my cooking skills in the kitchen. Oh and don't forget to check out the <StyledLink href={"https://bitbucket.org/jake-schroeder-isx/jakeschroeder.me/src/master/"} target={"_blank"} rel={"nofollow"}>Source Code</StyledLink> for this project.
          </Description>
          </Container>
      </Section>

     <Section paddingTop={Sizes.xlarge} paddingBottom={Sizes.xlarge} paddingLeft={Sizes.xxlarge} paddingRight={Sizes.xxlarge}>
      <Container>
        <StackContainer>

        <StackWrapper>
          <StackHeader>UXD Stack</StackHeader>
            <StackList>

              <StackItem>Prototyping</StackItem>
              <StackItem inset>Adobe XD</StackItem>
              <StackItem inset>Sketch</StackItem>

              <StackItem>Interface Design</StackItem>
              <StackItem inset>Adobe Photoshop</StackItem>
              <StackItem inset>Adobe Illustrator</StackItem>
              <StackItem inset>Adobe After Effects</StackItem>

              <StackItem>3D Modeling</StackItem>
              <StackItem inset>Cinema 4D</StackItem>

            </StackList>
          </StackWrapper>


          <StackWrapper>
            <StackHeader>Frontend Stack</StackHeader>
              <StackList>

                <StackItem>ReactJS</StackItem>
                <StackItem inset>Gatsby JS (Static App)</StackItem>
                <StackItem inset>Next JS (Server Rendered App)</StackItem>
                <StackItem inset>Typescript</StackItem>
                <StackItem inset>Styled Components</StackItem>

                <StackItem>Micro Services</StackItem>
                <StackItem inset>Netlify</StackItem>
                <StackItem inset>Now</StackItem>
                <StackItem inset>Algolia</StackItem>


              </StackList>
            </StackWrapper>

        
          </StackContainer>
        </Container>
    </Section>
  </Fragment>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "j-icon.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
