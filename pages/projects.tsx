import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
      <GridItem>
        <Heading fontSize={{ base: "14vw", sm: "6.4vw", mid: "100px" }}>Projects</Heading>
      </GridItem>
      <GridItem pt={{ base: "6", md: "0" }}>
        <Text>
          Due to the nature of where I work, I’m not able to show everything here in my portfolio. If you’d like to see
          more feel free to{" "}
          <Box as="span" color="brand">
            <a href="mailto://jake.schroeder001@gmail.com">email me.</a>
          </Box>
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Projects;
