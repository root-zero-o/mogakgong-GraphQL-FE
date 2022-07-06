import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";
import DeviceDetect from "../lib/DeviceDetect";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DeviceDetect>
        <Component {...pageProps} />
      </DeviceDetect>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
