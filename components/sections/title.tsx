import { Flex, Heading, SlideFade, useDisclosure } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { TypewriterProps } from "react-simple-typewriter/dist/Hooks/useTypewriter";

const TitleSection: FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { text, count } = useTypewriter({
    words: ["Inspiration.", "Creativity.", "Abstraction.", "Life."],
    loop: false,
    cursor: true,
    delaySpeed: 1500,
    deleteSpeed: 100,
    typeSpeed: 140,
  } as TypewriterProps);

  useEffect(() => {
    requestAnimationFrame(() => {
      onToggle();
    });
  }, []);

  return (
    <Flex borderBottom="1px solid" borderColor="border" display={{ base: "none", sm: "flex" }}>
      <Heading
        color="#3A3A3A"
        display="flex"
        as="h1"
        fontSize={{ base: "14vw", sm: "6vw", mid: "105px" }}
        py={{ base: "8", mid: "6vh" }}
        fontWeight="black"
      >
        <SlideFade in={isOpen} offsetY="20px">
          Powered by&nbsp;
        </SlideFade>
        <SlideFade
          in={isOpen}
          offsetY="20px"
          transition={{
            enter: {
              delay: 0.5,
            },
          }}
        >
          <Typewriter
            words={["Inspiration.", "Creativity.", "Abstraction.", "Code."]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={140}
            deleteSpeed={100}
            delaySpeed={1500}
          />
        </SlideFade>
      </Heading>
    </Flex>
  );
};

export default TitleSection;
