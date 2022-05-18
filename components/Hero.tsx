import React from 'react'


function Hero() {
  return <div className='absolute md:w-[1248px] xl:w-[1024px] xl:left-0 md:left-[-300px] top-0 z-[-1]'>
      <video autoPlay loop muted className="overflow-hidden object-fill">
          <source src="/promovideo2.mp4" type="video/mp4" />
        </video>
    {/* <img src="/background2.jpeg" alt="" className="w-auto max-w-[100%] overflow-hidden" /> */}

  </div>
}

export default Hero
