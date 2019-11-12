import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import { Gray, Sizes } from "../components/utilities";

import FrameHeader from "../components/elements/FrameHeader";
import FrameSidebar from "../components/elements/FrameSidebar"

import GlobalStyle from "../components/utilities/Global";

import { useMediaPredicate } from "react-media-hook";

const FrameWrapper = styled.div`
  padding: ${Sizes.xlarge} ${Sizes.xxlarge};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    padding: 0;
  
  }

`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* min-width: 1000px;
  max-width: 1000px;
  min-height: 700px;
  max-height: 700px; */
  height: 100%;
  width: 100%;
  background: #fff;
  max-width: 1600px;
  
  border-radius: 12px;
  box-shadow: 0px 3px 12px rgba(0,0,0,.18);
  
  @media (max-width: 800px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;

const FlexWrapper = styled.div`
  width: calc(100% + 160px);
  height: calc(100% - 48px);
  display: flex;

`;

const MainContent = styled.main`
    width: 100%;
    height: 100%;

    transition: all .2s ease;
    transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? `-160px` : `0`)});

    overflow-y: auto;
    
    
    @media (min-width: 800px) {
      margin-right: ${({ isMenuOpen }) => (isMenuOpen ? 0 : `160px`)};
    }
    
`;



const Layout = ({ children }) => {

  const isMobile = useMediaPredicate("(max-width: 800px)");

  const [isMenuToggled, setMenuToggle] = useState(isMobile);
  const toggleMenu = () => setMenuToggle(!isMenuToggled);

  

  return (
    <>
      <GlobalStyle />
        <FrameWrapper>
          <Frame>
            <FrameHeader isMenuOpen={isMenuToggled} setMenuOpen={toggleMenu} />
            <FlexWrapper>
              <FrameSidebar isMenuOpen={isMenuToggled} />
              <MainContent id="main-content" isMenuOpen={isMenuToggled}>
             
                  {children}
               
              </MainContent>
            </FlexWrapper>
          </Frame>
        </FrameWrapper>
    </>
  )

};

export default Layout;











