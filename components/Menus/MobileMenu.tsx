import useWindowSize from '../../utils/windowSize'
import { XIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useMenu, useMenuUpdate } from '../../contexts/menu-context'
import disableScroll from '../../utils/noScroll'
import React, { useEffect } from 'react'

function MobileMenu() {
  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth! < 1024

  const menuStatusTrue = useMenu()
  const toggleMenu = useMenuUpdate()

  useEffect(() => {
    if (menuStatusTrue) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [menuStatusTrue])

  if (isMobile && menuStatusTrue) {
    return (
      <div className={`absolute h-[100vh] top-0 w-[100%] z-40 bg-black opacity-90`}>
        <div className="text-white">
          <div className="flex justify-between py-6 px-5">
            <div className="flex">
              <p className="font-bold text-lg">PT</p>
              <p className="text-lg">match</p>
            </div>
            <div>
              <XIcon className="h-5 w-5 text-blue-[#403A6C] cursor-pointer" onClick={toggleMenu} />
            </div>
          </div>
          <nav>
            <ul className="flex flex-col gap-4 items-center mt-8">
              <li>
                <Link href="./">
                  <a>Hjem</a>
                </Link>
              </li>
              <li>
                <Link href="./kontakt-oss">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li>
                <Link href="./om-oss">
                  <a>Om oss</a>
                </Link>
              </li>
              <li>
                <Link href="./personvern">
                  <a>Juridisk</a>
                </Link>
              </li>
              <li>
                <Link href="./artikler">
                  <a>Artikler</a>
                </Link>
              </li>
              <li>
                <Link href="./bmi-kalkulator">
                  <a>BMI-kalkulator</a>
                </Link>
              </li>
              <li>
                <Link href="./kaloriberegner">
                  <a>Kaloriberegner</a>
                </Link>
              </li>
              <li>
                <Link href="./for-pt">
                  <a>Er du PT?</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default MobileMenu
