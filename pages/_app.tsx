// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppProps } from "next/app";
import GlobalStyle from "../src/styles/globals";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
