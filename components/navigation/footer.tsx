import { FC } from "react";
import { Fade, Flex, HStack, SlideFade, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <Fade style={{ width: "100%" }} in={true} delay={1}>
      <Flex
        py={{ base: "8", md: "6vh" }}
        w="100%"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        color="blackAlpha.500"
      >
        <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
          Copyright © 2022 Jake Schroeder. All Rights Reserved.
        </Text>
        <HStack spacing="4">
          <Text fontSize="sm">
            <a target="_blank" rel="noreferrer" href="https://github.com/jakeschroeder/jakeschroeder.me">
              GitHub
            </a>
          </Text>

          <Text fontSize="sm">
            <a target="_blank" rel="noreferrer" href="https://twitter.com/Schrudmeister">
              Twitter
            </a>
          </Text>

          <Text fontSize="sm">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jake-schroeder/">
              LinkedIn
            </a>
          </Text>
          <Text fontSize="sm" display={{ base: "none", md: "block" }}>
            jakeschroeder.me
          </Text>
        </HStack>
      </Flex>
    </Fade>
  );
};

export default Footer;
