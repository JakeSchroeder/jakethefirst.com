import {
  Box,
  Container,
  Fade,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  List,
  ListItem,
  SlideFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Header from "../components/navigation/header";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { TypewriterProps } from "react-simple-typewriter/dist/Hooks/useTypewriter";

const TitleSection: FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { text, count } = useTypewriter({
    words: ["Inspiration.", "Creativity.", "Abstraction.", "Life."],
    loop: false,
    cursor: true,
    delaySpeed: 1500,
    deleteSpeed: 100,
    typeSpeed: 140,
  } as TypewriterProps);

  useEffect(() => {
    requestAnimationFrame(() => {
      onToggle();
    });
  }, []);

  return (
    <Flex borderBottom="1px solid" borderColor="border" display={{ base: "none", sm: "flex" }}>
      <Heading
        color="#3A3A3A"
        display="flex"
        as="h1"
        fontSize={{ base: "14vw", sm: "7vw", mid: "105px" }}
        py={{ base: "8", mid: "6vh" }}
        fontWeight="black"
      >
        <SlideFade in={isOpen} offsetY="20px">
          Powered by&nbsp;
        </SlideFade>
        <SlideFade
          in={isOpen}
          offsetY="20px"
          transition={{
            enter: {
              delay: 0.5,
            },
          }}
        >
          <Typewriter
            words={["Inspiration.", "Creativity.", "Abstraction.", "Code."]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={140}
            deleteSpeed={100}
            delaySpeed={1500}
          />
        </SlideFade>
      </Heading>
    </Flex>
  );
};

const AboutSection: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    requestAnimationFrame(() => {
      onToggle();
    });
  }, []);

  return (
    <Grid
      py={{ base: "8", mid: "6vh" }}
      templateColumns={{ base: "1fr 1fr", mid: "1.35fr 1fr 1fr" }}
      borderBottom="1px solid"
      borderColor="border"
      alignItems="center"
    >
      <GridItem rowSpan={{ base: 1, md: 2, mid: 1 }} colSpan={{ base: 2, md: 1, mid: 1 }} pb={{ base: "8", md: "0" }}>
        <SlideFade in={isOpen} offsetY="20px">
          <Heading
            as="h2"
            fontSize={{ base: "8vw", sm: "2xl" }}
            fontWeight={{ base: "black", sm: "medium" }}
            lineHeight="1.3"
          >
            <Flex flexDirection={{ base: "column", lg: "row" }}>
              <Text>UX Designer</Text>
              <Text px="2" display={{ base: "none", lg: "block" }}>
                {" "}
                /{" "}
              </Text>
              <Text>Software Engineer</Text>
            </Flex>
          </Heading>
        </SlideFade>
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1, mid: 1 }} display="flex" alignItems="center">
        <SlideFade in={isOpen} offsetY="20px">
          <Heading as="h2" fontSize={{ base: "md" }} fontWeight="medium" textAlign="left">
            Seeking Employment
          </Heading>
        </SlideFade>
        <SlideFade in={isOpen} offsetY="20px">
          <Text
            display={{ base: "block", mid: "block" }}
            pl="2"
            color="brand"
            fontWeight="medium"
            textDecoration="underline"
            fontSize="md"
            textAlign="left"
          >
            <Link href="/about">Contact</Link>
          </Text>
        </SlideFade>
      </GridItem>

      <GridItem colSpan={{ base: 2, md: 1, mid: 1 }} display="flex" alignItems="center" pt={{ base: "4", sm: "0" }}>
        <SlideFade in={isOpen} offsetY="20px">
          <Heading as="h2" fontSize={{ base: "md" }} fontWeight="medium" textAlign="left">
            &quot;Theoretical +
            <Box display={{ base: "none", mid: "none" }}>
              <br />
            </Box>{" "}
            Pragmatic&quot;
          </Heading>
        </SlideFade>
        <SlideFade in={isOpen} offsetY="20px">
          <Text
            display={{ base: "block", mid: "block" }}
            pl="2"
            color="brand"
            fontWeight="medium"
            textDecoration="underline"
            fontSize="md"
            textAlign="left"
          >
            <Link href="/about">About</Link>
          </Text>
        </SlideFade>
      </GridItem>
    </Grid>
  );
};

