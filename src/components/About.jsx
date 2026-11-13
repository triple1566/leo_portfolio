import React from 'react'

const About = () => {
  return (
    <section name='about' className='section-shell px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]'>
        <div className='section-card rounded-[1.6rem] p-8 sm:p-10'>
          <p className='section-eyebrow'>About</p>
          <h2 className='section-title mt-4'>Toronto based Software Engineer focusing on AI Inference and Enterprise Software.</h2>
        </div>

        <div className='section-card rounded-[1.6rem] p-8 sm:p-10'>
          <p className='section-copy text-lg leading-8 sm:text-xl'>
            Hi I'm Leo. Welcome to my front porch! Please take a look around, and see what I made in the past few years.
          </p>
          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {[
              'AI',
              'Web',
              'ERP',
              'Games and 3D Engines',
            ].map((item) => (
              <div key={item} className='glass-panel rounded-[1.25rem] px-4 py-4 text-sm text-slate-200/80'>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
