import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LoaderProvider } from "./context/LoaderContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <LoaderProvider>
        <Component {...pageProps} />
      </LoaderProvider>
      <Footer />
    </>
  )
}
