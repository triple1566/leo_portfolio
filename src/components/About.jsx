import React from 'react'

const About = () => {
  return (
    <section name='about' className='section-shell px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]'>
        <div className='section-card rounded-[2rem] p-8 sm:p-10'>
          <p className='section-eyebrow'>About</p>
          <h2 className='section-title mt-4'>A concise note on what you’re seeing right now.</h2>
        </div>

        <div className='section-card rounded-[2rem] p-8 sm:p-10'>
          <p className='section-copy text-lg leading-8 sm:text-xl'>
            Hi I'm Leo. Most of this stuff here is pretty outdated, so I'll be putting up a revamped portfolio soon. In the meantime, drink a cup of coffee.
          </p>
          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {[
              'Modernized structure and spacing',
              'Content stays in place for now',
              'Cleaner visual hierarchy',
              'Designed to feel more polished',
            ].map((item) => (
              <div key={item} className='glass-panel rounded-3xl px-4 py-4 text-sm text-slate-200/80'>
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
