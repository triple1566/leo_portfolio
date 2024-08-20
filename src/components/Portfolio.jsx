import React from 'react';
import UE1 from "../assets/portfolio/UE1.jpeg";
import UE2 from "../assets/portfolio/UE2.jpeg";
import TAAMapp from "../assets/portfolio/TAAMapp.png";
import TODOlist from "../assets/portfolio/TODOlist.png"

//base margin:  w-[80%] sm:w-[70%]

const Portfolio = () => {

  const portfolios=[
    {
      id: 1,
      src: UE1,
      text: "HUD/UI Demo",
      link: "https://youtu.be/SeTS6ctvShU"
    },
    {
      id: 2,
      src: UE2,
      text: "FPV-TPV Server Replication Demo",
      link: "https://youtu.be/RE01SPaD6E4"
    },
    {
      id: 3,
      src: TAAMapp,
      text: "Toronto Asian Arts App",
      link: "https://youtu.be/Cmdpo_1TH80"
    },
    {
      id: 4,
      src: TODOlist,
      text: "Leo's ToDo List",
      link: "https://leo-pern-todo-650a2faaa317.herokuapp.com/"
    },
  ];

  return (
    <div name="portfolio" className='w-full text-[#0c0e3e] md: h-full' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center h-full w-[90%] sm:w-[80%]'>

        <div className='pb-12'>
          <p className='text-[30px] font-bold inline border-b-4 sm:text-[40px]'>Portfolio</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
              portfolios.map(({id,src,text,link})=>(
              <div key='id' className='bg-gradient-to-br from-white to-gray-300 shadow-md rounded-lg text-white'>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                  <div href='link' className='flex items-center justify-center text-gray-600 font-semibold text-center'>
                    <button className='w-full px-6 py-3 m-4 duration-200 bg-gradient-to-br from-gray-300 to-white rounded-md hover:text-[#ff0059]'><a href={link}>{text}</a></button>
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
