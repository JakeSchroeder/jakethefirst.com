import Head from "next/head";
import { FC } from "react";
import Project from "../../components/sections/project";
import isophex1 from "../../public/isophex1.jpg";
import isophex2 from "../../public/isophex2.jpg";

const Isophex: FC = () => {
  return (
    <>
      <Head>
        <title>Jake Schroeder | Project Isophex | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project
        order="04/04"
        name="Isophex"
        link="https://isophex.com"
        description="Digital Studio Based in New York, New York and Chicago, IL Design, Working to solve your problems with creative design solutions."
        projectTimeline="March 2017 - April 2018"
        projectType="Freelance, Web and App Development"
        contributors={["Jake Schroeder", "Sam Bartlett", "Thomas Maloney"]}
        myContribution={[
          "Business Development",
          "Client Outreach",
          "Fullstack Engineering",
          "Marketing Site",
          "Product Research",
        ]}
        subDescription={[
          "Design is the foundation of a company’s or person's digital identity. Whether that be their logo, website, or social media presence; all incorporate fundamentals of design. When developing or extending a client’s digital identity its vital that we understand the individuals or company’s vision and brand.",
        ]}
        images={[isophex2, isophex1]}
        nextProject="Vazer"
        nextProjectLink="/projects/vazer"
        prevProject="Helios"
        prevProjectLink="/projects/helios"
      />
    </>
  );
};

export default Isophex;
