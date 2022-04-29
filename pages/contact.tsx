import { Center, Heading } from "@chakra-ui/react";
import { FC } from "react";
import Cursor from "../components/navigation/cursor";

const Contact: FC = () => {
  return (
    <>
      <Cursor />
      <Center>
        <Heading
          as="h1"
          fontSize={{ base: "16px", sm: "4vw", xl: "3vw" }}
          textDecoration="underline"
          _hover={{ color: "brand" }}
        >
          <a href="mailto:jake.schroeder001@gmail.com">jake.schroeder001@gmail.com</a>
        </Heading>
      </Center>
    </>
  );
};

export default Contact;
