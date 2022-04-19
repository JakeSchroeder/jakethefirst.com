import { ColorModeScript, Container, theme } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/navigation/header";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
