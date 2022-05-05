import { Center, Heading } from "@chakra-ui/react";
import { FC, useEffect, useRef } from "react";
import Cursor from "../components/navigation/cursor";

const Contact: FC = () => {
  return (
    <>
      <Cursor />
      <Center>
        <Heading
          fontSize="4.9vw"
          as="h1"
          textDecoration="underline"
          _hover={{ color: "brand" }}
        >
          <a href="mailto:jake.schroeder001@gmail.com">
            jake.schroeder001@gmail.com
          </a>
        </Heading>
      </Center>
    </>
  );
};

export default Contact;
