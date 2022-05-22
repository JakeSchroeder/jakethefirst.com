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
          "Frontier Audio began as a fever dream (but in a good way) in the wake of the NFT and Metaverse push. I remember hearing about the idea of cryptographic tokens tied to unique artwork ensured by the blockchain as a sort of digital autograph. At first, I thought this was a neat idea, but I was not sold on the concept. How does the artist ensure the copyright is maintained… oh wait there is no ability to do so? Quickly I boiled NFTs and the Metaverse down to the somewhat fundamental concept of digital media that’s backed by social interest and sovereign principles. Like the stock market, NFTs give the individual the ability to invest in an asset they deem to have worth and take a chance that worth will increase over time. To me this didn’t make sense when applied to a .JPG file sitting on someone’s hard drive. Especially when that .JPG is also accessible to anyone anywhere for free. It only makes sense if owning that .JPG gives you access to other content via the creator (hence the adaptation of the “airdrop” (a mechanism NFTs creator use to sustain interest and value to their NFT holders and brand.))",
          "Visual art is hard to make exclusive especially in the digital realm. Someone can always take a picture; someone can always copy it and send it around… etc There are other mediums NFTs can add value. Music. Music is different than visual art. Millions and millions, shit even billions of people listen to music every day. Music taps into a purely human mechanism for appreciation and emotional fortitude, it has a way of making the present more in tune… pardon the expression. It’s no coincidence the top trending artists of 2022 have billions of streams on popular platforms such as Spotify, and Apple Music.",
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
