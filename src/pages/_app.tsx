import "@/styles/globals.css";
import GlobalStyle from "@/styles/globalstyles";
import { ThemeProvider, DefaultTheme } from "styled-components";
import type { AppProps } from "next/app";
import { Header } from "@/components/header";
import { persistor, store } from "@/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/graphql/client";
import 'rsuite/dist/rsuite.min.css';


const theme: DefaultTheme = {
  colors: {
    black: "#111",
    white: "#fff",
    background: "#EAEDED",
    orange: "orange",
    navBg: "#131921",
  },
};

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />;
        </ThemeProvider>
        </ApolloProvider>
        </PersistGate>

      </Provider>
    </>
  );
}
