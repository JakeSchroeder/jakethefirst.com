// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

import fonts from "./fonts";

import colors from "./colors";
// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'

const breakpoints = {
  sm: "580px",
  md: "600px",
  lg: "900px",
  xl: "1200px",
  "2xl": "1536px",
  container: "1600px",
  mid: "1366px",
};

const overrides = {
  styles,
  fonts,
  colors,
  breakpoints,
  // borders,
  // Other foundational style overrides go here
  // components: {
  //   Button,
  //   // Other components go here
  // },
};

export default extendTheme(overrides);
