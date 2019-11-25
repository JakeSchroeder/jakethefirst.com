import React from "react";
import { Link } from 'gatsby';

import styled from "styled-components";

import { Typography, Gray, Blue, Black } from "../utilities";

import {BitBucketIcon, LinkedInIcon, DownloadIcon} from "./Icons";

import Resume from "../../static/jake.schroeder-resume.pdf";



const Sidebar = styled.aside`

  max-width: 220px;
  width: 100%;
  height: 100%;

  border-right: 1px solid ${Gray};
  background-color: #f8fafc;
  border-bottom-left-radius: 6px;
  transition: all .2s ease;
  
  transform: translateX(${({isOpen}) => (isOpen? `-140px` : `0`)});
  visibility: ${({isOpen}) => (isOpen? `hidden` : `visible`)};

`;

const Nav = styled.nav`
  height: 100%;
  margin: 0;
`;

const NavList = styled.ul`
  height: 100%;
  padding-top: 26px;
  overflow-y: auto;
`;

const NavWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Social = styled.div`
  width: 100%;
  border-top: 1px solid ${Gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
`;

const SocialLink = styled.a`
  width: 50%;
  height: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  background: none;
  transition: all .5s ease;

  &:first-child {
    border-right: 1px solid ${Gray};
  }

  &:hover {

    & > svg {
      transform: scale(1.3);
      transition: all .5s ease;
    }

  }
`;

const NavItem = styled.li`
  margin-bottom: 0;
  padding: 8px 16px 8px 64px;

  width: 100%;

  
  &:hover > span {
    width: 100%;
  }
  
`;

const StyledLink = styled(Link).attrs({
    activeClassName: 'active',
  })`

  &.disabled {
    text-decoration: line-through;
    pointer-events: none;

  &:hover {
    color: ${Black};
  }


  }

  color: inherit;
  font-family: ${Typography.headingFont};
  font-weight: 500;

  &:visited {
    color: inherit;
  }
 
  &:hover {
    color: ${Blue};
  }
  
  &.active {
    color: ${Blue};
    position: relative;

    
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      background: ${Blue};
      display: block;
      position: absolute;
      bottom: -3px;
      border-radius: 2px;
    }
    
  }
`;

// const Download = styled.div`
//   display: inline-block;
//   position: absolute;
 
//   right: -10px;
//   top: -10px;

//   margin-left: 4px;
//   transform: rotate(90deg) scale(1);
// `;

const ResumeDownload = styled.a`
  color: inherit;
  position: relative;
  font-family: ${Typography.headingFont};
  font-weight: 500;
  width: 100%;
  &:hover {
    color: ${Blue};
  }
`;

const FrameSidebar = ({ isMenuOpen }) => (
    <Sidebar isOpen={isMenuOpen}>
        <Nav>
          <NavWrapper>
            <NavList>
              <NavItem><StyledLink activeClassName="active" to={'/'}>Me</StyledLink></NavItem>
              <NavItem><StyledLink activeClassName="active" to={'/projects/'}>Projects</StyledLink></NavItem>
              <NavItem><ResumeDownload href={Resume} target={"_blank"}>Resume</ResumeDownload></NavItem>
              <NavItem><StyledLink activeClassName="active" to={'/education/'}>Education</StyledLink></NavItem>
              {/* <NavItem><StyledLink className="disabled" disabled={true} to={'/blog'}>Ideas</StyledLink></NavItem> */}
              <NavItem><StyledLink activeClassName="active" to={'/contact/'}>Contact</StyledLink></NavItem>
            </NavList>

            <Social>
              <SocialLink href={"https://bitbucket.org/%7B78c8aadb-c136-4a0d-974a-6bbdd7f792fa%7D/"} rel={"nofollow"} target={"_blank"}>
                <BitBucketIcon/>
              </SocialLink>
              <SocialLink href={"https://www.linkedin.com/in/jake-schroeder/"} rel={"nofollow"} target={"_blank"}>
                <LinkedInIcon/>
              </SocialLink>
            </Social>
          </NavWrapper>
        </Nav>
      </Sidebar>
);

export default FrameSidebar;