import React from 'react'


function Hero() {
  return <div className='absolute h-screen xl:w-[1024px] w-[1024px] z-[-1]'>
      <video autoPlay loop muted className="object-fill">
          <source src="/promovideo2.mp4" type="video/mp4" />
        </video>
    {/* <img src="/background2.jpeg" alt="" className="w-auto max-w-[100%]" /> */}

  </div>
}

export default Hero
