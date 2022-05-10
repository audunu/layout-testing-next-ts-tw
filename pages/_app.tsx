import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      footerStyle='absolute bottom-0 w-full bg-[#403A6C] text-white flex justify-center'
      headerStyle='absolute top-0 h-[60px] w-full flex justify-center text-white z-30'
    >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
