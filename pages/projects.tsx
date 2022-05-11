import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { FC, useRef, useState } from "react";
import Cursor from "../components/navigation/cursor";
import TransitionLink from "../components/navigation/transitionlink";
import heliosThumb from "../public/thumbnail-helios.jpg";
import frontierThumb from "../public/thumbnail-frontier.jpg";
import vazerThumb from "../public/thumbnail-vazer.jpg";
import isophexThumb from "../public/thumbnail-isophex.jpg";
import vazer1 from "../public/vazer1.jpg";
import vazer2 from "../public/vazer2.jpg";

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
  index: number;
  name: string;
  roles: string;
  setCurrentProject: Function;
  imgSrc: StaticImageData;
  currentProject: Project;
  onClick: Function;
}

const ProjectItem: FC<ProjectItemProps> = ({
  onClick,
  currentProject,
  imgSrc,
  setCurrentProject,
  index,
  name,
  roles,
}) => {
  return (
    <BoxProject
      as="a"
      cursor="pointer"
      onClick={() => {
        onClick();
      }}
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
      {/* <TransitionLink href="/project/[id]">
        
      </TransitionLink> */}
    </BoxProject>
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
  return (
    <>
      <Head>
        <title>Jake Schroeder | Projects | User Experience Designer, Software Engineer</title>
        <meta name="description" content="User Experience Designer, Software Engineer, Personal Website" />
      </Head>
      <Cursor />
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"outside"}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          pt="20"
          borderTopLeftRadius="16px"
          borderTopRightRadius="16px"
          maxW="100%"
          w="100% !important"
          mt="24"
          mb="0 !important"
        >
          <Container maxW="1400px">
            <ModalHeader px="0" pb="16" display="flex" borderBottom="1px" borderColor="border">
              <Grid templateColumns="1fr 1fr 1fr 1fr" alignItems="center">
                <GridItem>
                  <Heading fontSize="6xl">Vazer</Heading>
                </GridItem>
                <GridItem>
                  <Text cursor="pointer" fontSize="md" fontWeight="normal" textDecor="underline">
                    <a target="_blank" href="https://vazer.io" rel="noreferrer">
                      https://vazer.io
                    </a>
                  </Text>
                </GridItem>

                <GridItem colSpan={2}>
                  <Text fontSize="md" fontWeight="normal">
                    A platform for building single codebase cross-platform apps completely managed in a remote
                    development env.
                  </Text>
                </GridItem>
              </Grid>
            </ModalHeader>
            <ModalCloseButton h="32px" w="32px" _hover={{ boxShadow: "0" }} top="-60px" color="white" size="lg" />
            <ModalBody px="0" height="100%">
              <Flex borderBottom="1px" borderColor="border">
                <Heading py="8" fontSize="4xl">
                  02/04
                </Heading>
              </Flex>
              <Box borderBottom="1px" borderColor="border" py="16">
                <Grid templateColumns="1fr 1fr 1fr 1fr">
                  <GridItem>
                    <Heading fontSize="xl" mb="4">
                      Project Timeline
                    </Heading>
                    <Text>October 2020 - Febuary 2021</Text>
                  </GridItem>
                  <GridItem>
                    <Heading fontSize="xl" mb="4">
                      Project Type
                    </Heading>
                    <Text>Prototype MVP</Text>
                  </GridItem>
                  <GridItem>
                    <Heading fontSize="xl" mb="4">
                      Contributors
                    </Heading>
                    <VStack spacing="1" alignItems="flex-start">
                      <Text fontWeight="medium">Frontend</Text>
                      <Text>Jake Schroeder</Text>
                      <Text fontWeight="medium">Backend</Text>
                      <Text>Noah Reardon</Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Heading fontSize="xl" mb="4">
                      My Contribution
                    </Heading>
                    <VStack spacing="1" alignItems="flex-start">
                      <Text>Concept Inception</Text>
                      <Text>Systems Design</Text>
                      <Text>Fullstack Engineering</Text>
                      <Text>Marketing Site</Text>
                      <Text>Product Research</Text>
                    </VStack>
                  </GridItem>
                </Grid>
              </Box>
              <Box py="16">
                <Grid templateColumns="1fr 1fr">
                  <GridItem>
                    For over 6 months my roomate and I did a complete deep dive into make makes the web, the web. My
                    goal was to onboard my roomate into the world of web development and show him to ropes. In doing so
                    we came across a number of difficulties and gaps of understanding regarding the tooling. Using
                    pakcages like npm, node task runners, and other development tooling became a realstruggle. What we
                    decided is that their should be a better way of doing development. Instead of relying on a local
                    environment to match the libraries and frameworks make it all remote and version everything to a
                    docker file that the library maintainers specify. Then you can make sure the tooling will work.
                  </GridItem>
                  <GridItem></GridItem>
                </Grid>
              </Box>
              <Box py="16">
                <Image layout="responsive" src={vazer1} alt="Vazer Home Screen" />
              </Box>
              <Box py="16">
                <Image layout="responsive" src={vazer2} alt="Vazer Second Screen" />
              </Box>
            </ModalBody>
            <ModalFooter borderTop="1px" borderColor="border" py="16">
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
                    Frontier{" "}
                    <Box as="span" fontWeight="bold">
                      Audio 01/04
                    </Box>
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
                    Helios IPM{" "}
                    <Box as="span" fontWeight="bold">
                      03/04
                    </Box>
                  </Text>
                </VStack>
              </HStack>
            </ModalFooter>
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
          <Heading w="100%" fontSize={{ base: "14vw", sm: "6.4vw", mid: "100px" }} pb="8">
            Projects
          </Heading>
          <Text w="100%" fontSize={{ base: "sm", md: "lg" }}>
            Due to the nature of the projects I&apos;ve worked on, I’m not able to show everything here in my portfolio.
            If you’d like to see more feel free to{" "}
            <Text as="span" color="brand" fontWeight="medium" textDecor="underline">
              <a href="mailto://jake.schroeder001@gmail.com">email me.</a>
            </Text>
          </Text>
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
              <ProjectItem
                onClick={onOpen}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                index={1}
                name="Frontier Audio"
                roles="Desktop Engineering, Design, Project Management"
                imgSrc={frontierThumb}
              />
              <ProjectItem
                onClick={onOpen}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                index={2}
                name="Vazer"
                roles="Web Design, Systems Design, Software Engineering"
                imgSrc={vazerThumb}
              />
              <ProjectItem
                onClick={onOpen}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                index={3}
                name="Helios IPM"
                roles="Web Design, Fullstack Web Development"
                imgSrc={heliosThumb}
              />
              <ProjectItem
                onClick={onOpen}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                index={4}
                name="Isophex"
                roles="Web Design, Fullstack Web Development, Freelance"
                imgSrc={isophexThumb}
              />
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default Projects;
