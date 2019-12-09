import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// import Layout from "../components/Layout";
import Seo from "../components/utilities/Seo";

import styled from "styled-components";

import {
  Typography,
  Gray,
  Blue,
  Black,
  DarkBlack,
  Sizes,
  Section,
  Container
} from "../components/utilities";
import { LinkButton } from "../components/elements";

const StyledSection = styled(Section)`
  padding: 0;

  @media (min-width: 800px) {
    &.full {
      height: 100%;

      & > div {
        height: 100%;
      }
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: ${Sizes.xlarge};
  /* border-right: ${({ border }) => (border ? `1px solid ${Gray}` : `0`)}; */

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  /* order: ${({ reversed }) => (reversed ? `1` : `0`)}; */
  border-right: ${({ border }) => (border ? `1px solid ${Gray}` : `0`)};
  
  /* padding-bottom: ${({ border }) => (border ? `0` : `${Sizes.xlarge}`)}; */

  &.justify-col {
    flex-direction: column;
  }

  &.align-end {
    align-items: flex-end;
  }
 
  @media (max-width: 1100px) {
    width: 100%;
  
    /* margin: 0 auto; */
    border: 0;
    order: 0;

    &:nth-of-type(even) {
       padding-top: 16px;
    }

    &:nth-of-type(odd) {
      padding-bottom: 16px;
    }



  }


  @media (max-width: 800px) {
      padding: ${Sizes.large};

    }

`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  /* margin-top: -32px */
`;

const BottomWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

const MeImg = styled(Img)`
  display: block;
  width: 100%;
  border-radius: 50%;
  margin-bottom: 32px;
  /* box-shadow: 0px 0px 10px ${Black}; */
  /* border: 2px solid ${DarkBlack}; */
`;

const SectionHeading = styled.h1`
  text-align: left;
  /* color: ${Blue}; */
  font-size: 64px;
  margin-bottom: 32px;
  font-weight: 700;
  


  @media (max-width: 900px) {
    font-size: 56px;
    
  }
`;

const SectionSubHeading = styled.p`
  text-align: left;
  color: ${Black};
  font-weight: 400;
  /* padding-top: 64px; */
  margin-top: 16px;

  &.mb {
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  text-align: left;
`;

/* const Top = styled.div`
  
`; */

const StyledLink = styled.a`
  color: ${Black};
  transition: all 0.3s ease-in-out;
  position: relative;
  display: inline-block;

  margin-right: 16px;

  &:hover {
    &:after {
      content: "";
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

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const StackList = styled.ul`
  list-style: none;
  margin: 0;

  /* border-left: 1px solid ${Gray}; */

 


`;

const StackHeader = styled.h3`
  font-size: ${Typography.large};
  text-align: left;
  font-family: ${Typography.headingFont};
  margin-bottom: 16px;
  line-height: 1.4;
  font-weight: 400;
  white-space: nowrap;
`;

const StackItem = styled.li`
  text-align: left;

  line-height: 2.49;
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

const ColumnInner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const IndexPage = ({ data }) => (
  <Fragment>
    <Seo title="Me" />
    <StyledSection border>
      <StyledContainer>
        <Column className="justify-col">
          <TopWrapper>
            {/* <MeImg fixed={data.imageOne.childImageSharp.fixed} alt={"a pic of jake's face"} /> */}

            <SectionHeading>Jake Schroeder</SectionHeading>
            <StackHeader>
              UX Designer
              <br />
              Frontend Developer
            </StackHeader>
            <SectionSubHeading>
              Based in{" "}
              <StyledLink
                style={{ marginRight: 0 }}
                href="https://goo.gl/maps/cK3G8HNKap9xgXqp6"
                target="_blank"
                rel="nofollow"
              >
                Chicago
              </StyledLink>
              , IL
            </SectionSubHeading>
          </TopWrapper>
        </Column>

        <Column className="align-end">
          <BottomWrapper>
            <SectionSubHeading>
              <StyledLink
                href="https://www.linkedin.com/in/jake-schroeder/"
                target="_blank"
                rel="nofollow"
              >
                Linkedin
              </StyledLink>
              <StyledLink
                href="https://www.instagram.com/jakeman001/"
                target="_blank"
                rel="nofollow"
              >
                Instagram
              </StyledLink>
              <StyledLink href="https://dribbble.com/KidUnknown">
                Dribbble
              </StyledLink>
              <StyledLink href="https://github.com/JakeSchroeder">
                Github
              </StyledLink>
            </SectionSubHeading>
          </BottomWrapper>
        </Column>
      </StyledContainer>
    </StyledSection>

    <StyledSection className="full">
      <StyledContainer>
        <Column border>
          <Description>
            I am passionate about bringing together leading UX Design and
            effective Frontend Development to deliver highly usable and
            pragmatic solutions. I am constantly working to improve my skills by
            exploring the latest design trends, frameworks and technologies. My
            strength is in understanding business requirements and translating
            them into well designed, valuable solutions. <br /> <br />
            My best projects are focused on applying the latest UX concepts that
            effectively reconcile creative design with practical functionality,
            communicating professionalism and a unique modern aesthetic that is
            both exciting and usable. With strong interpersonal instincts, I
            enjoy working closely with business owners to fully understand their
            business objectives as the focus of our solution.
          </Description>
        </Column>

        <Column>
          <ColumnInner>
            <StackWrapper>
              <StackHeader>UXD Stack</StackHeader>
              <StackList>
                <StackItem>
                  <StyledLink
                    href="https://www.adobe.com/products/xd.html"
                    target={"_blank"}
                  >
                    Adobe XD
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Figma
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://www.adobe.com/products/photoshop.html"
                    target="_blank"
                    rel="nofollow"
                  >
                    Adobe Photoshop
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://www.adobe.com/products/illustrator.html"
                    target="_blank"
                    rel="nofollow"
                  >
                    Adobe Illustrator
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://www.adobe.com/products/aftereffects.html"
                    target="_blank"
                    rel="nofollow"
                  >
                    Adobe After Effects
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://www.maxon.net/en-us/products/cinema-4d/overview/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Cinema 4D
                  </StyledLink>
                </StackItem>
              </StackList>
            </StackWrapper>

            <StackWrapper>
              <StackHeader>Frontend Stack</StackHeader>
              <StackList>
                <StackItem>
                  <StyledLink
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="nofollow"
                  >
                    TypeScript
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://www.gatsbyjs.org/"
                    target="_blank"
                    rel="nofollow"
                  >
                    GatsbyJS
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="nofollow"
                  >
                    NextJS
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://www.styled-components.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Styled Components
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Netlify
                  </StyledLink>
                </StackItem>
                <StackItem>
                  <StyledLink
                    href="https://zeit.co/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Zeit Now
                  </StyledLink>
                </StackItem>
              </StackList>
            </StackWrapper>
          </ColumnInner>
        </Column>
      </StyledContainer>
    </StyledSection>
  </Fragment>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "j-icon.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
