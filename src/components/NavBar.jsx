import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {


    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]//this is an array for the top navigation bar.

  return (
    <div className='flex justify-between items-center w-full h-[50px] px-4
    text-[#ffae00] bg-gradient-to-r from-[#ffffff] to-[#7db3ff] fixed'>
      <div>
        <h1 className="text-3xl md:text-5xl font-signature ml-2 cursor-pointer">
            Leo Jeong
        </h1>
      </div>
      <ul className='visibility: hidden sm:flex'>

        {links.map(({id,link})=>(
            <li key={id} className='px-4 cursor-pointer capitalize font-medium
            text-[#000000] hover:scale-105 duration-200 hover:text-[#fffcec]'>
                {link}
            </li>
        ))}
      </ul>

      <div
      onClick={()=>setNav(!nav)}
      className='cursor-pointor pr-4 z-10 text-gray-500 sm:hidden'
      >
          {nav ? <FaTimes size={30} className='cursor-pointer hover:scale-105 duration-200'/> : <FaBars size={30} className='cursor-pointer hover:scale-105 duration-200'/>}
      </div>

      {nav &&(
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#ffffff] text-[#7a7a7a] opacity-95'>
        {links.map(({id,link})=>(
              <li key={id} className='px-4 capitalize py-6 text-2xl cursor-pointer hover:scale-105 duration-200 hover:text-[#000000] hover:opacity-100'>
                  {link}
              </li>
          ))}
        </ul>
      )}

      
    </div>
  )
}

export default NavBar;
