import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#47585B",
      "800": "rgba(153, 153, 153, 0.5)",
      "700": "#999999",
      "600": "#DADADA",
      "500": "#F5F8FA",
    },
    yellow: {
      "900": "rgba(255, 186, 8, 0.5)",
      "800": "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.500",
        color: "dark.900",
      },
    },
  },
});
