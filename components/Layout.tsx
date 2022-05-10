import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children?: ReactNode
  footerStyle: any
  headerStyle: any
}

const Layout = ({ children, footerStyle, headerStyle }: Props) => (
  <div>
    <Head>
      <title>Test</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header headerStyle={headerStyle}></Header>

    {children}
    <Footer footerStyle={footerStyle} footerContentWidth={footerContentWidth}></Footer>
  </div>
)

export default Layout
