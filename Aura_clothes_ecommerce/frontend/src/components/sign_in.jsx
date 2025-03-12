import React from 'react'
import '../App.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const SignIn = () => {
    return (
        <div className="auth_page md:flex md:flex-col">
            <div className="login_page">
                <div className="flex flex-row gap-15">
                    <img src="/images/logo_black.svg"  alt="aura logo"/>
                    <h1 className='text-7xl font-display-crash-medium'>Aura</h1>
                </div>
                <p className='font-poppins text-4xl'>Login</p>
                <div className="auth_form">
                    <form className="flex flex-col gap-5">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <p className='flex align-middle justify-center '>or</p>
                        <button className='wide-btn-black-shadow flex justify-center '><img src="/images/google.svg" alt='google-logo'/></button>
                        <button className=" wide-btn bg-black text-white font-lexend text-[1.2rem]"><Link to="/aura/home/allproducts">Login</Link></button>
                        <p className='font-lexend font-light flex justify-center flex-row gap-2'>Don't have an account ? <strong>Signup</strong> <FaArrowRightLong/></p>
                    </form>
                </div>
            </div>
            <div className="signup_page">
            <div className="flex flex-row gap-15">
                    <img src="/images/logo_white.svg"  alt="aura logo"/>
                    <h1 className='text-7xl font-display-crash-medium'>Aura</h1>
                </div>
                <p className='font-poppins text-4xl'>Signup</p>
                <div className="auth_form">
                    <form className="flex flex-col gap-5">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <p className='flex align-middle justify-center '>or</p>
                        <button className='wide-btn-white-shadow  flex justify-center '><img src="/images/google.svg" alt='google-logo'/></button>
                        <button className=" wide-btn bg-white text-black font-lexend text-[1.2rem]">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignIn
