import { FC } from "react";
import {
  Box,
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
import Image from "next/image";
import vazer1 from "../public/vazer1.jpg";
import vazer2 from "../public/vazer2.jpg";

const Vazer: FC = () => {
  return (
    <Container maxW="1400px">
      <Box px="0" pb="16" display="flex" borderBottom="1px" borderColor="border">
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
              A platform for building single codebase cross-platform apps completely managed in a remote development
              env.
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box px="0" height="100%">
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
              For over 6 months my roomate and I did a complete deep dive into what makes the web, the web. My goal was
              to onboard my roomate into the world of web development and show him the ropes. In doing so we came across
              a number of difficulties and gaps of understanding regarding the tooling. Using packages like npm, node
              task runners, and other development tooling became a real struggle. We decided there should be a better
              way of doing development. Instead of relying on a local environment to match the libraries and frameworks
              make it all remote and version everything to a docker file that the library maintainers specify. Then you
              can make sure the tooling will work. Welcome to Vazer.
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
              Frontier Audio
              <Box as="span" fontWeight="bold">
                01/04
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
      </Box>
    </Container>
  );
};
