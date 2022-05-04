import { FC } from "react";
import { Fade, Flex, HStack, SlideFade, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <Fade style={{ width: "100%" }} in={true} delay={1}>
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
        <HStack spacing="4">
          <Text fontSize="sm">
            <Link href="https://twitter.com/Schrudmeister">Twitter</Link>
          </Text>

          <Text fontSize="sm">
            <Link href="https://www.linkedin.com/in/jake-schroeder/">
              LinkedIn
            </Link>
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
