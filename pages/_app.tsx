import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
