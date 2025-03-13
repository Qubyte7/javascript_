import React, { useState } from 'react'
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const Profile = () => {
    const [name,setName] = useState('Qubyte_4');
    const [email,setEmail] = useState('Qubyte!213@gmail.com');
    const [password,setPassword] = useState('')

    return (
        <div className='profile'>
            <div className="aura-header flex flex-row gap-15 justify-center">
                <img src="/images/logo_black.svg"  alt="aura logo" className='w-[3rem]'/>
                <h1 className='text-5xl font-display-crash-medium'>Aura</h1>
            </div>
            <div className='profile-content flex flex-row justify-center items-center gap-20 max-lg:flex-col'>
                <div className='grid grid-cols-1 gap-5'>
                <img src='/images/profile_img.jpg' alt='profile img' className='w-[20rem] h-[20rem] rounded-md'/>
                <button className='bg-black w-[20rem] h-[3rem] rounded-md text-white flex justify-center items-center'><MdOutlineFileUpload/></button>
                <button className='font-lexend flex flex-row gap-3 shadow-md w-[20rem] h-[3rem] rounded-md justify-center items-center'><MdOutlineFileUpload/>Log Out</button>
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='profile_info '>
                    <p className='font-poppins font-bold text-[2rem]'>Name:</p>
                    <p className='font-poppins text-[#717171] text-[1rem] '>{name}</p>
                    </div>
                    <div>
                    <p className='font-poppins font-bold text-[2rem]'>Email:</p>
                    <p className='font-poppins text-[#717171] text-[1rem] '>{email}</p>
                    </div>
                    <div>
                    <p className='font-poppins font-bold text-[2rem]'>Password:</p>
                    <p className='font-poppins text-[#717171] text-[1rem]'>{name}</p>
                    </div>
                    <button className='bg-[#3E5D8C] text-white flex justify-center items-center w-[20rem] h-[3rem] rounded-md font-lexend'>update</button>
                    <button className='bg-[#FFDADA]  rounded-md w-[20rem] h-[3rem] text-[#EC4343] flex justify-center items-center border-2 border-solid border-[#EC4343] gap-3 font-lexend'><FaRegTrashAlt/> Delete account</button>

                </div>
                

            </div>
        </div>
    )
}
export default Profile
