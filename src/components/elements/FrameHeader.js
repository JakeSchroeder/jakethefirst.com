import React from "react";
import styled from "styled-components";
import { Typography, Gray, Blue, Green, Black } from "../utilities";


import { Link } from "gatsby";
import { MailIcon, PhoneIcon } from "./Icons";

import texture from "../../images/funky-lines.png";



const Header = styled.header`
  width: 100%;
  height: 48px;
  background: #f7f7f7;
  border-bottom: 1px solid ${Gray};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-size: 12px;
  background-image: url(${texture});

  box-shadow: 0 3px 3px rgba(0,0,0,.11);
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 0 16px;
`;

const HeaderTitle = styled(Link)`
  color: ${Blue};
  font-weight: 500;
  font-size: ${Typography.medium};
  display: block;
  font-family: ${Typography.bodyFont};

  @media (max-width: 800px) {
    font-size: ${Typography.small};
  }

`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 6px;
`;

const StyledMenuButton = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
 
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
`;

const Line = styled.span`
  
  width: 100%;
  height: 3px;
  
  background: ${Gray};
  border-radius: 99px;
  
  display: block;
  position: absolute;
  left: 0;
  transition: all .3s ease;
  
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
    top: ${({ isLineOpen }) => (isLineOpen ? `14px` : `7px`)};;
    transform: rotate(${({ isLineOpen }) => (isLineOpen ? `0` : `-135deg`)});
   }
  
`;

const IconLink = styled.a`
  display: block;
  margin-left: 16px;

  &:hover path {
    fill: ${Black};
  }
  
`;

const WorkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -6px;
  
  @media (max-width: 800px) {
    display: none;
  }
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
    from { box-shadow: 0px 0px 10px 1px #00ff00; }
    50% { box-shadow: none }
    to { box-shadow: 0px 0px 10px 1px #00ff00; }
  }

`;

const WorkLink = styled(Link)`
  font-size: ${Typography.small};
  color: ${Black} !important;
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


const FrameHeader = ({ isMenuOpen, setMenuOpen }) => (
    <Header>
      <HeaderWrapper>
        <HeaderLeft>
            <MenuButton onClick={setMenuOpen} isOpen={isMenuOpen} />
          <HeaderTitle to={"/"}>Jake Schroeder</HeaderTitle>
        </HeaderLeft>

        <HeaderRight>

          <WorkWrapper>
            <WorkIndicator />
            <WorkLink to={"/contact/"}>Hire Me</WorkLink>
          </WorkWrapper>

          <IconLink href={"tel:1-630-880-2317"}>
            <PhoneIcon />
          </IconLink>

          <IconLink href={"mailto:jake.schroeder@isophex.com"}>
            <MailIcon />
          </IconLink>

        </HeaderRight>
      </HeaderWrapper>
    </Header>
);

export default FrameHeader;
