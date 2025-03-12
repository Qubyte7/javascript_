import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex h-[100vh] flex-col gap-20 justify-center  items-center'>
        <div className='flex gap-5 flex-row'>
        <img src='/images/logo_black.svg' className='w-[7vw]'/>
        <p className='font-display-crash-medium text-9xl'>AURA</p>
        </div>
        <button className='font-lexend font-bold wide-btn w-[15rem] flex justify-center items-center gap-5 bg-black text-white'><Link to="/aura/auth">Get Started <FaArrowRightLong/> </Link> </button>
    </div>
  )
}

export default Hero