import React, { Fragment, useState } from "react";
import { graphql } from "gatsby";

import Img from "gatsby-image";
// import Layout from "../components/Layout";
import Seo from "../components/utilities/Seo";

import styled from "styled-components";

import { Gray, Blue, Black, Container } from "../components/utilities";

import { LinkButton } from "../components/elements/Button";
//import { filter } from "minimatch";
	

const FilterSection = styled.section`
  text-align: center;
  padding: 32px 64px;
  /* border-bottom: 1px solid ${Gray}; */

  @media (max-width: 800px) {
    padding: 32px;
  }
  
`;


const CVList = styled.ul`
	padding: 0;
	margin: 0;
	height: 100%;
`;

const StyledCVItem = styled.li`
	
	padding: 32px 64px;
	border-bottom: 1px solid ${Gray};
	margin: 0;
	height: calc(100% / 5);
	width: 100%;

	@media (max-width: 800px) {
    height: auto;
  }

	@media (max-height: 800px) {
    height: auto;
  }


`;

const StyledContainer = styled(Container)`
height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 800px) {
		flex-direction: column;
		justify-content: center;
		height: auto;
  	} 
`;

const CVIcon = styled(Img)`
	border-radius: 50%;
	margin-right: 16px;
	height: 64px;
	width: 64px;
	margin-bottom: 0;
	display: block;


	@media (max-width: 800px) {
		margin-bottom: 16px;
    margin-right: 0;
  	}
`;

const CVSubTitle = styled.h4`
	color: ${Blue};
	margin-bottom: 8px;
	font-weight: 500;
`;

const CVTitle = styled.h2`
	font-weight: 600;
`;

const CVDate = styled.p`
	margin-top: 8px;
	color: ${Black};


	@media (max-width: 800px) {
		padding-bottom: 16px;
  	}

`;

const FLexWrapper = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 800px) {
		flex-direction: column;
		justify-content: center;
  	}
`;

const ContentWrapper = styled.div`

	@media (max-width: 800px) {
		text-align: center;
  	}
