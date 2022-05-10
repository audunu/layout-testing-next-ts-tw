import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const headerStyle = `absolute top-0 h-[60px] w-full flex justify-center text-white z-30 ${
      router.asPath === '/' ? '' : 'bg-[#403A6C] shadow-lg'
    }`


    return (
        <Layout
            
            title="testpage"
            className="overflow-auto"
            footerStyle="absolute bottom-0 w-full bg-[#403A6C] text-white flex justify-center"
            footerContentWidth="w-[310px] md:w-[740px] lg:w-[1000px] xl:w-[1100px] pt-20 pb-40"
            headerStyle = {headerStyle}
            headerContentWidth="w-[310px] md:w-[740px] lg:w-[1000px] xl:w-[1100px]"
        >


            <Component {...pageProps} />

        </Layout>
    )
}

export default MyApp