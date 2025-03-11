import React from 'react'

const Card = () => {
  return (
    
    <div>
        <div className='card w-[19rem] rounded-xl bg-[#EFEFEF] flex flex-col justify-between gap-5'>
            <img src='/images/google.svg' alt='product-image' className='h-[32vh]'/>
            <div className='flex justify-between'>
                <div className='description'>
                    <p className='font-display-crash-semibold text-2xl '>Vapor max</p>
                    <div className='flex gap-1'>
                        <p className='font-display-crash-medium'>$120</p>
                        <img src='/images/star.svg' alt='star'/> 
                        <p className='font-display-crash-medium text-sm flex items-end'>4.2</p>
                    </div>
                </div>
                <div className='quantity flex items-end '>
                    <p className='font-display-crash-medium text-[#717171]'>in stock : 9</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card