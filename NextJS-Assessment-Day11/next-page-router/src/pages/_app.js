import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {Roboto} from 'next/font/google';
const roboto = Roboto({
  weight: '400',
  subsets:['latin']
})

export default function App({ Component, pageProps }) {
return (
  <>
  <Header />
  <div className={roboto.className}>
    <Component {...pageProps} />
  </div>
  <Footer />
  </>
)
}
