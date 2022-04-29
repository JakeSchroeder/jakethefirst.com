import { Box, Flex, Grid, GridItem, Heading, HStack, Icon, ScaleFade, SlideFade, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import picSrc from "../public/swiss.jpeg";
import Cursor from "../components/navigation/cursor";

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
      <Cursor />
      <Grid gap={{ base: 0, md: "12", xl: "20" }} py="10" templateColumns={{ base: "1fr", sm: "1fr", md: "1fr 1fr" }}>
        <GridItem>
          <SlideFade in={true} offsetY="20px" delay={0.5}>
            <Image src={picSrc} priority />
            <Heading display={{ base: "none", md: "block" }} as="h4" fontSize="lg" fontWeight="normal" pt="6">
              - Wengen, Switzerland
            </Heading>
          </SlideFade>
        </GridItem>
        <GridItem pt={{ base: "8", md: "0" }}>
          <VStack h="100%" w="100%" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Heading as="h1" fontSize="md" fontWeight="medium" pb="6">
                Hell World,
              </Heading>
              <Text fontSize="md">
                I started designing when I was 12 and wrote my first line of Java when I was 13. I’ve always gravitated
                towards outlets for passion and creativity. <br /> <br /> Its why I ❤️ art, music, movies, cooking,
                woodworking, and the prusuit of happiness. I live to learn. I found design and engineering and havent
                looked back since. Currently, I am based in Chicago but looking for work in California, Texas, Idaho,
                Washington, or Remote.
              </Text>
            </Box>
            <VStack w="100%">
              <ExperienceItem position="Desktop Engineer" company="Frontier Audio" start="Feb 2022" end="Present" />
              <ExperienceItem position="Software Engineer" company="Vazer" start="Oct 2021" end="Jan 2021" />
              <ExperienceItem
                position="Software Engineer Intern"
                company="PriviChat"
                start="July 2020"
                end="Mar 2021"
              />
              <ExperienceItem
                position="Full-Stack Engineer"
                company="Divergent Design Lab"
                start="Jan 2020"
                end="Aug 2020"
              />
              <ExperienceItem position="Web Consultant" company="Helios IPM" start="May 2016" end="Feb 2019" />
              <ExperienceItem position="Web Consultant" company="Helios IPM" start="May 2016" end="Feb 2019" />
              <Flex
                pt="6"
                w="100%"
                justifyContent={{ base: "center", md: "flex-end" }}
                color="brand"
                fontWeight="bold"
                textDecoration="underline"
              >
                <Link href="">Download Resume</Link>
              </Flex>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default About;
