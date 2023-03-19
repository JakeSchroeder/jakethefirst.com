import Head from "next/head";
import type { AppProps } from "next/app";
import { Box, Button, ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../chakra";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { useEffect, useRef, useState } from "react";
import Loader from "../components/loading/loader";

import { createContext } from "react";
import { EventManager } from "../components/events/manager";

export const AuthContext = createContext({
  auth: false,
  setAuth: (auth: boolean) => {},
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", (e) => {
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", (e) => {
      setIsLoading(false);
    });
  }, [router.events]);
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <EventManager>
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
        </EventManager>
      </AuthContext.Provider>
    </>
  );
}

export default MyApp;
