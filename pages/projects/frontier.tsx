import Head from "next/head";
import { FC } from "react";
import Project from "../../components/sections/project";
import frontier1 from "../../public/frontier1.jpg";
import frontier2 from "../../public/frontier2.jpg";

const Frontier: FC = () => {
  return (
    <>
      <Head>
        <title>Jake Schroeder | Project Frontier | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Project
        order="01/04"
        name="Frontier"
        link="https://frontier.audio"
        description="The Next-Gen NFT music player. Import & Manage Your Collection. Experience Next-Gen NFT Playback. Discover and Publish NFTs on OpenSea"
        projectTimeline="November 2021 - Current"
        projectType="Web3"
        contributors={["Jake Schroeder", "Fabio Batti"]}
        myContribution={[
          "Concept Inception",
          "Systems Design",
          "Fullstack Engineering",
          "Desktop Engineering",
          "Marketing Site",
          "Product Research",
        ]}
        subDescription={[
          "What if a music artist could bypass the current mechanism for publishing music and streaming services, handling all of it themselves with the assistance of a smart system? What if a music lover could invest in that artist’s music like a stock, utilizing the blockchain and smart contracts to reconcile streaming royalty contracts?  Playing directly into the fundamentals of NFTs, crypto, and web3 Frontier Audio would be a way for artists to own their work product, get needed investment, gain revenue over time, and maintain transparency of contracts. No record label, no BS lawyers, no one to screw you over on what is yours… only opportunities as risky or safe as you deem worthwhile.",
          "The concept begins with an NFT studio (currently under development as Frontier Audio Studio) where NFT creators (music artists, and visual artists) come together to create next-gen interactive digital vinyls. These can be thought of as real life vinyls but digital in which an artist creates and then adds their media (.mp3s, .wavs, .FLAC, .JPG, .MOV, .GIF)",
        ]}
        images={[frontier1, frontier2]}
        nextProject="Vazer"
        nextProjectLink="/projects/vazer"
        prevProject="Isophex"
        prevProjectLink="/projects/isophex"
      />
    </>
  );
};

export default Frontier;
