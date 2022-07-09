import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";
import DeviceDetect from "../lib/DeviceDetect";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2-nopolyfill.js"></script>
      </Head>
      <QueryClientProvider client={queryClient}>
        <DeviceDetect>
          <Component {...pageProps} />
        </DeviceDetect>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
