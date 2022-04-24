import { Box, Flex, Grid, GridItem, Heading, SlideFade, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { FC, useEffect } from "react";

const AboutSection: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    requestAnimationFrame(() => {
      onToggle();
    });
  }, []);

  return (
    <Grid
      py={{ base: "8", mid: "6vh" }}
      templateColumns={{ base: "1fr 1fr", mid: "1.35fr 1fr 1fr" }}
      borderBottom="1px solid"
      borderColor="border"
      alignItems="center"
    >
      <GridItem rowSpan={{ base: 1, md: 2, mid: 1 }} colSpan={{ base: 2, md: 1, mid: 1 }} pb={{ base: "8", md: "0" }}>
        <SlideFade in={isOpen} offsetY="20px">
          <Heading
            as="h2"
            fontSize={{ base: "8vw", sm: "2xl" }}
            fontWeight={{ base: "black", sm: "medium" }}
            lineHeight="1.3"
          >
            <Flex flexDirection={{ base: "column", lg: "row" }}>
              <Text>UX Designer</Text>
              <Text px="2" display={{ base: "none", lg: "block" }}>
                {" "}
                /{" "}
              </Text>
              <Text>Software Engineer</Text>
            </Flex>
          </Heading>
        </SlideFade>
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1, mid: 1 }} display="flex" alignItems="center">
        <SlideFade in={isOpen} offsetY="20px">
          <Heading as="h2" fontSize={{ base: "md" }} fontWeight="medium" textAlign="left">
            Seeking Employment
          </Heading>
        </SlideFade>
        <SlideFade in={isOpen} offsetY="20px">
          <Text
            display={{ base: "block", mid: "block" }}
            pl="2"
            color="brand"
            fontWeight="medium"
            textDecoration="underline"
            fontSize="md"
            textAlign="left"
          >
            <Link href="/about">Contact</Link>
          </Text>
        </SlideFade>
      </GridItem>

      <GridItem colSpan={{ base: 2, md: 1, mid: 1 }} display="flex" alignItems="center" pt={{ base: "4", sm: "0" }}>
        <SlideFade in={isOpen} offsetY="20px">
          <Heading as="h2" fontSize={{ base: "md" }} fontWeight="medium" textAlign="left">
            &quot;Theoretical +
            <Box display={{ base: "none", mid: "none" }}>
              <br />
            </Box>{" "}
            Pragmatic&quot;
          </Heading>
        </SlideFade>
        <SlideFade in={isOpen} offsetY="20px">
          <Text
            display={{ base: "block", mid: "block" }}
            pl="2"
            color="brand"
            fontWeight="medium"
            textDecoration="underline"
            fontSize="md"
            textAlign="left"
          >
            <Link href="/about">About</Link>
          </Text>
        </SlideFade>
      </GridItem>
    </Grid>
  );
};

export default AboutSection;