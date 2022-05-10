import Link from 'next/link'
import { ChatAltIcon } from '@heroicons/react/solid'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'

interface ChildProps {
  footerStyle: any
  footerContentWidth: any
}

function Footer({ footerStyle, footerContentWidth }: ChildProps) {
  return (
    <footer className={footerStyle}>
      <div className={`${footerContentWidth} md:flex justify-between`}>
        <div>
          <div className={`flex justify-between items-center -ml-1`}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <Link href='./'>
              <a className='flex justify-center text-lg'>
                <img className='w-8 h-8 mb-2' src='/logo.svg'></img>
                <div className='flex items-center '>
                  <p className='text-[#F80066] text-xl font-bold'>PT</p>
                  <p className='text-xl'>match</p>
=======
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
            <Link href="./">
              <a className="flex justify-center text-lg">
                <img className="w-8 h-8 mb-2" src="/logo.svg"></img>
                <div className="flex items-center ">
                  <p className="text-[#F80066] text-xl font-bold">PT</p>
                  <p className="text-xl">match</p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
                </div>
              </a>
            </Link>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className=''>
            <p className='text-sm w-[300px]'>
              Vi matcher deg med en PT som møter dine behov med tanke på pris, kompetanse og bosted. Tjenesten vår er
              gratis og uforpliktene, og du velger helt selv om du ønsker å benytte deg av tilbudene du mottar.
            </p>
            <div className='flex mt-2'>
              <ChatAltIcon className='w-5' />
              <Link href='/kontakt-oss'>
                <a className='ml-2 text-sm hover:underline'>Kontakt oss</a>
=======
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
          <div className="">
            <p className="text-sm w-[300px]">
              Vi matcher deg med en PT som møter dine behov med tanke på pris, kompetanse og bosted. Tjenesten
              vår er gratis og uforpliktene, og du velger helt selv om du ønsker å benytte deg av tilbudene du
              mottar.
            </p>
            <div className="flex mt-2">
              <ChatAltIcon className="w-5" />
              <Link href="/kontakt-oss">
                <a className="ml-2 text-sm hover:underline">Kontakt oss</a>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
              </Link>
            </div>
          </div>
        </div>
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <p className='font-bold text-lg mb-6 mt-6 md:mt-0'>Diverse</p>
          <ul className='flex flex-col gap-6'>
            <li>
              <Link href='/personvern'>
                <a className='hover:underline'>Personvern</a>
              </Link>
            </li>
            <li>
              <Link href='/kontakt-oss'>
                <a className='hover:underline'>Vanlige spørsmål</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='hover:underline'>Finn en PT nå</a>
=======
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
          <p className="font-bold text-lg mb-6 mt-6 md:mt-0">Diverse</p>
          <ul className="flex flex-col gap-6">
            <li>
              <Link href="/personvern">
                <a className="hover:underline">Personvern</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakt-oss">
                <a className="hover:underline">Vanlige spørsmål</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Finn en PT nå</a>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
              </Link>
            </li>
          </ul>
        </div>
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <p className='font-bold text-lg mb-6 mt-6 md:mt-0'>Artikler</p>
          <ul className='flex flex-col gap-6'>
            <li>
              <Link href='/kontakt-oss'>
                <a className='hover:underline'>Hvorfor PT?</a>
              </Link>
            </li>
            <li>
              <Link href='/kontakt-oss'>
                <a className='hover:underline'>Utdannelse</a>
              </Link>
            </li>
            <li>
              <Link href='/kontakt-oss'>
                <a className='hover:underline'>Pris for PT</a>
              </Link>
            </li>
            <li>
              <Link href='/artikler'>
                <a className='hover:underline'>Alle artikler</a>
=======
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
          <p className="font-bold text-lg mb-6 mt-6 md:mt-0">Artikler</p>
          <ul className="flex flex-col gap-6">
            <li>
              <Link href="/kontakt-oss">
                <a className="hover:underline">Hvorfor PT?</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakt-oss">
                <a className="hover:underline">Utdannelse</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakt-oss">
                <a className="hover:underline">Pris for PT</a>
              </Link>
            </li>
            <li>
              <Link href="/artikler">
                <a className="hover:underline">Alle artikler</a>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
              </Link>
            </li>
          </ul>
        </div>
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <p className='font-bold text-lg mb-6 mt-6 md:mt-0'>Juridisk</p>
          <ul className='flex flex-col gap-6'>
            <li className='flex'>
              <InformationCircleIcon className='w-6 mr-2' />
              <Link href='/personvern'>
                <a className='hover:underline'>Personvernerklæring</a>
              </Link>
            </li>
            <li className='flex'>
              <SearchIcon className='w-6 mr-2' />
              <Link href='/ansvarsfraskrivelse'>
                <a className='hover:underline'>Ansvarsfraskrivelse</a>
              </Link>
            </li>
            <li className='flex'>
              <SearchIcon className='w-6 mr-2' />
              <Link href='/cookie-erklaring'>
                <a className='hover:underline'>Cookie-erklæring</a>
=======
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
          <p className="font-bold text-lg mb-6 mt-6 md:mt-0">Juridisk</p>
          <ul className="flex flex-col gap-6">
            <li className="flex">
              <InformationCircleIcon className="w-6 mr-2" />
              <Link href="/personvern">
                <a className="hover:underline">Personvernerklæring</a>
              </Link>
            </li>
            <li className="flex">
              <SearchIcon className="w-6 mr-2" />
              <Link href="/ansvarsfraskrivelse">
                <a className="hover:underline">Ansvarsfraskrivelse</a>
              </Link>
            </li>
            <li className="flex">
              <SearchIcon className="w-6 mr-2" />
              <Link href="/cookie-erklaring">
                <a className="hover:underline">Cookie-erklæring</a>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
=======
>>>>>>> parent of 38299e7... header and footer in grid
              </Link>
            </li>
          </ul>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <p className='absolute bottom-2 text-sm border-t-[1px] p-4'>PTmatch er drevet av Briwide AS - org.nr 89473499</p>
=======
      <p className="absolute bottom-2 text-sm border-t-[1px] p-4">
        PTmatch er drevet av Briwide AS - org.nr 89473499
      </p>
>>>>>>> parent of 38299e7... header and footer in grid
=======
      <p className="absolute bottom-2 text-sm border-t-[1px] p-4">
        PTmatch er drevet av Briwide AS - org.nr 89473499
      </p>
>>>>>>> parent of 38299e7... header and footer in grid
=======
      <p className="absolute bottom-2 text-sm border-t-[1px] p-4">
        PTmatch er drevet av Briwide AS - org.nr 89473499
      </p>
>>>>>>> parent of 38299e7... header and footer in grid
    </footer>
  )
}

export default Footer
