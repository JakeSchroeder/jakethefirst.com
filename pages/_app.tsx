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

const ChakraAnimBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      document.querySelector(".loading-screen")?.classList.toggle("animated");
    };
  }, []);

  // useEffect(() => {
  //   document.querySelector(".loading-screen")?.classList.toggle("animated");
  // }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence>
          {/* {isLoading ? (
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
          )} */}
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
        </AnimatePresence>
      </ChakraProvider>
    </>
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
