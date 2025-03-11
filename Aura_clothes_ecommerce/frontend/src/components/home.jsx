import React from 'react'
import Card from './card'


const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-7'>
      <div className=''>
      <div className="flex flex-row gap-15">
          <img src="/images/logo_black.svg"  alt="aura logo" className='w-[3rem]'/>
          <h1 className='text-5xl font-display-crash-medium'>Aura</h1>
      </div>
      </div>
      <img src='/images/poster.png' alt='poster image' className='w-[83vw]'/>
      <input type='text' placeholder='Search...' className='w-[30rem]'/>
      <p className='font-lexend text-3xl font-bold'>Our products</p>
      <div className='grid grid-cols-4 gap-6'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>

    </div>
  )
}

export default Home