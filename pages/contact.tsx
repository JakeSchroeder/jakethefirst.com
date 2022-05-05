import { Center, Heading } from "@chakra-ui/react";
import { FC, useEffect, useRef } from "react";
import Cursor from "../components/navigation/cursor";

// const CalculateFontSize = (width: number) => {
//   return width / 0.1;
// };

const Contact: FC = () => {
  // const headingRef = useRef<HTMLHeadingElement | null>(null);

  // useEffect(() => {
  //   window.addEventListener("resize", (e: Event) => {
  //     if (headingRef.current)
  //       headingRef.current.style.fontSize = `${window.innerWidth / 20}`;
  //   });
  // }, []);

  return (
    <>
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
