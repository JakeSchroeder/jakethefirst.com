import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";

import fonts from "./fonts";

import colors from "./colors";

const breakpoints = {
  sm: "580px",
  md: "600px",
  lg: "900px",
  xl: "1200px",
  "2xl": "1536px",
  container: "1500px",
  mid: "1500px",
};

const overrides = {
  styles,
  fonts,
  colors,
  breakpoints,
};

export default extendTheme(overrides);
