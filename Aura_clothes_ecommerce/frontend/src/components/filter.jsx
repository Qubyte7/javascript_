import React, { useState } from 'react'

const Filter = () => {
    const [filter,setFilter] = useState('Running')
  return (
    <div className='flex flex-row gap-3'>
        <div className="filter font-lexend font-bold text-[#9A9999] bg-[#EFEFEF] rounded-full ">
            {filter}
        </div>
    </div>
  )
}

export default Filter