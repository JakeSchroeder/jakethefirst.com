import { Container, VisuallyHidden } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/navigation/header";
import TitleSection from "../components/sections/title";
import AboutSection from "../components/sections/about";
import DescriptionSection from "../components/sections/description";
import Footer from "../components/navigation/footer";
import { useEffect, useState } from "react";
import Cursor from "../components/navigation/cursor";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jake Schroeder | Home | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />
      <TitleSection />
      <AboutSection />
      <DescriptionSection />
    </>
  );
};

export default Home;
