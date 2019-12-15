import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import { Gray, Sizes } from "../components/utilities";

import FrameHeader from "../components/elements/FrameHeader";
import FrameSidebar from "../components/elements/FrameSidebar";

import GlobalStyle from "../components/utilities/Global";

const FrameWrapper = styled.div`
  
  /* padding: ${Sizes.xlarge} ${Sizes.xxlarge}; */
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
  height: 100%;
  width: 100%;
  background: #fff;

  /* border: 1px solid ${Gray}; */

  /* box-shadow: 0px 3px 12px rgba(0,0,0,.18); */
  
  @media (max-width: 800px) {
    /* min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%; */

  }
`;

const FlexWrapper = styled.div`
  width: calc(100% + 220px);
  height: calc(100% - 80px);
  display: flex;
`;

const MainContent = styled.main`
  width: 100%;
  height: 100%;

  transition: all 0.2s ease;
  transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? `-220px` : `0`)});

  overflow-y: auto;

  @media (min-width: 800px) {
    margin-right: ${({ isMenuOpen }) => (isMenuOpen ? 0 : `220px`)};
  }
`;

const Layout = ({ children }) => {
  const [isMenuToggled, setMenuToggle] = useState(true);
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
  );
};

export default Layout;
