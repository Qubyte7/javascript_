import React from 'react'

const Pagenotfound = () => {
  return (
    <div>
        <div className="aura-header flex flex-row gap-15 justify-center">
        <img
          src="/images/logo_black.svg"
          alt="aura logo"
          className="w-[3rem]"
        />
        <h1 className="text-5xl font-display-crash-medium">Aura</h1>
      </div>
        <div className='flex flex-col items-center justify-center '>
        <h1 className='font-display-crash-semibold text-[15rem]'>404</h1>    
        <p className='font-display-crash text-5xl'>Page not found</p>
        </div>

    </div>
  )
}

export default Pagenotfound