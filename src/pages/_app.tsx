import "@/styles/globals.css";
import GlobalStyle from "@/styles/globalstyles";
import { ThemeProvider, DefaultTheme } from "styled-components";
import type { AppProps } from "next/app";
import { Header } from "@/components/header";

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}
