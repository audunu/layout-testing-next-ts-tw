import Link from 'next/link'
import { ChatAltIcon } from '@heroicons/react/solid'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'


function Footer() {
  return (
    <footer className='static w-[1024px] bg-[#403A6C] text-white flex justify-between pr-4 pl-4 pt-2 pb-2'>
      <div>
        <div className={`flex justify-between items-center`}>
          <Link href='./'>
            <a className='flex justify-center text-lg'>
              <img className='w-8 h-8 mb-2' src='/logo.svg'></img>
              <div className='flex items-center '>
                <p className='text-[#F80066] text-xl font-bold'>NEW</p>
                <p className='text-xl'>site</p>
              </div>
            </a>
          </Link>
        </div>
        <div className=''>
          <p className='text-sm w-[300px]'>
            Vi matcher deg med en PT som møter dine behov med tanke på pris, kompetanse og bosted. Tjenesten vår er
            gratis og uforpliktene, og du velger helt selv om du ønsker å benytte deg av tilbudene du mottar.
          </p>
          <div className='flex mt-2'>
            <ChatAltIcon className='w-5' />
            <Link href='/kontakt-oss'>
              <a className='ml-2 text-sm hover:underline'>Kontakt oss</a>
            </Link>
          </div>
        </div>
      </div>
      <div>
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
            </Link>
          </li>
        </ul>
      </div>
      <div>
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
            </Link>
          </li>
        </ul>
      </div>
      <div>
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
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
