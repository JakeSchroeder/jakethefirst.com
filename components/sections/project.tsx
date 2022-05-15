import { FC } from "react";
import { Box, Container, Flex, Grid, GridItem, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Cursor from "../navigation/cursor";
import TransitionLink from "../navigation/transitionlink";

interface ProjectProps {
  name: string;
  link: string;
  description: string;
  order: string;
  projectTimeline: string;
  projectType: string;
  contributors: string[];
  myContribution: string[];
  subDescription: string;
  nextProject: string;
  nextProjectLink: string;
  prevProject: string;
  prevProjectLink: string;
  images: StaticImageData[];
}

const Project: FC<ProjectProps> = ({
  name,
  link,
  order,
  contributors,
  description,
  myContribution,
  projectTimeline,
  projectType,
  subDescription,
  nextProject,
  nextProjectLink,
  prevProject,
  prevProjectLink,
  images,
}) => {
  return (
    <>
      <Cursor />
      <Box w="100%" pt="6vh">
        <Box px="0" pb="16" display="flex" borderBottom="1px" borderColor="border">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr 1fr" }} alignItems="center">
            <GridItem>
              <Heading fontSize="6xl" mr="6">
                {name}
              </Heading>
            </GridItem>
            <GridItem pb={{ base: "4", lg: "0" }}>
              <Text cursor="pointer" fontSize="md" fontWeight="normal" textDecor="underline">
                <a target="_blank" href={link} rel="noreferrer">
                  {link}
                </a>
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Text fontSize="md" fontWeight="normal">
                {description}
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <Box px="0" height="100%">
          <Flex borderBottom="1px" borderColor="border">
            <Heading py="8" fontSize="4xl">
              {order}
            </Heading>
          </Flex>
          <Box borderBottom="1px" borderColor="border" py="16">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr 1fr" }} gap={{ base: "6", lg: "0" }}>
              <GridItem>
                <Heading fontSize="xl" mb="4">
                  Project Timeline
                </Heading>
                <Text>{projectTimeline}</Text>
              </GridItem>
              <GridItem>
                <Heading fontSize="xl" mb="4">
                  Project Type
                </Heading>
                <Text>{projectType}</Text>
              </GridItem>
              <GridItem>
                <Heading fontSize="xl" mb="4">
                  Contributors
                </Heading>
                <VStack spacing="1" alignItems="flex-start">
                  {contributors.map((contribution, index) => (
                    <Text key={`contributor-${index}`}>{contribution}</Text>
                  ))}
                </VStack>
              </GridItem>
              <GridItem>
                <Heading fontSize="xl" mb="4">
                  My Contribution
                </Heading>
                <VStack spacing="1" alignItems="flex-start">
                  {myContribution.map((contribution, index) => (
                    <Text key={`contributor-${index}`}>{contribution}</Text>
                  ))}
                </VStack>
              </GridItem>
            </Grid>
          </Box>
          <Box py="16">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
              <GridItem>{subDescription}</GridItem>
              <GridItem></GridItem>
            </Grid>
          </Box>
          {images.map((image, index) => (
            <Box py="16" key={index}>
              <Image priority placeholder="blur" layout="responsive" src={image} alt="Vazer Home Screen" />
            </Box>
          ))}
        </Box>
        <Box borderTop="1px" borderColor="border" py="16">
          <HStack w="100%" justifyContent="space-between">
            <VStack>
              <HStack>
                <svg
                  style={{ transform: "rotate(-180deg)" }}
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.98887e-06 29.25L39.65 29.25L21.45 47.45L26 52L52 26L26 -2.27299e-06L21.45 4.55L39.65 22.75L2.55712e-06 22.75L1.98887e-06 29.25Z"
                    fill="black"
                  ></path>
                </svg>
                <Text fontSize="5xl" fontWeight="bold">
                  Prev
                </Text>
              </HStack>
              <Text fontSize="md">
                <TransitionLink href={prevProjectLink}>
                  {prevProject}
                  {/* <Box as="span" fontWeight="bold" ml="4">
                  {order}
                </Box> */}
                </TransitionLink>
              </Text>
            </VStack>

            <VStack>
              <HStack>
                <Text fontSize="5xl" fontWeight="bold">
                  Next
                </Text>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.98887e-06 29.25L39.65 29.25L21.45 47.45L26 52L52 26L26 -2.27299e-06L21.45 4.55L39.65 22.75L2.55712e-06 22.75L1.98887e-06 29.25Z"
                    fill="black"
                  ></path>
                </svg>
              </HStack>

              <Text fontSize="md">
                <TransitionLink href={nextProjectLink}>
                  {nextProject}
                  {/* <Box as="span" fontWeight="bold" ml="4">
                  {order}
                </Box> */}
                </TransitionLink>
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Project;
