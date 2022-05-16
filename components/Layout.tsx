import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import GridContainer from './GridContainer'
import FlexContainer from './FlexContainer'
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
  <div className='box-border flex flex-col items-center h-screen'>
    
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header></Header>
      <div className='md:w-[1024px] xl:w-[1024px]'>
        <GridContainer>
          {children}
        </GridContainer>
      </div>
      <Footer></Footer>
    
  </div>
)

export default Layout
