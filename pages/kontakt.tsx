import ContactForm from '../components/contactForm/ContactForm'

import { MenuProvider } from '../contexts/menu-context'
import MobileMenu from '../components/Menus/MobileMenu'
import NewContainer from '../components/containers/NewContainer'

import React from 'react'

import styles from '../components/GridContainer.module.css'

function KontaktOss() {
  return (
    <div className='col-start-3 col-span-6 flex justify-center'>
      <ContactForm
        gridArea={'firstCenter'}
        title="Kontakt oss"
        contactFormBox="w-[310px] md:w-auto shadow-xl z-20 bg-black opacity-80 mt-[170px] md:mt-[200px] rounded-lg"
        contactFormContainer="flex justify-self-center -mt-[150px] mb-[20px] md:mb-[50px]"
        titleStyle="text-4xl lg:text-6xl lg:w-[400px] xl:w-[450px] mt-[20px] text-center text-white mx-2"
        subTitleStyle="text-[0.9rem] lg:text-[1.1rem] text-white font-normal text-center md:w-[300px] lg:w-[350px] mt-2 mb-2 mx-2"
        subTitle="Skriv inn din melding til oss. Vi besvarer alle henvendelser innen 48 timer."
        submittedFormSuccess="flex justify-center -mt-[270px] md:-mt-[150px] mb-[100px]"
      />
    </div>
  )
}

export default KontaktOss

