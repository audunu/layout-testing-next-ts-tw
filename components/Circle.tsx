import React from 'react'


function Circle() {
  return <div className='relative text-white row-start-5 row-span-3 col-start-6 col-span-3'>
    <div className='absolute text-sm top-0 bg-opacity-40 rounded-[50%] h-[250px] w-[250px] bg-black'>
      
      <div className='flex flex-col absolute left-[30%] top-[10%]'>
        <svg className="self-center w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
        <div className=''>Bedre samtaler</div>
      </div>
      <div className='flex flex-col absolute top-[42%] left-2'>
        <svg className="self-center w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <div className=''>Bedre bilder</div>
      </div>
      <div className='flex flex-col absolute top-[42%] right-2'>
        <svg className="self-center w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
        <div className=''>Bedre profil</div>
      </div>
      <div className='flex flex-col absolute left-[35%] bottom-[30px]'>
        <svg className="self-center w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
        <div className=''>Bedre dater</div>
      </div>
    </div>



  </div>
}

export default Circle
