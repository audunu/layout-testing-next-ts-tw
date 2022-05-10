import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title, footerStyle, footerContentWidth, headerStyle, headerContentWidth }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header
      headerStyle={headerStyle}
      headerContentWidth={headerContentWidth}></Header>
    
   
    {children}
    <Footer
      footerStyle = {footerStyle}
      footerContentWidth = {footerContentWidth}></Footer>
  </div>
)

export default Layout
