import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Update = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center ">
      <div className="w-[50vw] shadow-2xl update-form rounded-lg max-lg:w-[80vw] max-sm:w-[100vw]">
        <div className="aura-header flex flex-row gap-15 justify-center ">
          <img src="/images/logo_black.svg" alt="aura logo" className='w-[3rem]' />
          <h1 className='text-5xl font-display-crash-medium'>Aura</h1>
        </div>
        <form className="flex flex-col gap-3">
          <label className="subtitle">Name</label>
          <input type="text" />
          <label className="subtitle">Email</label>
          <input type="email" />
          <label className="subtitle">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border rounded-md"
              maxLength="50"
            />
            <div
              className="absolute inset-y-0 right-6 pl-9 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button className="bg-[#3E5D8C] h-[4rem] subtitle rounded-md text-white">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;