import { Box, Flex, Grid, GridItem, Heading, SlideFade, Text } from "@chakra-ui/react";
import { FC } from "react";
import TransitionLink from "../navigation/transitionlink";

const Subtitle: FC = () => {
  return (
    <Grid
      py={{ base: "8", md: "6vh" }}
      templateColumns={{
        base: "1fr 1fr",
        lg: "1.3fr 1fr 1fr",
        mid: "1.35fr 1fr 1fr",
      }}
      borderTop={["0", "1px solid #C7C7C7"]}
      borderBottom="1px solid"
      borderColor="border"
      alignItems="center"
      borderTopColor="border"
    >
      <GridItem
        rowSpan={{ base: 1, sm: 2, lg: 1, mid: 1 }}
        colSpan={{ base: 2, sm: 1, md: 1, mid: 1 }}
        pb={{ base: "8", sm: "0" }}
      >
        <SlideFade
          in={true}
          offsetY="20px"
          transition={{
            enter: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "8vw", sm: "2xl" }}
            fontWeight={{ base: "black", sm: "medium" }}
            lineHeight="1.3"
          >
            <Flex flexDirection={{ base: "column", mid: "row" }}>
              <Text>UX Designer</Text>
              <Text px="2" display={{ base: "none", mid: "block" }}>
                {" "}
                /{" "}
              </Text>
              <Text>Software Engineer</Text>
            </Flex>
          </Heading>
        </SlideFade>
      </GridItem>
      <GridItem colSpan={{ base: 2, sm: 1, md: 1, mid: 1 }} display="flex" alignItems="center">
        <SlideFade
          transition={{
            enter: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
          in={true}
          offsetY="20px"
        >
          <Heading as="h2" fontSize={{ base: "md" }} fontWeight="medium" textAlign="left">
            Seeking Employment
          </Heading>
        </SlideFade>
        <SlideFade
          in={true}
          offsetY="20px"
          transition={{
            enter: {
              delay: 1.5,
            },
          }}
        >
          <Text
            display={{ base: "block", mid: "block" }}
            pl="2"
            color="brand"
            fontWeight="medium"
            textDecoration="underline"
            fontSize="md"
            textAlign="left"
          >
            <TransitionLink href="/contact">Contact</TransitionLink>
          </Text>
        </SlideFade>
      </GridItem>

      <GridItem
        colSpan={{ base: 2, sm: 1, md: 1, mid: 1 }}
        display="flex"
        alignItems="center"
        pt={{ base: "4", sm: "0" }}
      >
        <SlideFade
          in={true}
          offsetY="20px"
          transition={{
            enter: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
        >
          <Heading as="h2" fontSize={{ base: "md" }} fontWeight="medium" textAlign="left">
            &quot;Theoretical +
            <Box display={{ base: "none", mid: "none" }}>
              <br />
            </Box>{" "}
            Pragmatic&quot;
          </Heading>
        </SlideFade>
        <SlideFade
          in={true}
          offsetY="20px"
          transition={{
            enter: {
              delay: 1.5,
            },
          }}
        >
          <Text
            display={{ base: "block", mid: "block" }}
            pl="2"
            color="brand"
            fontWeight="medium"
            textDecoration="underline"
            fontSize="md"
            textAlign="left"
          >
            <TransitionLink href="/about">About</TransitionLink>
          </Text>
        </SlideFade>
      </GridItem>
    </Grid>
  );
};

export default Subtitle;
