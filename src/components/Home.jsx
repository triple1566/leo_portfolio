import React from 'react';
import HeroImage from "../assets/heroImage.PNG";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-r from-[#fff6f6] to-[#7db3ff]'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row leading-Mobile sm:leading-Desktop'>
            <div className='flex flex-col justify-center h-full items-center md:items-start md:pt-0 pt-60'>
                <h2 className='text-5xl tracking-tight sm:text-7xl md:leading-Home font-bold text-[#0c0e3e] text-center md:text-left'>
                    Welcome To My Portfolio!
                </h2>
                <p className='text-[#282828] py-4 max-w-md text-2xl sm:text-4xl text-center md:text-left'>
                    My description goes here
                </p>
                <div>
                    <button className='leading-Desktop'>
                        Portfolio
                        <span>
                            <FaRegArrowAltCircleRight />
                        </span>
                    </button>
                </div>
            </div>
            <div className='px-10 py-20'>
                <img src={HeroImage} alt="myProfile"
                className='rounded-2xl mx-auto w-2/3 sm:w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Home
