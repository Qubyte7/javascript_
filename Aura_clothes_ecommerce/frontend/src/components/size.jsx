import React, { useState } from 'react'

const Size = () => {
    const [size,setSize] = useState("9")
  return (
    <div className='flex flex-row gap-3'>
    <div className="filter font-lexend font-bold text-black bg-white border-solid border-2 border-[#DFDFDF] rounded-full ">
        {size}
    </div>
</div>
  )
}

export default Size