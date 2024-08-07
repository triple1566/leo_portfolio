import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-{#FFFFFF} text-{#0c0e3e}'>
      
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-[80%] sm:w-[70%]'>
            <div className='pb-0'>
                <p className='text-[30px] font-bold inline border-b-4 border-{#0c0e3e} sm:text-[40px]'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            Welcome to my portfolio website! I'm an aspiring student developer with a strong passion for creating immersive and dynamic experiences in web, games, and applications. Currently, I'm deep into the development of an exciting FPS game, leveraging my expertise in Unreal Engine and its powerful Blueprint system to bring my vision to life.
            </p>
        </div>
    </div>
  )
}

export default About
