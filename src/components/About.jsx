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
            I am a Computer Science student at the University of Toronto with a strong background in AI, software development, and cloud computing. My experience spans machine learning model development, full-stack application design, and cloud infrastructure optimization. I have worked on projects such as an image denoiser using RBF regression, a React Native app for automated eBay listings, and a penguin species classifier using Azure ML. My focus is on building scalable, efficient, and impactful solutions that bridge the gap between data and innovation. Let’s connect and collaborate on meaningful technology-driven projects.
            </p>
        </div>
    </div>
  )
}

export default About
