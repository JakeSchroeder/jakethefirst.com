import { Flex, Heading, SlideFade, useDisclosure } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { TypewriterProps } from "react-simple-typewriter/dist/Hooks/useTypewriter";
import { motion } from "framer-motion";

const TitleSection: FC = () => {
  const { text, count } = useTypewriter({
    words: ["Inspiration.", "Creativity.", "Abstraction.", "Life."],
    loop: 1,
    cursor: true,
    delaySpeed: 1500,
    deleteSpeed: 100,
    typeSpeed: 140,
  } as TypewriterProps);

  return (
    <Flex display={{ base: "none", sm: "flex" }}>
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
          color="#3A3A3A"
          display="flex"
          as="h1"
          fontSize={{ base: "14vw", sm: "6.4vw", mid: "110px" }}
          py={{ base: "8", mid: "6vh" }}
          fontWeight="black"
        >
          Powered by&nbsp;
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
            <Typewriter
              words={["Inspiration.", "Creativity.", "Abstraction.", "Code."]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={140}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </SlideFade>
        </Heading>
      </SlideFade>
    </Flex>
  );
};

export default TitleSection;
