import React from 'react';
import UE1 from "../assets/portfolio/UE1.jpeg";
import UE2 from "../assets/portfolio/UE2.jpeg";
import Logo from "../assets/portfolio/Logo.png";
import ClubSales from "../assets/portfolio/ClubSales.png";

//base margin:  w-[80%] sm:w-[70%]

const Portfolio = () => {

  const portfolios=[
    {
      id: 1,
      src: UE1
    },
    {
      id: 2,
      src: UE2
    },
    {
      id: 3,
      src: Logo
    },
    {
      id: 4,
      src: ClubSales
    },
  ];

  return (
    <div name="portfolio" className='w-full text-{#0c0e3e} md: h-screen' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-[80%] sm:w-[70%]'>

        <div className='pb-8'>
          <p className='text-[30px] font-bold inline border-b-4 border-{#0c0e3e} sm:text-[60px]'>Portfolio</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
              portfolios.map(({id,src})=>(
                <div key='id' className='backdrop-blur bg-white/80 shadow-md rounded-lg hover:bg-gradient-to-br text-[0c0e3e] from-[#ff8eb6] to-[#ff0062] hover:text-white'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>FPS</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>UE5</button>
              </div>
            </div>
              ))
            }

        </div>


      </div>
    </div>
  );
};

export default Portfolio
