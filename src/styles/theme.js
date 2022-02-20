import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "blue.50",
      },
    },
  },
});
