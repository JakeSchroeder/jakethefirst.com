import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";
import Cursor from "../components/navigation/cursor";

const sideArrow = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.63668 21.2132L17.9887 10.8611L17.9887 20.3646L20.3646 20.3646V6.78819H6.78816L6.78816 9.16407L16.2917 9.16407L5.93963 19.5161L7.63668 21.2132Z"
      fill="black"
    ></path>
  </svg>
);

interface ProjectItemProps {
  index: number;
  name: string;
  roles: string;
}

const ProjectItem: FC<ProjectItemProps> = ({ index, name, roles }) => {
  return (
    <HStack
      justifyContent="space-between"
      w="100%"
      py="8"
      mt="0 !important"
      borderBottom="1px"
      borderColor="border"
    >
      <HStack>
        <Heading fontWeight="medium" fontSize="md">
          {index}
        </Heading>
        <Heading fontWeight="medium" fontSize="md">
          {name}
        </Heading>
      </HStack>
      <HStack>
        <Heading
          display={{ base: "none", md: "block" }}
          fontWeight="normal"
          fontSize="sm"
          mr="4"
        >
          {roles}
        </Heading>
        {sideArrow}
      </HStack>
    </HStack>
  );
};

const Projects: FC = () => {
  return (
    <>
      <Head>
        <title>
          Jake Schroeder | Projects | User Experience Designer, Software
          Engineer
        </title>
        <meta
          name="description"
          content="User Experience Designer, Software Engineer, Personal Website"
        />
      </Head>
      <Cursor />
      <VStack justifyContent="space-between">
        <HStack
          w="100%"
          justifyContent="space-between"
          py={{ base: "8", md: "6vh" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Heading
            w="100%"
            fontSize={{ base: "14vw", sm: "6.4vw", mid: "100px" }}
            pb="8"
          >
            Projects
          </Heading>
          <Text w="100%" fontSize={{ base: "sm", md: "lg" }}>
            Due to the nature of the projects I&apos;ve worked on, I’m not able
            to show everything here in my portfolio. If you’d like to see more
            feel free to{" "}
            <Text
              as="span"
              color="brand"
              fontWeight="medium"
              textDecor="underline"
            >
              <a href="mailto://jake.schroeder001@gmail.com">email me.</a>
            </Text>
          </Text>
        </HStack>
        <Grid
          alignItems="center"
          h="100%"
          w="100%"
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        >
          <GridItem mr="15%" display={{ base: "none", md: "block" }}>
            <Box bg="#e0e0e0" h="50vh" w="100%"></Box>
          </GridItem>
          <GridItem>
            <VStack w="100%" justifyContent="flex-end">
              <ProjectItem
                index={1}
                name="Vazer"
                roles="Web Design, Systems Design, Software Engineering"
              />
              <ProjectItem
                index={2}
                name="Frontier Audio"
                roles="Desktop Engineering, Design, Project Management"
              />
              <ProjectItem
                index={3}
                name="Helios IPM"
                roles="Web Design, Fullstack Web Development"
              />
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default Projects;
