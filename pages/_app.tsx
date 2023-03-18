import Head from "next/head";
import type { AppProps } from "next/app";
import { Box, Button, ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../chakra";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { useEffect, useRef, useState } from "react";
import Loader from "../components/loading/loader";

import { createContext } from "react";

const AuthContext = createContext({
  auth: false,
  setAuth: (auth: boolean) => {},
});

function AuthManager({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(false);
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
}

//Wrap this top level with a manager
//The manager needs to control
// 1. Record or Replay?
// 2. If Record start recorder
// 3. If Replay disable recorder and initalize replay

function Replayer() {
  //Create session
  //Register event listeners
  //Add events to session history (possible optimize this with qeue and batching?)
  //How big will this session history be?
  //How do we handle large session histories?

  //Loop over the session history of the events
  //Conditional based on event type
  //If movemouse dispatch that event to Synthesizer
  //If Click dispatch that event to Synthesizer
  //If scroll dispatch that event to Synthesizer
  return <></>;
}

// function EventManager() {
//   //get auth token
//   const auth = false;
//   return (
//     <>
//       {auth ? (
//         //dynamic import
//         <Replayer/>
//       ) : (
//         <Recorder />
//       )}
//     </>
//   )
// }

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const historyRef = useRef<any>([]);
  useEffect(() => {
    router.events.on("routeChangeStart", (e) => {
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", (e) => {
      setIsLoading(false);
    });
  }, [router.events]);

  useEffect(() => {
    //Can you throttle the mouse move event?
    //If not we will have to throttle the push to the historyRef
    document.addEventListener("mousemove", (e) => {
      console.log(e);
      historyRef.current.push({
        type: "mousemove",
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  function handleSaveHistory() {
    let json = JSON.stringify(historyRef.current);
    let blob = new Blob([json], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    console.log(url);
    let tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.setAttribute("download", "history.json");
    tempLink.click();
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthManager>
        <Box display="absolute" top={0} left={0}>
          <Button background="black" textColor="white" onClick={handleSaveHistory}>
            Save history
          </Button>
        </Box>
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
      </AuthManager>
    </>
  );
}

export default MyApp;
