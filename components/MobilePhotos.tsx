import React from 'react'
import {HeroVideo} from 'react-hero-video'
import styles from './GridContainer.module.css'

function MobilePhotos() {
  return <div className={`${styles.test} relative row-start-4 col-start-5 col-span-2 border-2`}>
    <img src="/mobile2.png" alt="" className="absolute w-[80%] rotate-[15deg] z-2"/>
    <img src="/mobile1.png" alt="" className="absolute top-[-30px] right-[100px] w-[100%] rotate-[-15deg] z-1" />
    
    
  </div>
}

export default MobilePhotos
