import "../styles/globals.css";
import type { AppProps } from "next/app";
import DeviceDetect from "../lib/DeviceDetect";
import { ApolloProvider } from "@apollo/client";
import client from "../api/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <DeviceDetect>
          <Component {...pageProps} />
        </DeviceDetect>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
