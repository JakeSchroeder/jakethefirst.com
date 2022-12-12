import { Box, Flex, Grid, GridItem, Heading, HStack, SlideFade, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import picSrc from "../public/swiss.jpeg";
import Cursor from "../components/navigation/cursor";
import Head from "next/head";

const arrow = (
  <svg width="20" height="20" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.98887e-06 29.25L39.65 29.25L21.45 47.45L26 52L52 26L26 -2.27299e-06L21.45 4.55L39.65 22.75L2.55712e-06 22.75L1.98887e-06 29.25Z"
      fill="black"
    ></path>
  </svg>
);

interface ExperienceItemProps {
  position: string;
  company: string;
  start: string;
  end: string;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ position, company, start, end }) => {
  return (
    <HStack mt="0 !important" w="100%" justifyContent="space-between" py="6" borderBottom="1px" borderColor="border">
      <VStack alignItems="flex-start">
        <Heading as="h3" fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
          {position}
        </Heading>
        <Heading as="h4" fontSize={{ base: "sm", md: "md" }} fontWeight="normal">
          {company}
        </Heading>
      </VStack>
      <HStack spacing="4">
        <Heading as="h4" fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
          {start}
        </Heading>
        {arrow}
        <Heading as="h4" fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
          {end}
        </Heading>
      </HStack>
    </HStack>
  );
};

const About: FC = () => {
  return (
    <>
      <Head>
        <title>Jake Schroeder | About | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
      </Head>
      <Cursor />
      <Grid gap={{ base: 0, md: "12", xl: "20" }} py="7vh" templateColumns={{ base: "1fr", sm: "1fr", md: "1fr 1fr" }}>
        <GridItem>
          <Box>
            <SlideFade
              in={true}
              transition={{
                enter: {
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              offsetY="20px"
            >
              <Image src={picSrc} placeholder="blur" priority alt="Jake in Wengen, Switzerland" />
              <Heading display={{ base: "none", md: "block" }} as="h4" fontSize="lg" fontWeight="normal" pt="6">
                - Wengen, Switzerland
              </Heading>
            </SlideFade>
          </Box>
        </GridItem>
        <GridItem pt={{ base: "8", md: "0" }}>
          <VStack
            pt="8"
            borderTop="1px"
            borderColor="border"
            h="100%"
            w="100%"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box pb="8" borderBottom={{ base: "1px", md: 0 }} borderColor="border">
              {/* <SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
              >
                <Heading as="h1" fontSize="lg" fontWeight="medium" pb="6">
                  Hello World...
                </Heading>
              </SlideFade> */}
              <SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
              >
                <Text fontSize="md">
                  <Box as="span" fontWeight="medium" mr="2">
                    Hello World...
                  </Box>
                  I got my start in tech at the young age of 12 nerding out on computers with buddies at recess. I
                  quickly discovered PC video games and specifically Minecraft (the greatest sandbox game in history)
                  and learned how to mod it, create private servers, and manage digital communities. It&apos;s funny
                  looking back now but this is how I got my start in design, engineering, and a love for building
                  software. My process today is very similar to back then, I try to find an outlet for my passion,
                  creativity, and problem solving and then go all in. It&apos;s why I ❤️ code, art, music, movies,
                  exploring the outdoors, cooking, woodworking, and finally, improving as a human being.
                </Text>
              </SlideFade>
            </Box>

            <VStack w="100%">
              <SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.45,
                    duration: 0.45,
                  },
                }}
              >
                <ExperienceItem position="Design Engineer" company="Axiom" start="June 2022" end="Present" />
              </SlideFade>
              {/*<SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
              >
                <ExperienceItem position="Desktop Engineer" company="Frontier Audio" start="Feb 2022" end="June 2022" />
              </SlideFade>*/}
              {/*<SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.55,
                    duration: 0.5,
                  },
                }}
              >
                <ExperienceItem position="Software Engineer" company="Vazer" start="Oct 2021" end="Jan 2021" />
              </SlideFade>*/}
              <SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.6,
                    duration: 0.5,
                  },
                }}
              >
                <ExperienceItem
                  position="Software Engineer Intern"
                  company="PriviChat"
                  start="July 2020"
                  end="Mar 2021"
                />
              </SlideFade>
              <SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.65,
                    duration: 0.5,
                  },
                }}
              >
                <ExperienceItem
                  position="Student Employee"
                  company="Divergent Design Lab"
                  start="Jan 2020"
                  end="Aug 2020"
                />
              </SlideFade>
              <SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.7,
                    duration: 0.5,
                  },
                }}
              >
                <ExperienceItem position="Web Consultant" company="Helios IPM" start="May 2017" end="Feb 2019" />
              </SlideFade>
              <SlideFade
                style={{ width: "100%" }}
                in={true}
                offsetY="20px"
                transition={{
                  enter: {
                    delay: 0.75,
                    duration: 0.5,
                  },
                }}
              >
                <ExperienceItem position="Freelance" company="Isophex" start="May 2016" end="Feb 2019" />
              </SlideFade>
              <Flex
                pt="6"
                w="100%"
                justifyContent={{ base: "center", md: "flex-end" }}
                color="brand"
                fontWeight="medium"
                textDecoration="underline"
              >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Ofkk9Rikb7T53HVhbSmg8Wl6OzXuHZF3/view?usp=sharing"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </Flex>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default About;
