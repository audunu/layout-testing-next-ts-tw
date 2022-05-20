import React from 'react'


type Props = {
  children: React.ReactNode
}
function FlexContainer({ children }: any) {
  return <div className='relative w-screen xl:w-[1024px] flex flex-col justify-center'>{children}</div>
}

export default FlexContainer
