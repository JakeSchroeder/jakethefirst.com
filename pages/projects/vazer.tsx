import { FC } from "react";

import vazer1 from "../../public/vazer1.jpg";
import vazer2 from "../../public/vazer2.jpg";
import Project from "../../components/sections/project";
import Head from "next/head";

const Vazer: FC = () => {
  return (
    <>
      <Head>
        <title>Jake Schroeder | Project Vazer | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project
        order="02/04"
        name="Vazer"
        link="https://vazer.io"
        description="A platform for building single codebase cross-platform apps completely managed in a remote
      development env."
        projectTimeline="October 2020 - Febuary 2021"
        projectType="Remote Dev"
        contributors={["Jake Schroeder", "Noah Reardon"]}
        myContribution={[
          "Concept Inception",
          "Systems Design",
          "Fullstack Engineering",
          "Marketing Site",
          "Product Research",
        ]}
        subDescription="For over 6 months my roomate and I did a complete deep dive into what makes the web, the web. My goal was
      to onboard my roomate into the world of web development and show him the ropes. In doing so we came across
      a number of difficulties and gaps of understanding regarding the tooling. Using packages like npm, node
      task runners, and other development tooling became a real struggle. We decided there should be a better
      way of doing development. Instead of relying on a local environment to match the libraries and frameworks
      make it all remote and version everything to a docker file that the library maintainers specify. Then you
      can make sure the tooling will work. Welcome to Vazer."
        images={[vazer1, vazer2]}
        nextProject="Helios IPM"
        nextProjectLink="/projects/helios"
        prevProject="Frontier Audio"
        prevProjectLink="/projects/frontier"
      />
    </>
  );
};

export default Vazer;
