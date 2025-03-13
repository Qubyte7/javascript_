import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search_box = () => {
  return (
    <div className="relative">
    <FaSearch className="absolute top-5 left-3 text-gray-400 my-auto" />
    <input
      type="text"
      className="pl-90  w-[40vw] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search..."
      maxLength="50"
    />
  </div>
  )
}

export default Search_box