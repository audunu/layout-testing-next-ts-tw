import React from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
import { useMenuUpdate } from '../contexts/menu-context'
import useWindowSize from '../utils/windowSize'

interface ChildProps {
  headerStyle: any
  headerContentWidth: any
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function Header({ headerStyle }: ChildProps) {
=======
function Header({ headerStyle, headerContentWidth }: ChildProps) {
>>>>>>> parent of 38299e7... header and footer in grid
=======
function Header({ headerStyle, headerContentWidth }: ChildProps) {
>>>>>>> parent of 38299e7... header and footer in grid
=======
function Header({ headerStyle, headerContentWidth }: ChildProps) {
>>>>>>> parent of 38299e7... header and footer in grid
  const toggleMenu = useMenuUpdate()
  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth! < 1024
  let navigation

  if (!isMobile) {
    navigation = (
      
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    
    
    )
  } else {
    navigation = <MenuIcon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
  }

  return (
    <div className={headerStyle}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className={`flex justify-between items-center`}>
        <Link href='./'>
          <a className='flex justify-center text-lg'>
            <img className='w-8 h-8 mb-2' src='/logo.svg'></img>
            <div className='flex items-center'>
              <p className='text-[#F80066] font-bold'>PT</p>
=======
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
      <div className={`${headerContentWidth} flex justify-between items-center`}>
        <Link href="./">
          <a className="flex justify-center text-lg">
            <img className="w-8 h-8 mb-2" src="/logo.svg"></img>
            <div className="flex items-center">
              <p className="text-[#F80066] font-bold">PT</p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
              <p>match</p>
            </div>
          </a>
        </Link>
        {navigation}
      </div>
    </div>
  )
}

export default Header
