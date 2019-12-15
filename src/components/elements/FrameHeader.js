import React from "react";
import styled from "styled-components";
import {
  Typography,
  Gray,
  Blue,
  Green,
  Black,
  DarkBlack,
  Container
} from "../utilities";
import Img from "gatsby-image";

import { StaticQuery, graphql, Link } from "gatsby";
import { MailIcon, PhoneIcon } from "./Icons";

// import texture from "../../images/tiny_grid.png";

import texture from "../../images/grid_noise.png";

const Header = styled.header`
  width: 100%;
  min-height: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Gray};

  background: #f7f7f7;
  background-size: 132px;
  background-image: url(${texture});

  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.09);
  z-index: 10;
`;

const StyledContainer = styled(Container)`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
`;

const HeaderTitle = styled(Link)`
  /* padding-left: 64px; */
  color: ${Blue};
  font-weight: 500;
  font-size: ${Typography.medium};
  display: block;
  font-family: ${Typography.headingFont};
  @media (max-width: 800px) {
    font-size: ${Typography.small};
  }
`;

const HeaderImg = styled(Img)`
  width: 100%;
  border: 2px solid ${Gray};
  border-radius: 50%;
  vertical-align: middle;
  transition: margin 0.2s ease;
  margin-left: 0;

  @media (min-width: 800px) {
    margin-left: ${({ isOpen }) => (isOpen ? `0` : `220px`)};
  }
`;

const HeaderImgLink = styled(Link)`
  display: inline-block;
`;

const HeaderLink = styled(Link)`
  display: block;
  width: 100%;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% / 3);
  justify-content: flex-start;
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% / 3);
  justify-content: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% / 3);
  justify-content: flex-end;
  margin-top: 6px;
`;

const StyledMenuButton = styled.button`
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
  border: 0;

  & > div > span {
    background: ${Blue};
  }

  &:hover > div > span {
    background: ${Gray};
  }
`;

const MenuButtonWrapper = styled.div`
  width: 20px;
  height: 18px;
  position: relative;
  margin-left: -24px;
`;

const Line = styled.span`
  width: 100%;
  height: 3px;

  background: ${Gray};
  border-radius: 99px;

  display: block;
  position: absolute;
  left: 0;
  transition: all 0.3s ease;

  &:nth-child(1) {
    top: ${({ isLineOpen }) => (isLineOpen ? 0 : `7px`)};
    transform: rotate(${({ isLineOpen }) => (isLineOpen ? `0` : `135deg`)});
  }

  &:nth-child(2) {
    top: 7px;
    left: ${({ isLineOpen }) => (isLineOpen ? 0 : `-20px`)};
    opacity: ${({ isLineOpen }) => (isLineOpen ? 1 : 0)};
  }

  &:nth-child(3) {
    top: ${({ isLineOpen }) => (isLineOpen ? `14px` : `7px`)};
    transform: rotate(${({ isLineOpen }) => (isLineOpen ? `0` : `-135deg`)});
  }
`;

const IconLink = styled.a`
  display: block;
  margin-left: 16px;

  & path {
    fill: ${DarkBlack};
  }

  &:hover path {
    fill: ${Black};
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const WorkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -6px;
`;

const WorkIndicator = styled.div`
  border-radius: 50%;
  height: 16px;
  width: 16px;
  background: ${Green};
  border: 1px solid white;
  box-shadow: 0px 0px 10px 1px #00ff00;
  margin-right: 8px;
  animation-name: pulse;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes pulse {
    from {
      box-shadow: 0px 0px 10px 1px #00ff00;
    }
    50% {
      box-shadow: none;
    }
    to {
      box-shadow: 0px 0px 10px 1px #00ff00;
    }
  }
`;

const WorkLink = styled(Link)`
 
  /* color: ${Black} !important; */
  font-family: ${Typography.bodyFont};
  font-weight: 400;

  &:hover {
    opacity: .8;
  }
`;

const MenuButton = ({ onClick, isOpen }) => (
  <StyledMenuButton onClick={onClick}>
    <MenuButtonWrapper>
      <Line isLineOpen={isOpen} />
      <Line isLineOpen={isOpen} />
      <Line isLineOpen={isOpen} />
    </MenuButtonWrapper>
  </StyledMenuButton>
);

const MenuText = styled.label`
  display: block;
  color: ${Blue};
  margin-left: -16px;

  /* @media(max-width: 800px) {
    display: none;
  } */
`;

const FrameHeader = ({ isMenuOpen, setMenuOpen }) => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "j-icon.png" }) {
          childImageSharp {
            fixed(width: 52, height: 52) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Header>
        <StyledContainer>
          <HeaderWrapper>
            <HeaderLeft>
              <MenuButton id="menu" onClick={setMenuOpen} isOpen={isMenuOpen} />
              <MenuText htmlFor="menu">Menu</MenuText>
            </HeaderLeft>

            <HeaderCenter>
              {/* <HeaderTitle to={"/"}>Jake Schroeder</HeaderTitle> */}
              <HeaderImgLink to={"/"}>
                <HeaderImg
                  isOpen={isMenuOpen}
                  fixed={data.imageOne.childImageSharp.fixed}
                  alt={"a pic of jake's face"}
                />
              </HeaderImgLink>
            </HeaderCenter>

            <HeaderRight>
              <WorkWrapper>
                <WorkIndicator />
                <WorkLink to={"/contact/"}>Hire Me</WorkLink>
              </WorkWrapper>

              {/* <IconLink href={"tel:1-630-880-2317"}>
                  <PhoneIcon />
                </IconLink>

                <IconLink href={"mailto:jake.schroeder@isophex.com"}>
                  <MailIcon />
                </IconLink> */}
            </HeaderRight>
          </HeaderWrapper>
        </StyledContainer>
      </Header>
    )}
  />
);

export default FrameHeader;
