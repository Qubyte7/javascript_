import React from 'react'
import Filter from './filter'
import { useState } from 'react'
import Size from './size'

const Descriprion = () => {
    const [product, setProduct] = useState("Vapor max");
  return (
    <div>
        <div className="product-description grid grid-cols-1 gap-3">
          <p className="title">{product}</p>
          <div className="review flex flex-row gap-3">
            <img src="/images/star.svg" alt=" star" />
            <p className="font-lexend font-bold">4.2k reviews</p>
          </div>
          <Filter/>
          <p className="subtitle">Product description</p>
          <p className="font-lexend text-[#7F7F7F] w-[30vw]">
            Precision-engineered for performance, style, and comfort—Nike
            empowers you to move faster, push further, and redefine your limits.
            Just Do It.
          </p>
          <p className="subtitle">Size</p>
            <Size/>
          <div className='flex flex-row gap-10'>
            <div>
              <p className="subtitle">available Quantity</p>
              <p className="font-lexend text-xl text-[#7A7A7A] ">9</p>
            </div>
            <div>
              <p className="subtitle">purchase Quantity</p>
              {/* here we have to put in a counter */}
            </div>
          </div>
          <button className="font-lexend font-bold bg-black text-white h-[3rem] rounded-md ">Buy now</button>
        </div>
    </div>
  )
}

export default Descriprion