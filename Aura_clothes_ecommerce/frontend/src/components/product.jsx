import React, { useState } from 'react'

const Product = () => {
    const [product,setProduct] = useState('Vapor max')
  return (
    <div>
        <div className="aura-header flex flex-row gap-15 justify-center">
                <img src="/images/logo_black.svg"  alt="aura logo" className='w-[3rem]'/>
                <h1 className='text-5xl font-display-crash-medium'>Aura</h1>
        </div>
        <div className='product-content'>
            <div className=''>
            <img src="/images/product.png" alt="product image" />
        </div>
        <div className='product-description'>
                <p className='font-display-crash-semibold'>{product}</p>
                <div>
                    <img src="/images/star.svg" alt=" star" />
                    <p className='font-lexend'>4.2k reviews</p>
                </div>
                <div className='filters'>
                    <div className='filter'>Running</div>
                    <div className='filter'>Nike</div>
                </div>
                <p className='font-poppins'>Product description</p>
                <p className='font-lexend text-[#7F7F7F] '>
                Precision-engineered for performance, style, and comfort—Nike empowers you to move faster, push further, and redefine your limits. Just Do It.
                </p>
                <p className='font-poppins'>Size</p>
                <div className='filters'>
                    <div className='filter'>Running</div>
                    <div className='filter'>Nike</div>
                </div>
                <div>
                <div>
                    <p className='font-poppins'>available Quantity</p>
                    <p className='font-poppins text-[#7A7A7A]'>9</p>
                </div>
                <div>
                    <p className='font-poppins'>available Quantity</p>
                    {/* here we have to put in a counter */}
                </div>
                </div>
                <button className='font-lexend font-bold '>Buy now</button>
            </div>
        </div>

    </div>
  )
}

export default Product