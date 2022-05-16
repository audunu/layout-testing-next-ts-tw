import React from 'react'


function Hero() {
  return <div className='md:fixed md:top-0 md:left-0 md:h-screen md:w-[1800px] z-[-1]'>
      <video autoPlay loop muted className="">
          <source src="/backgroundvid.mp4" type="video/mp4" />
        </video>
    {/* <img src="/background2.jpeg" alt="" className="w-auto max-w-[100%]" /> */}

  </div>
}

export default Hero