const DescriptionSection: FC = () => {
  return (
    <Grid
      gap={{ base: "0", mid: "5%" }}
      templateColumns={{ base: "1fr", mid: "1.3fr  1fr 1fr" }}
      py={{ base: "8", mid: "6vh" }}
      borderBottom="1px solid"
      borderColor="border"
    >
      <GridItem borderBottom={{ base: "1px solid", mid: "0" }} borderColor="border" pb={{ base: "8", mid: "0" }}>
        <Text>
          I’m Jake, passionate about bringing together leading UX Design and effective Frontend Development to deliver
          highly usable and pragmatic solutions. I am constantly working to improve my skills by exploring the latest
          design trends, frameworks and technologies. My strength is in understanding business requirements and
          translating them into well designed, valuable solutions with practical functionality, communicating
          professionalism and a unique modern aesthetic that is both exciting and usable. With strong interpersonal
          instincts, I enjoy working closely with business owners to fully.
        </Text>
      </GridItem>
      <GridItem colSpan={2} pt={{ base: "8", mid: "0" }}>
        <HStack w="100%" alignItems="center">
          <Heading as="h2" fontSize={{ base: "md" }} fontWeight="medium">
            My Stack
          </Heading>
          <Text color="brand" fontWeight="medium" textDecoration="underline" fontSize="md" pl="2">
            <Link href="/contact">Projects</Link>
          </Text>
        </HStack>
        <Grid pt="8" gap="8" templateColumns={{ base: "1fr 1fr", sm: "1fr 1fr 1fr 1fr", md: "1fr 1fr 1fr 1fr" }}>
          <GridItem>
            <List>
              <ListItem> Figma</ListItem>
              <ListItem>Framer</ListItem>
              <ListItem>Adobe XD</ListItem>
              <ListItem>Photoshop</ListItem>
              <ListItem>Illustrator</ListItem>
              <ListItem>After Effects</ListItem>
            </List>
          </GridItem>
          <GridItem>
            <List>
              <ListItem>Typescript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Node</ListItem>
              <ListItem>Next</ListItem>
              <ListItem>Vercel</ListItem>
              <ListItem>PlanetScale</ListItem>
            </List>
          </GridItem>
          <GridItem>
            <List>
              <ListItem>C#</ListItem>
              <ListItem>Unity 3D</ListItem>
              <ListItem>Unreal</ListItem>
              <ListItem>Cinema 4D</ListItem>
              <ListItem>Blender</ListItem>
              <ListItem>Anim</ListItem>
            </List>
          </GridItem>
          <GridItem>
            <List>
              <ListItem>AWS</ListItem>
              <ListItem>API Gateway</ListItem>
              <ListItem>Lambda</ListItem>
              <ListItem>DynamoDB</ListItem>
              <ListItem>Cloudfront</ListItem>
              <ListItem>Route 53</ListItem>
            </List>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

const Footer: FC = () => {
  return (
    <Flex
      py="6vh"
      w="100%"
      flexDir={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      color="blackAlpha.500"
    >
      <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
        Copyright © 2022 Jake Schroeder. All Rights Reserved.
      </Text>
      <Text fontSize="sm" display={{ base: "none", md: "block" }}>
        jakeschroeder.me
      </Text>
    </Flex>
  );
};

const Home: NextPage = () => {
  return (
    <Container maxW="1440px" h="100%" px={{ base: "4", sm: "10" }}>
      <Head>
        <title>Jake Schroeder | Home | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TitleSection />
      <AboutSection />
      <DescriptionSection />
      <Footer />
    </Container>
  );
};

export default Home;
