import React, {Fragment} from "react"
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// import Layout from "../components/Layout";
import Seo from "../components/utilities/Seo";

import styled from "styled-components";

import {Typography, Gray, Blue, Black, Sizes, Section, Container} from "../components/utilities";
import {LinkButton} from "../components/elements";



const WorkSection = styled.section`
  height: 50%;
  border-bottom: 1px solid ${Gray};


  @media (max-width: 800px) {
 
    height: auto;
  }


  @media (max-height: 800px) {
    height: auto;
  }

`;

const StyledContainer = styled(Container)`
  max-width: 1200px;
  height: 100%;
  display: flex;

  @media (max-width: 800px) {
   flex-direction: column;
  }

`;

const Column = styled.div`
  width: 50%;
  padding: ${Sizes.large};
  border-left: ${({border}) => (border ? `1px solid ${Gray}`: `0`)};
  display: flex;
  align-items: center;
  justify-content: center;
  order: ${({reversed}) => (reversed ? `1`: `0`)};



  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: 0;
    order: 0;
  }


`;

const WorkContent = styled.div`
  display: flex;
  flex-direction: column;

`;

const WorkType = styled.h4`
  color: ${Blue};
  margin-bottom: 8px;
  font-weight: 500;
`;

const WorkTitle = styled.h2`
margin-bottom: 8px;

	font-weight: 600;
`;

const WorkDescription = styled.p`
  margin-bottom: 12px;
  font-size: ${Typography.body};
`;

const VisitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const TagWrapper = styled.div`
  display: flex;
  align-items: center;

`;

const TagIndicator = styled.div`
  border-radius: 50%;
  height: 16px;
  width: 16px;
  background: ${Black};
  box-shadow: 0px 0px 10px 1px rgba(35,35,35,.66);
  margin-right: 8px;
`;

const TagItems = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

const StyledBackgroundSection = styled(BackgroundImage)`
  min-height: 320px;
  max-height: 350px;
  height: 90%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: contain; */
  border-radius: 6px;
  border: 1px solid ${Black};
  box-shadow: -5px 5px 16px 0px rgba(100,100,100,0.55);
`;


const Tags = ({children}) => (
  <TagWrapper>
    <TagIndicator/>
    <TagItems>{children}</TagItems>
  </TagWrapper>
);

const WorkItem = ({img, isReversed, title, border, description, link, tags }) => (
  <WorkSection>
    <StyledContainer>
      <Column reversed={isReversed}>
        {img}
      </Column>
      <Column border={border}>
        <WorkContent>
          <WorkType>Project</WorkType>
          <WorkTitle>{title}</WorkTitle>
          <WorkDescription>
            {description}
          </WorkDescription>
          <VisitWrapper>
            <LinkButton href={link} target={"_blank"}>Visit Site</LinkButton>
            <Tags>{tags}</Tags>
          </VisitWrapper>
        </WorkContent>
      </Column>
    </StyledContainer>
  </WorkSection>
);

const ProjectsPage = ({data, className}) => (
  <Fragment>
    <Seo title="Projects" />
      
      <WorkItem img={<StyledBackgroundSection  Tag="div" className={className} fluid={data.isophexScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"Isophex Marketing Site"} border description={"Isophex is an affordable Chicago/NYC based Website Design practice. I designed this site to feel clean and professional in order to emphasis client work. I developed the site using Zurb Foundation UI framework and deployed the solution using Netlify for Continuous Integration/Hosting."} link={"https://isophex.com"} tags={"Foundation, Netlify"}/>
      <WorkItem isReversed img={<StyledBackgroundSection Tag="div" className={className} fluid={data.heliosScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"Helios IP Main Site"} description={"Helios Intellectual Property is a services technologies company that specializes in IP management. I designed this site in Adobe XD and adopted some UI concepts from Digital Ocean. I developed the site using GatsbyJS, a react framework for making static progressive web apps. It is hosted on Netlify CI/CD."} link={"https://heliosipm.com"} tags={"Foundation, Netlify"}/>
      <WorkItem  img={<StyledBackgroundSection  Tag="div" className={className} fluid={data.insightsScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"Helios Insights Blog"}  border description={"Discover the latest in IP Law. Access featured articles, download industry research or browse our support knowledge base."} link={"https://heliosinsights.netlify.com"} tags={"GatsbyJS, Netlify"}/>
      <WorkItem isReversed img={<StyledBackgroundSection  Tag="div" className={className} fluid={data.dmsScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"The Digital Marketing School"}  description={"Helios Intellectual Property is a services technologies company that specializes in IP management."} link={"https://digitalmarketing.school"} tags={"Wordpress, S3"}/>
      <WorkItem img={<StyledBackgroundSection  Tag="div" className={className} fluid={data.onestopScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"One Stop Properties"} border description={"Find NYC industrial, commercial property management, lease, garage, storage, truck yard, repair shop, manufacturing & office space."} link={"https://stageonestop.wpengine.com"} tags={"Wordpress, WP Engine"}/>
      <WorkItem isReversed img={<StyledBackgroundSection  Tag="div" className={className} fluid={data.paintingScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"Scroll Painting"}  description={"A website that showcases water color paintings by Suvi Karjalainen."} link={"https://scrollpainting.org"} tags={"Bootstrap, PHP, MediaTemple"}/>
      <WorkItem img={<StyledBackgroundSection  Tag="div" className={className} fluid={data.mediawikiScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"Docket Engine Wiki"} border description={"Helios Intellectual Property is a services technologies company that specializes in IP management."} link={"https://www.ipdocketengine.com"} tags={"MediaWiki, MediaTemple"}/>
      <WorkItem isReversed img={<StyledBackgroundSection  Tag="div" className={className} fluid={data.tractionScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"Traction2Vision"} description={"Helping Business Leaders Get What They Want Out of Their Businesses."} link={"https://traction2vision.netlify.com"} tags={"Jekyll, Netlify"}/>
      <WorkItem img={<StyledBackgroundSection  Tag="div" className={className} fluid={data.terminalScreen.childImageSharp.fluid} backgroundColor={`#040e18`}/>} title={"Terminal Emulator"} border description={"I built a terminal ui that you can resize, collapse, and drag n drop. Try writing bash commands to it! "} link={"https://jakeschroeder.github.io"} tags={"JS, Github Pages"}/>
     
    
  </Fragment>
);


export default ProjectsPage;

export const squareImage = graphql`
  fragment bgImage on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 750) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const PageQuery = graphql`
  query {
    heliosScreen: file(relativePath: { eq: "heliosipmscreen.png" }) {
      ...bgImage
    }
    insightsScreen: file(relativePath: { eq: "heliosinsights.png" }) {
      ...bgImage
    }
    dmsScreen: file(relativePath: { eq: "dms-screen.png" }) {
      ...bgImage
    }
    onestopScreen: file(relativePath: { eq: "onestop.png" }) {
      ...bgImage
    }
    mediawikiScreen: file(relativePath: { eq: "mediawiki.png" }) {
      ...bgImage
    }
    isophexScreen: file(relativePath: { eq: "isophex.png" }) {
      ...bgImage
    }
    paintingScreen: file(relativePath: { eq: "scrollpainting.png" }) {
      ...bgImage
    }
    tractionScreen: file(relativePath: { eq: "traction2vision.png" }) {
      ...bgImage
    }
    terminalScreen: file(relativePath: { eq: "terminal.png" }) {
      ...bgImage
    }
}
`