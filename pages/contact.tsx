import { Center, Heading } from "@chakra-ui/react";
import { FC } from "react";

const Contact: FC = () => {
  return (
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
  );
};

export default Contact;
