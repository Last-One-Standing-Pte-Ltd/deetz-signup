import "@/styles/globals.css";
import Theme from "@/styles/Theme";
import { ChakraProvider } from "@chakra-ui/react";
import "react-phone-input-2/lib/style.css";
import "@fontsource/nunito";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      {" "}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
