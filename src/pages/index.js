import React, { Fragment } from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";


// import Layout from "../components/Layout";
import Seo from "../components/utilities/Seo";

import styled from "styled-components";

import { Typography, Gray, Blue, Black, DarkBlack, Sizes, Section, Container} from "../components/utilities";
import { LinkButton } from "../components/elements";

const StyledSection = styled(Section)`
  padding: 0;
  height: 50%;

  @media (max-width: 1100px) {
 
 height: auto;
}
`;

const StyledContainer = styled(Container)`

  max-width: 1328px;
  height: 100%;
  display: flex;

  @media (max-width: 1100px) {
   flex-direction: column;
  }

`;

const Column = styled.div`
  width: 50%;
  padding: ${Sizes.xlarge};
  /* border-right: ${({border}) => (border ? `1px solid ${Gray}`: `0`)}; */

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  /* order: ${({reversed}) => (reversed ? `1`: `0`)}; */
  border-right: ${({border}) => (border ? `1px solid ${Gray}`: `0`)};
  

  &.justify-col {
    flex-direction: column;
  }

  &.align-end {
    align-items: flex-end;
  }
 
  @media (max-width: 1100px) {
    padding: ${Sizes.large};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: 0;
    order: 0;
  }




`;

// const Column = styled.div`
//   width: 50%;
//   /* padding: ${Sizes.xlarge}; */
//   display: flex;
//   align-items: flex-start;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;

//   .left {
//     justify-content: flex-start;

//   }

//   @media (max-width: 800px) {
//    margin-bottom: 16px;
//    width: 100%;
//   }

// `;

// const StyledContainer = styled(Container)`
//   display:flex;
//   flex-direction: row;
//   align-items: flex-end;
//   height: 100%;
//   @media (max-width: 800px) {
//    margin-bottom: 16px;
//   flex-direction: column;
//   }
// /* 
//   @media (max-width: 945px) {
//     flex-direction: column;

//   } */

// `;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* margin-top: -32px */
  height: 100%;
`

const BottomWrapper = styled.div`
  height: 100%;
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
  font-size: 48px;
  margin-bottom: 16px;
  font-weight: 700;
  white-space: nowrap;


  
  @media (max-width: 1245px) {
    font-size: 40px;
    
  }


`;

const SectionSubHeading = styled.p`
  text-align: left;
  color: ${Black};
  font-weight: 400;
  /* padding-top: 64px; */

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
  transition: all .3s ease-in-out;
  position: relative;
  display: inline-block;

  margin-right: 16px;

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

  /* border-left: 1px solid ${Gray}; */

 


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
      <StyledSection border paddingTop={Sizes.xlarge} paddingBottom={Sizes.xlarge} paddingLeft={Sizes.xxlarge} paddingRight={Sizes.xxlarge}>
      <StyledContainer>
        <Column className="justify-col" border>
          <TopWrapper>
            <MeImg fixed={data.imageOne.childImageSharp.fixed} alt={"a pic of jake's face"} />
            <SectionHeading>UX Designer<br/>Frontend Developer</SectionHeading>
            <SectionSubHeading className="mb">Based in <StyledLink style={{marginRight: 0}} href="https://goo.gl/maps/cK3G8HNKap9xgXqp6" target="_blank" rel="nofollow">Chicago</StyledLink>, IL</SectionSubHeading>
          </TopWrapper>
          <BottomWrapper>
            <SectionSubHeading ><StyledLink href="https://www.linkedin.com/in/jake-schroeder/" target="_blank" rel="nofollow">Linkedin</StyledLink><StyledLink href="https://www.instagram.com/jakeman001/" target="_blank" rel="nofollow">Instagram</StyledLink><StyledLink href="https://dribbble.com/KidUnknown">Dribble</StyledLink><StyledLink href="https://github.com/JakeSchroeder">Github</StyledLink></SectionSubHeading>
          </BottomWrapper>
        </Column>

        <Column className="align-end">
        <Description>
        I am passionate about bringing together leading UX Design and effective Frontend Development to deliver highly usable and pragmatic solutions. I am constantly working to improve my skills by exploring the latest design trends, frameworks and technologies. My strength is in understanding business requirements and translating them into well designed, valuable solutions. <br/> <br/>
My best projects are focused on applying the latest UX concepts that effectively reconcile creative design with practical functionality, communicating professionalism and a unique modern aesthetic that is both exciting and usable. With strong interpersonal instincts, I enjoy working closely with business owners to fully understand their business objectives as the focus of our solution. 
          </Description>
        </Column>

      </StyledContainer>
      
        </StyledSection>

      <StyledSection paddingTop={Sizes.xlarge} paddingBottom={Sizes.xlarge} paddingLeft={Sizes.xxlarge} paddingRight={Sizes.xxlarge}>
      <StyledContainer>
        <Column border>

        <StackWrapper>
          <StackHeader>UXD Stack</StackHeader>
            <StackList>

              <StackItem>Prototyping</StackItem>
              <StackItem >Adobe XD</StackItem>
              <StackItem >Sketch</StackItem>
              <StackItem >Adobe Photoshop</StackItem>
              <StackItem >Adobe Illustrator</StackItem>
              <StackItem >Adobe After Effects</StackItem>
              <StackItem >Cinema 4D</StackItem>

            </StackList>
          </StackWrapper>

          <StackWrapper>
            <StackHeader>Frontend Stack</StackHeader>
              <StackList>

                <StackItem>ReactJS</StackItem>
                <StackItem>Gatsby JS</StackItem>
                <StackItem >Next JS</StackItem>
                <StackItem >Typescript</StackItem>
                <StackItem >Styled Components</StackItem>
                <StackItem >Netlify</StackItem>
                <StackItem >Now</StackItem>
                <StackItem >Algolia</StackItem>


              </StackList>
            </StackWrapper>


          </Column>
          <Column>
         
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
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
