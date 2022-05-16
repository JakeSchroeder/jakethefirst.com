import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SlideFade,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { FC, useRef, useState } from "react";
import Cursor from "../components/navigation/cursor";

import heliosThumb from "../public/thumbnail-helios.jpg";
import frontierThumb from "../public/thumbnail-frontier.jpg";
import vazerThumb from "../public/thumbnail-vazer.jpg";
import isophexThumb from "../public/thumbnail-isophex.jpg";
import TransitionLink from "../components/navigation/transitionlink";
import { useRouter } from "next/router";
import Project from "../components/sections/project";
import ProjectFrontier from "./projects/frontier";
import ProjectVazer from "./projects/vazer";
import ProjectHelios from "./projects/helios";
import ProjectIsophex from "./projects/isophex";
import Link from "next/link";

const sideArrow = (
  <svg
    style={{ transition: "transform .3s cubic-bezier(0.87, 0, 0.13, 1)" }}
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

const HStackHover = styled(HStack)`
  &:hover:after {
    width: 100%;
  }
  &:hover svg {
    transform: rotate(-45deg);
  }
`;

const BoxProject = styled(Box)`
  &.project-box.deactive {
    opacity: 0.4;
  }
  &.project-box.active {
    opacity: 1 !important;
  }
`;
interface ProjectItemProps {
  link: string;
  index: number;
  name: string;
  roles: string;
  setCurrentProject: Function;
  imgSrc: StaticImageData;
  currentProject: Project;
  onClick: Function;
  as?: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
  link,
  onClick,
  currentProject,
  imgSrc,
  setCurrentProject,
  index,
  name,
  roles,
  as,
}) => {
  return (
    <Link as={as} href={link} passHref>
      <a href={link}>
        <BoxProject
          as="div"
          cursor="pointer"
          // onClick={() => {
          //   onClick();
          // }}
          onMouseEnter={() => {
            setCurrentProject({
              imgSrc: imgSrc,
              alt: "",
              index: index,
            });
          }}
          w="100%"
          transition="opacity .6s cubic-bezier(0.87, 0, 0.13, 1)"
          className={`${index === currentProject.index ? `project-box active` : `project-box deactive`}`}
        >
          <HStackHover
            className="project-item"
            position="relative"
            as="li"
            justifyContent="space-between"
            w="100%"
            py="8"
            mt="0 !important"
            borderBottom="1px"
            borderColor="border"
            _after={{
              content: '" "',
              position: "absolute",
              left: 0,
              bottom: 0,
              height: "1px",
              width: "0",
              background: "black",
              transition: "width 0.6s cubic-bezier(0.87, 0, 0.13, 1)",
            }}
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
              <Heading display={{ base: "none", md: "block" }} fontWeight="normal" fontSize="sm" mr="4">
                {roles}
              </Heading>
              {sideArrow}
            </HStack>
          </HStackHover>
        </BoxProject>
      </a>
    </Link>
  );
};

interface Project {
  imgSrc: StaticImageData;
  alt: string;
  index: number;
}

