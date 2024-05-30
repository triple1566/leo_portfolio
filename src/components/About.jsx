import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-{#FFFFFF} text-{#0c0e3e}'>
      
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-[80%] h-full sm:w-[70%]'>
            <div className='pb-8'>
                <p className='text-[30px] font-bold inline border-b-4 border-black sm:text-[60px]'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            Welcome to my portfolio website! I'm an avid Unreal Engine developer with a strong passion for creating immersive and dynamic experiences. Currently, I'm deep into the development of an exciting FPS game, leveraging my expertise in Unreal Engine and its powerful Blueprint system to bring my vision to life.
            </p>
            <p><br /></p>
            <p className='text-xl'>
            With a solid foundation in frontend development, I specialize in crafting seamless and interactive web interfaces using React.js and JavaScript. My programming skills extend to Python, C, C++, and SQL, allowing me to tackle complex problems and deliver robust solutions across various platforms.
            Explore my portfolio to see the projects that showcase my skills and creativity. Whether it's game development, frontend design, or backend logic, I am dedicated to pushing the boundaries of technology and delivering top-notch results. Let's create something extraordinary together!
            </p>
        </div>
    </div>
  )
}

export default About
