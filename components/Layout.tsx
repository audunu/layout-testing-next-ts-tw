import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import FlexContainer from './FlexContainer'


type Props = {
  children?: ReactNode
  title?: string
  footerStyle?: any
  footerContentWidth?: any
  headerStyle?: any
  headerContentWidth?: any
}

const Layout = ({ children, title }: Props) => (
  <div className='box-border flex flex-col items-center w-12/12'>
    
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header></Header>
      
        <FlexContainer>
          {children}
        </FlexContainer>
      
      <Footer></Footer>
    
  </div>
)

export default Layout