const Projects: FC = () => {
  const [currentProject, setCurrentProject] = useState({
    imgSrc: frontierThumb,
    alt: "",
    index: 1,
  } as Project);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Jake Schroeder | Projects | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
      </Head>
      <Cursor />
      <Modal
        isOpen={!!router.query.project}
        onClose={() => {
          router.push("/projects");
        }}
      >
        <ModalOverlay />
        <ModalContent
          mt="6vh"
          maxW="100%"
          marginBottom="0"
          borderBottomLeftRadius="0"
          borderBottomRightRadius="0"
          borderTopLeftRadius="16px"
          borderTopRightRadius="16px"
        >
          <Container maxW="1500px">
            <ModalCloseButton />
            <ModalBody>
              {router.query.project === "frontier" ? (
                <ProjectFrontier />
              ) : router.query.project === "vazer" ? (
                <ProjectVazer />
              ) : router.query.project === "helios" ? (
                <ProjectHelios />
              ) : router.query.project === "isophex" ? (
                <ProjectIsophex />
              ) : null}
            </ModalBody>
          </Container>
        </ModalContent>
      </Modal>
      <VStack justifyContent="space-between">
        <HStack
          w="100%"
          justifyContent="space-between"
          py={{ base: "8", md: "6vh" }}
          flexDir={{ base: "column", md: "row" }}
        >
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
            <Heading w="100%" fontSize={{ base: "14vw", sm: "6.4vw", mid: "100px" }} pb="8">
              Projects
            </Heading>
          </SlideFade>
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
            <Text w="100%" fontSize={{ base: "sm", md: "lg" }}>
              Due to the nature of the projects I&apos;ve worked on, I’m not able to show everything here in my
              portfolio. If you’d like to see more feel free to{" "}
              <Text as="span" color="brand" fontWeight="medium" textDecor="underline">
                <a href="mailto://jake.schroeder001@gmail.com">email me.</a>
              </Text>
            </Text>
          </SlideFade>
        </HStack>
        <Grid h="100%" w="100%" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          <GridItem position="relative" w="90%" h="500px" overflow="hidden" display={{ base: "none", md: "block" }}>
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex={currentProject.imgSrc === frontierThumb ? "50" : "0"}
              clipPath={`${currentProject.imgSrc === frontierThumb ? "inset(0 0 0 0)" : "inset(0 100% 0 0)"}`}
              transition="clip-path 0.6s cubic-bezier(0.87, 0, 0.13, 1)"
            >
              <Image
                style={{
                  transform: currentProject.imgSrc === frontierThumb ? "scale(1)" : "scale(1.4)",
                  transition: "transform 4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                placeholder="blur"
                objectFit="cover"
                objectPosition="50% 50%"
                layout="fill"
                src={frontierThumb}
                alt="Frontier Screen Preview"
              />
            </Box>

            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex={currentProject.imgSrc === vazerThumb ? "50" : "0"}
              clipPath={`${currentProject.imgSrc === vazerThumb ? "inset(0 0 0 0)" : "inset(0 100% 0 0)"}`}
              transition="clip-path 0.6s cubic-bezier(0.87, 0, 0.13, 1)"
            >
              <Image
                style={{
                  transform: currentProject.imgSrc === vazerThumb ? "scale(1)" : "scale(1.4)",
                  transition: "transform 4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                layout="fill"
                src={vazerThumb}
                alt="Vazer Screen Preview"
              />
            </Box>
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex={currentProject.imgSrc === heliosThumb ? "50" : "0"}
              clipPath={`${currentProject.imgSrc === heliosThumb ? "inset(0 0 0 0)" : "inset(0 100% 0 0)"}`}
              transition="clip-path 0.6s cubic-bezier(0.87, 0, 0.13, 1)"
            >
              <Image
                style={{
                  transform: currentProject.imgSrc === heliosThumb ? "scale(1)" : "scale(1.4)",
                  transition: "transform 4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                layout="fill"
                src={heliosThumb}
                alt="Helios Screen Preview"
              />
            </Box>
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex={currentProject.imgSrc === isophexThumb ? "50" : "0"}
              clipPath={`${currentProject.imgSrc === isophexThumb ? "inset(0 0 0 0)" : "inset(0 100% 0 0)"}`}
              transition="clip-path 0.6s cubic-bezier(0.87, 0, 0.13, 1)"
            >
              <Image
                style={{
                  transform: currentProject.imgSrc === isophexThumb ? "scale(1)" : "scale(1.4)",
                  transition: "transform 4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                layout="fill"
                src={isophexThumb}
                alt="Helios Screen Preview"
              />
            </Box>
          </GridItem>
          <GridItem>
            <VStack w="100%" justifyContent="flex-end" as="ul">
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
                <ProjectItem
                  link="/projects/?project=frontier"
                  as="/projects/frontier"
                  onClick={onOpen}
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                  index={1}
                  name="Frontier Audio"
                  roles="Desktop Engineering, Design, Project Management"
                  imgSrc={frontierThumb}
                />
              </SlideFade>
              <SlideFade
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
                <ProjectItem
                  link="/projects/?project=vazer"
                  as="/projects/vazer"
                  onClick={onOpen}
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                  index={2}
                  name="Vazer"
                  roles="Web Design, Systems Design, Software Engineering"
                  imgSrc={vazerThumb}
                />
              </SlideFade>
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
                <ProjectItem
                  link="/projects/?project=helios"
                  as="/projects/helios"
                  onClick={onOpen}
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                  index={3}
                  name="Helios IPM"
                  roles="Web Design, Fullstack Web Development"
                  imgSrc={heliosThumb}
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
                <ProjectItem
                  link="/projects/?project=isophex"
                  as="/projects/isophex"
                  onClick={onOpen}
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                  index={4}
                  name="Isophex"
                  roles="Web Design, Fullstack Web Development, Freelance"
                  imgSrc={isophexThumb}
                />
              </SlideFade>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default Projects;