`;


const CVItem = ({ image, subTitle, title, date, link, buttonText }) => (
	
	<StyledCVItem>
		<StyledContainer>
		<FLexWrapper>
			{image}

			<ContentWrapper>
				<CVSubTitle>{subTitle}</CVSubTitle>
				<CVTitle>{title}</CVTitle>
				<CVDate>{date}</CVDate>
			</ContentWrapper>

		</FLexWrapper>

		<LinkButton className={"linkedButton"} href={link} target={"_blank"}>{buttonText}</LinkButton>
		</StyledContainer>	
	</StyledCVItem> 
);


const EducationPage = ({data}) => {

	const [filterTerm, setfilterTerm] = useState({value: 'All'});

	

	console.log(filterTerm);

	// const handleChange = (event) => {
  //   setfilterTerm((event)=> { value: event.target.value});
  // }


	return (
		<Fragment>
			<Seo title="Education" />
		
				{/* <FilterSection>
					<select value={filterTerm.value}>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option selected value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</FilterSection> */}

				<CVList>
			
					<CVItem date={"09.12.18 - Current"} image={<CVIcon fixed={data.depaulImage.childImageSharp.fixed} alt={"Depaul University icon"}/>} subTitle={"DePaul University"} title={"User Experience Design"} link={"https://www.cdm.depaul.edu/academics/Pages/BS-In-User-Experience-Design.aspx"} buttonText={"See Major"} />
					<CVItem date={"Completed 08.16.17"} image={<CVIcon fixed={data.parsonsImage.childImageSharp.fixed} alt={"the new school icon"}/>} subTitle={"Parsons School of Design"} title={"Design and Technology"} link={"https://www.newschool.edu/parsons/bfa-design-technology/"} buttonText={"See Major"} />
					<CVItem date={"Completed 01.12.17"} image={<CVIcon fixed={data.udemyImage.childImageSharp.fixed} alt={"udemy icon"}/>} subTitle={"Udemy"} title={"Become an Android Developer"} link={"https://www.udemy.com/course/become-an-android-developer-from-scratch/?xref=one_sided_share"} buttonText={"See Course"} />
					<CVItem date={"Completed 12.15.16"} image={<CVIcon fixed={data.treehouseImage.childImageSharp.fixed} alt={"treehouse icon"}/>} subTitle={"Treehouse"} title={"JavaScript and the DOM"} link={"https://teamtreehouse.com/jakeschroeder"} buttonText={"See Course"} />
					<CVItem date={"Completed 12.06.16"} image={<CVIcon fixed={data.skillshareImage.childImageSharp.fixed} alt={"skill share icon"}/>} subTitle={"Skill Share"} title={"Creating Pictograms with Purpose"} link={"https://skl.sh/2Hkm4BN"} buttonText={"See Course"} />
					<CVItem date={"Completed 11.18.16"} image={<CVIcon fixed={data.treehouseImage.childImageSharp.fixed} alt={"treehouse icon"}/>} subTitle={"Treehouse"} title={"CSS Flex-box Layout"} link={"https://teamtreehouse.com/jakeschroeder"} buttonText={"See Course"} />
					<CVItem date={"Completed 11.02.16"} image={<CVIcon fixed={data.treehouseImage.childImageSharp.fixed} alt={"treehouse icon"}/>} subTitle={"Treehouse"} title={"CSS Transitions and Transforms"} link={"https://teamtreehouse.com/jakeschroeder"} buttonText={"See Course"} />
					<CVItem date={"Completed 01.07.16"} image={<CVIcon fixed={data.skillshareImage.childImageSharp.fixed} alt={"skill share icon"}/>} subTitle={"Skill Share"} title={"Develop a Custom Logotype"} link={"https://skl.sh/2Ns4dgb"} buttonText={"See Course"} />
					<CVItem date={"Completed 06.10.15"} image={<CVIcon fixed={data.psImage.childImageSharp.fixed} alt={"plural sight icon"}/>} subTitle={"PluralSight"} title={"Frontend Mastery"} link={"https://www.pluralsight.com/courses/advanced-javascript"} buttonText={"See Course"} />
					<CVItem date={"Completed 06.12.15"} image={<CVIcon fixed={data.treehouseImage.childImageSharp.fixed} alt={"treehouse icon"}/>} subTitle={"Treehouse"} title={"DOM Scripting By Example"} link={"https://teamtreehouse.com/jakeschroeder"} buttonText={"See Course"} />
					<CVItem date={"Completed 11.16.14"} image={<CVIcon fixed={data.psImage.childImageSharp.fixed} alt={"plural sight icon"}/>} subTitle={"PluralSight"} title={"Bootstrap 3"} link={"https://www.pluralsight.com/courses/bootstrap-3"} buttonText={"See Course"} />
					<CVItem date={"Completed 03.09.14"} image={<CVIcon fixed={data.psImage.childImageSharp.fixed} alt={"plural sight icon"}/>} subTitle={"PluralSight"} title={"A Better CSS: LESS and SASS"} link={"https://www.pluralsight.com/courses/better-css"} buttonText={"See Course"} />
			
				</CVList>
			
		</Fragment>
	)
};

export default EducationPage;

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    parsonsImage: file(relativePath: { eq: "tns.jpg" }) {
      ...squareImage
    }
    psImage: file(relativePath: { eq: "pluralsight.jpg" }) {
      ...squareImage
    }
    depaulImage: file(relativePath: { eq: "depaul.jpeg" }) {
      ...squareImage
    }
    treehouseImage: file(relativePath: { eq: "treehouse.png" }) {
      ...squareImage
		}
		skillshareImage: file(relativePath: { eq: "skillshare.png" }) {
      ...squareImage
		}
		udemyImage: file(relativePath: { eq: "udemy.jpg" }) {
      ...squareImage
    }
}
`

