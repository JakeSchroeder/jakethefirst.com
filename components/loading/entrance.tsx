import {
  Box,
  Center,
  Container,
  Fade,
  Flex,
  Heading,
  HStack,
  SlideFade,
  VStack,
} from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
import { MotionConfig } from "framer-motion";
import { FC, useEffect, useRef } from "react";

let logo = (
  <svg
    width="46"
    height="25"
    viewBox="0 0 46 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.20419 0H0V24.0312H2.20419V0Z" fill="#C2D3FF" />
    <path d="M4.22319 0H3.12109V24.0312H4.22319V0Z" fill="#ffffff" />
    <path d="M7.16468 0H5.87891V24.0312H7.16468V0Z" fill="#bababa" />
    <path d="M12.1256 0H10.8398V24.0312H12.1256V0Z" fill="#bababa" />
    <path d="M14.6942 0H13.041V24.0312H14.6942V0Z" fill="#ffffff" />
    <path d="M34.3486 0H32.3281V24.0312H34.3486V0Z" fill="#bababa" />
    <path d="M45.001 0H42.9805V24.0312H45.001V0Z" fill="#bababa" />
    <path d="M25.3485 0H23.6953V24.0312H25.3485V0Z" fill="#ffffff" />
    <path d="M18.7339 0H15.7949V24.0312H18.7339V0Z" fill="#bababa" />
    <path d="M31.2259 0H28.6543V24.0312H31.2259V0Z" fill="#C2D3FF" />
    <path d="M40.2259 0H37.4707V24.0312H40.2259V0Z" fill="#ffffff" />
    <path d="M12.1256 0H10.8398V24.0312H12.1256V0Z" fill="#bababa" />
    <path d="M22.776 0H21.4902V24.0312H22.776V0Z" fill="#bababa" />
    <path d="M42.0629 0H41.1445V24.0312H42.0629V0Z" fill="#bababa" />
  </svg>
);

interface LoaderProps {
  setIsLoading: (toggle: boolean) => void;
}

const Entrance: FC<LoaderProps> = ({ setIsLoading }) => {
  const percentageTextRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const node = percentageTextRef.current;

    const controls = animate(0, 100, {
      duration: 5,
      onUpdate(value) {
        node!.textContent = `${value.toFixed(0)}/100`;
      },
    });

    return () => {
      controls.stop();
    };
  }, []);

  return (
    <motion.div
      style={{ width: "100%", height: "100%", position: "fixed" }}
      key="overlay"
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 1,
      }}
    >
      <Center w="100%" h="100%" bg="brand">
        <Container maxW="1440px" h="100%" w="100%" px={{ base: "4", sm: "10" }}>
          <VStack
            w="100%"
            h="100%"
            justifyContent="space-between"
            py={{ base: "6", md: "10" }}
            color="white"
          >
            <motion.div
              key="overlay-header"
              style={{ width: "100%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <HStack
                justifyContent="space-between"
                alignItems="center"
                w="100%"
              >
                {logo}
                <Heading
                  fontSize="xl"
                  as="h4"
                  fontWeight="medium"
                  ref={percentageTextRef}
                ></Heading>
              </HStack>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <Heading
                textAlign="center"
                as="h1"
                fontSize={{ base: "14vw", sm: "7vw", lg: "5vw" }}
              >
                Jake Schroeder
              </Heading>
            </motion.div>
            <motion.div
              key="overlay-progress"
              style={{ width: "100%" }}
              initial={{ opacity: 0, y: "200px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "200px" }}
              transition={{
                duration: 1,
              }}
            >
              <Flex
                flexDir={{ base: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                w="100%"
              >
                <Heading
                  fontSize="xl"
                  as="h4"
                  fontWeight="medium"
                  whiteSpace="nowrap"
                >
                  UX Desginer
                </Heading>
                <Flex
                  w="100%"
                  justifyContent="center"
                  order={{ base: 3, md: 0 }}
                >
                  <motion.div
                    style={{ display: "flex" }}
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      delay: 1,
                      duration: 5,
                    }}
                    onAnimationComplete={() => setIsLoading(false)}
                  >
                    <Box
                      order={{ base: 3, sm: 0 }}
                      h="2px"
                      bg="white"
                      w="100%"
                      mx={{ base: "0", sm: "8" }}
                      mt={{ base: "4", sm: "0" }}
                    ></Box>
                  </motion.div>
                </Flex>
                <Heading
                  fontSize="xl"
                  as="h4"
                  fontWeight="medium"
                  whiteSpace="nowrap"
                >
                  Software Engineer
                </Heading>
              </Flex>
            </motion.div>
          </VStack>
        </Container>
      </Center>
    </motion.div>
  );
};

export default Entrance;
