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
            Hi I'm Leo. Most of this stuff here is pretty outdated, so I'll be putting up a revamped portfolio soon. In the meantime, drink a cup of coffee.
            </p>
        </div>
    </div>
  )
}

export default About
