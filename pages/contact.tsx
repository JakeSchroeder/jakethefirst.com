import { Center, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { FC, useEffect, useRef } from "react";
import Cursor from "../components/navigation/cursor";

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Jake Schroeder | Contact | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
      </Head>
      <Cursor />
      <Center>
        <Heading
          fontSize={{ base: "4.9vw", mid: "90px" }}
          as="h1"
          fontWeight="black"
          textDecoration="underline"
          _hover={{ color: "brand" }}
        >
          <a href="mailto:jake.schroeder001@gmail.com">jake.schroeder001@gmail.com</a>
        </Heading>
      </Center>
    </>
  );
};

export default Contact;
