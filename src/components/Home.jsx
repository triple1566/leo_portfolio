import React from 'react';
import HeroImage from "../assets/heroImage.PNG";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-r from-red-50 to-blue-500'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full leading-loose'>
                <h2 className='text-4xl tracking-tight md:text-7xl font-bold text-[#0c0e3e]'>
                    Welcome To My Portfolio!
                </h2>
                <p className='text-[#282828] py-4 max-w-md'>
                    My description goes here
                </p>
                <div>
                    <button>
                        Portfolio
                        <span>
                            <FaRegArrowAltCircleRight />
                        </span>
                    </button>
                </div>
            </div>
            <div className='px-10'>
                <img src={HeroImage} alt="myProfile"
                className='rounded-2xl mx-auto w-2/3 sm:w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Home
