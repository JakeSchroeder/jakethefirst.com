import React from "react";
import styled from "styled-components";
import { Gray } from "./Colors";

export const Sizes = {
  paddingThing: 12,
  tiny: '6px',
  small: '8px',
  mid: '16px',
  large: '32px',
  xlarge: '64px',
  xxlarge: '80px'
}

export const Section = styled.section`
  padding-top: ${({paddingTop}) => (paddingTop)};
  padding-bottom: ${({paddingBottom}) => (paddingBottom)};
  padding-right: ${({paddingRight}) => (paddingRight)};
  padding-left: ${({paddingLeft}) => (paddingLeft)};

  text-align: center;
  border-bottom: ${({border}) => (border) ? `1px solid ${Gray}` : `0`};

  @media (max-width: 800px) {
    padding: ${Sizes.large};
  }
`;


export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

`;
