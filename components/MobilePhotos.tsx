import React from 'react'
import {HeroVideo} from 'react-hero-video'
import styles from './GridContainer.module.css'

function MobilePhotos() {
  return <div className={`${styles.test} relative row-start-4 row-span-4 col-start-3 col-span-3`}>
    <img src="/mobiles1.png" alt="" className="absolute w-[350px] right-0"/>
    
    
  </div>
}

export default MobilePhotos
