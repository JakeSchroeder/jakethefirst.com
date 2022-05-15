import Head from "next/head";
import { FC } from "react";
import Project from "../../components/sections/project";

import helios1 from "../../public/helios1.jpg";
import helios2 from "../../public/helios2.jpg";
import helios3 from "../../public/helios3.jpg";
import helios4 from "../../public/helios4.jpg";

const Helios: FC = () => {
  return (
    <>
      <Head>
        <title>Jake Schroeder | Project Helios | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project
        order="03/04"
        name="Helios"
        link="https://heliosip.com"
        description="At Last— A Real​ IP Operations​ SaaS Solution. Increase quality, improve efficiency, reduce costs. Industry leading SaaS platform integrated with expert global IP support services.​"
        projectTimeline="August 2016 - 2018"
        projectType="Consulting"
        contributors={["Jake Schroeder"]}
        myContribution={["Graphic Design", "Fullstack Engineering", "Marketing Site", "Product Research"]}
        subDescription="Increase quality, improve efficiency, reduce costs. Industry leading SaaS platform integrated with expert global IP support services. Docketing, filing, maintenance and portfolio analytics in a monthly subscription."
        images={[helios1, helios2, helios3, helios4]}
        nextProject="Isophex"
        nextProjectLink="/projects/isophex"
        prevProject="Vazer"
        prevProjectLink="/projects/vazer"
      />
    </>
  );
};

export default Helios;
