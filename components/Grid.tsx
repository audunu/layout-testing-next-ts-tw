import React from 'react'

function Grid({ children }: any) {
  return <div className='gap-x-20 grid grid-cols-12 grid-rows-6'>{children}</div>
}

export default Grid
