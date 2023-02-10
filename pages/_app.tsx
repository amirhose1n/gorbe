import type { AppProps } from "next/app";
import Copyright from "../src/components/copyright";
import GlobalStyle from "../src/styles/globals";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Copyright />
    </>
  );
}

export default MyApp;
