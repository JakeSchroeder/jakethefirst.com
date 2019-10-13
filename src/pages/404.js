import React, {Fragment} from "react";
import {Link} from "gatsby";

import Global from "../components/utilities/Global";
import styled from "styled-components";

import Seo from "../components/utilities/Seo";


const Section = styled.div`
  padding: 32px;
`;

const NotFoundPage = () => (
  <Fragment>
    <Global/>
    
      <Seo title="404: Not found" />
      <Section>
        <h1>God Dangit, I guess that page ain't there!</h1>
        <p>It seems you hit a route that doesn&#39;t exist... the sadness :'(</p>
        <Link to={"/"}>Go Home</Link>
      </Section>
  
  </Fragment>
)

export default NotFoundPage;
