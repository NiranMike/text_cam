import '@/styles/globals.css'
import Image from 'next/image';
import type { AppProps } from 'next/app'
import Header from "../src/components/Header"
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';
import svr from "../src/assets/images/serverDown.svg"
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

const progress = new ProgressBar({
  size: 6,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
})

  const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
      <div>
        <Image
          src={ svr }
          alt=""
          width={150}
          height={150}
        />
        <div>
          <h2>Oops, something went wrong!</h2>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>Retry</button>
        </div>
      </div>
    )
  }

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <div className='h-screen overflow-y-scroll
        scrollbar-thin md:scrollbar
        scrollbar-track-gray-400/20
        scrollbar-thumb-[#dfdcdc] overflow-hidden z-10'>
        <Header />
        <Component {...pageProps} />
      </div>
    </ErrorBoundary>
    
    )
}
