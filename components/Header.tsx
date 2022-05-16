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
      <nav className='flex gap-[10px]'>
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
    <div className='text-black static w-[1024px] xl:w-[1024px] h-[60px] text-white pr-4 pl-4'>
      <div className='w-full flex justify-between items-center'>
        <Link href='./'>
          <a className='flex justify-center text-lg'>
            <img className='w-8 h-8 mb-2' src='/logo.svg'></img>
            <div className='flex items-center'>
              <p className='text-[#F80066] font-bold'>Dating</p>
              <p>siden</p>
            </div>
          </a>
        </Link>
        {navigation}
      </div>
    </div>
  )
}

export default Header
