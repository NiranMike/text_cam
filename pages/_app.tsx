import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../src/components/Header"
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

const progress = new ProgressBar({
  size: 6,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
})

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen overflow-y-scroll
    scrollbar-thin md:scrollbar
    scrollbar-track-gray-400/20
    scrollbar-thumb-[#dfdcdc] overflow-hidden z-10'>
      <Header />
      <Component {...pageProps} />
    </div>
    )
}
