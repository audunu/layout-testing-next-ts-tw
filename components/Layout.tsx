import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children?: ReactNode
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  footerStyle: any
  headerStyle: any
=======
  title?: string
>>>>>>> parent of 38299e7... header and footer in grid
=======
  title?: string
>>>>>>> parent of 38299e7... header and footer in grid
=======
  title?: string
>>>>>>> parent of 38299e7... header and footer in grid
}

const Layout = ({ children, footerStyle, headerStyle }: Props) => (
  <div>
    <Head>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <title>Test</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header headerStyle={headerStyle}></Header>

    {children}
    <Footer footerStyle={footerStyle} footerContentWidth={footerContentWidth}></Footer>
=======
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
=======
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
>>>>>>> parent of 38299e7... header and footer in grid
=======
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
>>>>>>> parent of 38299e7... header and footer in grid
    <Header
      headerStyle={headerStyle}
      headerContentWidth={headerContentWidth}></Header>
    
   
    {children}
    <Footer
      footerStyle = {footerStyle}
      footerContentWidth = {footerContentWidth}></Footer>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
  </div>
)

export default Layout
