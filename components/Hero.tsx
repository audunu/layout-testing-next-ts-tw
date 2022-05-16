import React from 'react'


function Hero() {
  return <div className='fixed top-0 left-0 h-screen w-screen z-[-1]'>
      <video autoPlay loop muted className="">
          <source src="/backgroundvid.mp4" type="video/mp4" />
        </video>
    {/* <img src="/background2.jpeg" alt="" className="w-auto max-w-[100%]" /> */}

  </div>
}

export default Hero
