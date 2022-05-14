import type { NextPage } from "next";
import Head from "next/head";
import TitleSection from "../components/sections/title";
import Subtitle from "../components/sections/subtitle";
import DescriptionSection from "../components/sections/description";
import Cursor from "../components/navigation/cursor";
import { Box, VStack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box w="100%">
      <Head>
        <title>Jake Schroeder | Home | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />
      <TitleSection />
      <Subtitle />
      <DescriptionSection />
    </Box>
  );
};

export default Home;
