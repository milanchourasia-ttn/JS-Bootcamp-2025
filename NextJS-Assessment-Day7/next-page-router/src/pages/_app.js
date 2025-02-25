import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LoaderProvider } from "./context/LoaderContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Provider store={store}>
        <LoaderProvider>
          <Component {...pageProps} />
        </LoaderProvider>
      </Provider>
      <Footer />
    </>
  )
}
