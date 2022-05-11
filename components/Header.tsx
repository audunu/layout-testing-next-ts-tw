import React from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
import { useMenuUpdate } from '../contexts/menu-context'
import useWindowSize from '../utils/windowSize'

function Header() {
  const toggleMenu = useMenuUpdate()
  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth! < 1024
  let navigation: any

  if (!isMobile) {
    navigation = (
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/users'>
          <a>Users List</a>
        </Link>
        <a href='/api/users'>Users API</a>
      </nav>
    )
  } else {
    navigation = <MenuIcon className='h-6 w-6 cursor-pointer' onClick={toggleMenu} />
  }

  return (
    <div className='fixed top-0 left-0 right-0 xl:left-40 xl:right-40 h-[60px] bg-black flex justify-center text-white z-30'>
      <div className='w-full flex justify-between items-center'>
        <Link href='./'>
          <a className='flex justify-center text-lg'>
            <img className='w-8 h-8 mb-2' src='/logo.svg'></img>
            <div className='flex items-center'>
              <p className='text-[#F80066] font-bold'>NEW</p>
              <p>site</p>
            </div>
          </a>
        </Link>
        {navigation}
      </div>
    </div>
  )
}

export default Header
