import React from 'react'

function Hero() {
  return <div className='absolute top-[0px] w-[100%] z-[-1]'>
      <video autoPlay loop muted className="xl:w-[100%]">
          <source src="/promovideo2.mp4" type="video/mp4" />
        </video>

  </div>
}

export default Hero
