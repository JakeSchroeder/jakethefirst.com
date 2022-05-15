import { Center } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";

const Custom404: FC = () => {
  return (
    <>
      <Head>
        <title>Jake Schroeder | 404 | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
      </Head>
      <Center>404 – Whoops I dont think I built this yet 0_o</Center>;
    </>
  );
};

export default Custom404;
