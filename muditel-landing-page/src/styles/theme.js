import { extendTheme } from "@chakra-ui/react";

// fonts
import "@fontsource/inter";
import "@fontsource/roboto";
import "@fontsource/roboto-mono";
import "@fontsource/poppins";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        fontFamily: '"Inter", sans-serif',
        color: "#3A3A3A",
      },
    },
  },
  semanticTokens: {
    colors: {
      blue: "#004AAD",
      l_blue: "#216ED4",
      w_blue: "#8B92BD",
      blk: "#0D0D0D",
      txt: "#3A3A3A",
    },
    fonts: {
      heading: '"Poppins", sans-serif',
      text: '"Inter", sans-serif',
      caption: '"Roboto Mono", sans-serif',
    },
  },
});

export default theme;
