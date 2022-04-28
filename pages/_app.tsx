import type { AppProps } from "next/app";
import { chakra, ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../chakra";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { useState } from "react";

import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import Loader from "../components/loading/loader";
import Head from "next/head";

const ChakraAnimBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence>
          {isLoading ? (
            <motion.div key="loader">
              <Loader setIsLoading={setIsLoading} />
            </motion.div>
          ) : (
            <>
              <Container
                maxW="1440px"
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
          )}
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
