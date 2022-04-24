import type { AppProps } from "next/app";
import { chakra, ChakraProvider, Container, Fade, Flex } from "@chakra-ui/react";
import theme from "../chakra";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { useEffect, useState } from "react";
import Start from "../components/loading/start";
import { AnimateSharedLayout, AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import Loader from "../components/loading/loader";

const ChakraAnimBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 500);
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence>
        {isLoading ? (
          <motion.div key="loader">
            <Loader setIsLoading={setIsLoading} />
          </motion.div>
        ) : (
          <Container maxW="1440px" h="100%" px={{ base: "4", sm: "10" }}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Container>
        )}
      </AnimatePresence>
    </ChakraProvider>
  );
}

{
  /* <motion.div
key={router.route}
initial={{ x: 0 }}
animate={{ x: "100%" }}
transition={{ type: "spring", stiffness: 100, duration: 1000 }}
style={{ position: "fixed", height: "100%", width: "100%", background: "blue", zIndex: "999" }}
>
<Container maxW="1440px" h="100%" w="100%" px={{ base: "4", sm: "10" }}>
  <Start />
</Container>
</motion.div> */
}

export default MyApp;
