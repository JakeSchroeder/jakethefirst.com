import { Box, Grid, GridItem, Heading, HStack, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const DescriptionSection: FC = () => {
  return (
    <Grid
      gap={{ base: "0", mid: "5%" }}
      templateColumns={{ base: "1fr", mid: "1.3fr  1fr 1fr" }}
      py={{ base: "8", mid: "6vh" }}
    >
      <GridItem
        borderBottom={{ base: "1px solid", md: "0", mid: "0" }}
        borderColor="border"
        pb={{ base: "8", mid: "0" }}
      >
        <Text>
          <Box as="span" display="inline" fontSize="lg" fontWeight="bold" pr="2">
            I’m Jake,
          </Box>
          passionate about bringing together leading UX Design and effective Frontend Development to deliver highly
          usable and pragmatic solutions. I am constantly working to improve my skills by exploring the latest design
          trends, frameworks and technologies. My strength is in understanding business requirements and translating
          them into well designed, valuable solutions with practical functionality, communicating professionalism and a
          unique modern aesthetic that is both exciting and usable. With strong interpersonal instincts, I enjoy working
          closely with business owners to fully.
        </Text>
      </GridItem>
      <GridItem colSpan={2} pt={{ base: "8", mid: "0" }}>
        <HStack w="100%" alignItems="center">
          <Heading as="h2" fontSize={{ base: "md" }} fontWeight="medium">
            My Stack
          </Heading>
          <Text color="brand" fontWeight="medium" textDecoration="underline" fontSize="md" pl="2">
            <Link href="/contact">Projects</Link>
          </Text>
        </HStack>
        <Grid pt="8" gap="8" templateColumns={{ base: "1fr 1fr", sm: "1fr 1fr 1fr 1fr", md: "1fr 1fr 1fr 1fr" }}>
          <GridItem>
            <List>
              <ListItem> Figma</ListItem>
              <ListItem>Framer</ListItem>
              <ListItem>Adobe XD</ListItem>
              <ListItem>Photoshop</ListItem>
              <ListItem>Illustrator</ListItem>
              <ListItem>After Effects</ListItem>
            </List>
          </GridItem>
          <GridItem>
            <List>
              <ListItem>Typescript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Node</ListItem>
              <ListItem>Next</ListItem>
              <ListItem>Vercel</ListItem>
              <ListItem>PlanetScale</ListItem>
            </List>
          </GridItem>
          <GridItem>
            <List>
              <ListItem>C#</ListItem>
              <ListItem>Unity 3D</ListItem>
              <ListItem>Unreal</ListItem>
              <ListItem>Cinema 4D</ListItem>
              <ListItem>Blender</ListItem>
              <ListItem>Anim</ListItem>
            </List>
          </GridItem>
          <GridItem>
            <List>
              <ListItem>AWS</ListItem>
              <ListItem>API Gateway</ListItem>
              <ListItem>Lambda</ListItem>
              <ListItem>DynamoDB</ListItem>
              <ListItem>Cloudfront</ListItem>
              <ListItem>Route 53</ListItem>
            </List>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default DescriptionSection;
