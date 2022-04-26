import { Flex, Heading, SlideFade, useDisclosure } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { TypewriterProps } from "react-simple-typewriter/dist/Hooks/useTypewriter";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

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
      <Heading
        color="#3A3A3A"
        display="flex"
        as="h1"
        fontSize={{ base: "14vw", sm: "5.85vw", mid: "100px" }}
        py={{ base: "8", mid: "6vh" }}
        fontWeight="black"
      >
        <motion.div
          key="loader"
          variants={variants}
          transition={{
            duration: 8,
            delay: 5,
          }}
        >
          Powered by&nbsp;
        </motion.div>
        <Typewriter
          words={["Inspiration.", "Creativity.", "Abstraction.", "Code."]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={140}
          deleteSpeed={100}
          delaySpeed={1500}
        />
      </Heading>
    </Flex>
  );
};

export default TitleSection;
