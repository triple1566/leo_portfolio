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
            I’m a Computer Science student at the University of Toronto with a passion for AI, software development, and cloud computing ☁️💡. I specialize in machine learning, full-stack development, and scalable cloud solutions, combining technical expertise with innovative problem-solving.

From building an RBF-based image denoiser 🖼️ and a React Native eBay listing app 📱 to optimizing cloud infrastructure, I love tackling complex challenges with efficient, data-driven solutions ⚡.

Let’s connect and create something impactful! 🚀
            </p>
        </div>
    </div>
  )
}

export default About
