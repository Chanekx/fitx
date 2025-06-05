import "@/styles/globals.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/router";
import { SnackbarProvider } from "@/context/SnackbarContext";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/_error" || router.pathname === "/404") {
      router.push("/Login/page");
    }
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </LocalizationProvider>
  );
};
export default App;
