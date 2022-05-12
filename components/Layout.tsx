import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Grid from '../components/Grid'
import BehindFooter from '../components/BehindFooter'
import BehindHeader from '../components/BehindHeader'

type Props = {
  children?: ReactNode
  title?: string
  footerStyle: any
  footerContentWidth: any
  headerStyle: any
  headerContentWidth: any
}

const Layout = ({ children, title }: Props) => (
  <div className='box-border flex flex-col items-center h-screen overflow-scroll'>
    
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header></Header>
      <div className='xl:w-[78%]'>
        <Grid>
          {children}
        </Grid>
      </div>
      <Footer></Footer>
    
  </div>
)

export default Layout
