import React from 'react'

function Grid({ children }: any) {
  return <div className='auto-rows-auto grid bg-purple-400 grid-cols-12 grid-rows-6'>{children}</div>
}

export default Grid
