import Head from "next/head";
import type { AppProps } from "next/app";
import { chakra, ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../chakra";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { useEffect, useState } from "react";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import Entrance from "../components/loading/entrance";
import Loader from "../components/loading/loader";
import Cursor from "../components/navigation/cursor";

const ChakraAnimBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", (e) => {
      console.log("IS the route changing");
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", (e) => {
      setIsLoading(false);
    });
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <Loader isLoading={isLoading} />
        <Container
          maxW="1500px"
          minH="100%"
          px={{ base: "4", sm: "10" }}
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ChakraProvider>
    </>
  );
}

{
  /*
  <AnimatedPresence>
  {isLoading ? (
            <motion.div key="loader">
              <Entrance setIsLoading={setIsLoading} />
            </motion.div>
          ) : (
            <>
              <Loader />
              <Container
                maxW="1500px"
                h="100%"
                px={{ base: "4", sm: "10" }}
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
              >
                <Header />
                <Component {...pageProps} />
                <Footer />
              </Container>
            </>
          )} </AnimatedPresence> */
}

export default MyApp;
