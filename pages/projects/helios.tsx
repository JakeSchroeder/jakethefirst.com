import { FC } from "react";
import Project from "../../components/sections/project";

import frontier1 from "../../public/frontier1.jpg";
import frontier2 from "../../public/frontier2.jpg";

const Helios: FC = () => {
  return (
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
      subDescription="For over 6 months my roomate and I did a complete deep dive into what makes the web, the web. My goal was
to onboard my roomate into the world of web development and show him the ropes. In doing so we came across
a number of difficulties and gaps of understanding regarding the tooling. Using packages like npm, node
task runners, and other development tooling became a real struggle. We decided there should be a better
way of doing development. Instead of relying on a local environment to match the libraries and frameworks
make it all remote and version everything to a docker file that the library maintainers specify. Then you
can make sure the tooling will work. Welcome to Vazer."
      images={[frontier1, frontier2]}
      nextProject="Vazer"
      nextProjectLink="/projects/vazer"
      prevProject="Isophex"
      prevProjectLink="/projects/isophex"
    />
  );
};
