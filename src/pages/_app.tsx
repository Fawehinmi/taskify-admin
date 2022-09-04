import "../../styles/globals.css";
import { LayoutContextProvider } from "../layouts/context";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutContextProvider>
      <Component {...pageProps} />
    </LayoutContextProvider>
  );
}

export default MyApp;
