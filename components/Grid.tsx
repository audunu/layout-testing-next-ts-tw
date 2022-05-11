import React from 'react'

function Grid({ children }: any) {
  return <div className='gap-x-10 grid grid-cols-12 grid-rows-4'>{children}</div>
}

export default Grid
