import { Fade, Flex, SlideFade, Text } from "@chakra-ui/react";
import { FC } from "react";

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
        borderTop="1px solid"
        borderColor="border"
      >
        <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
          Copyright © 2022 Jake Schroeder. All Rights Reserved.
        </Text>
        <Text fontSize="sm" display={{ base: "none", md: "block" }}>
          jakeschroeder.me
        </Text>
      </Flex>
    </Fade>
  );
};

export default Footer;
