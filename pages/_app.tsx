import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../src/components/Header"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen overflow-y-scroll
scrollbar-thin md:scrollbar
scrollbar-track-gray-400/20
scrollbar-thumb-[#28272A] overflow-hidden snap-mandatory snap-y z-0'>
      <Header />
      <Component {...pageProps} />
    </div>
    )
}
