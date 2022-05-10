import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const headerStyle = 'row-start-1 col-span-full h-[60px] bg-black w-full flex justify-center text-white z-30'

  return (
    <Layout title='testpage' footerStyle='' footerContentWidth=' pt-20 pb-40' headerContentWidth='w-full'>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
