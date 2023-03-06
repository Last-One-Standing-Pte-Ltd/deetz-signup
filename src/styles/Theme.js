import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  colors: {
    gray: {
      50: "#F8F5F2",
      100: "#ECE7E3",
      200: "#D0CCC8",
      300: "#B5B0AA",
      400: "#9D9993",
      500: "#837D73",
      600: "#5E584E",
      700: "#3A352B",
      800: "#151109",
    },
    primary: {
      500: "#962e39",
    },
  },
});

export default Theme;
