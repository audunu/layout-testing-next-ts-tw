import React from 'react'

function Grid({ children }: any) {
  return <div className='relative grid grid-cols-12 grid-rows-4'>{children}</div>
}

export default Grid
