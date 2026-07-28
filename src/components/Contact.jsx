import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='section-shell px-4 py-12 pb-20 sm:px-6 lg:px-8'>
      <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]'>
        <div className='section-card rounded-[1.6rem] p-8 sm:p-10'>
          <p className='section-eyebrow'>Contact</p>
          <h2 className='section-title mt-4'>Let's get in touch.</h2>
          <p className='section-copy mt-4 text-lg leading-8'>
            If you want to talk projects, collaboration, or anything related to the portfolio, send a message and I’ll get back to you.
          </p>
          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {[
              ['Email', 'ljhub1566@gmail.com'],
              ['GitHub', 'triple1566'],
              ['LinkedIn', 'leoj1566'],
              ['Resume', 'Available in the side links'],
            ].map(([label, value]) => (
              <div key={label} className='glass-panel rounded-[1.25rem] p-4'>
                <p className='text-xs uppercase tracking-[0.24em] text-cyan-200/70'>{label}</p>
                <p className='mt-2 text-sm font-medium text-white'>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='section-card rounded-[1.6rem] p-6 sm:p-8'>
          <form action="https://getform.io/f/jawxjmrb" method='POST' className='grid gap-4'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <input
                type="text"
                name='name'
                placeholder='Enter your name'
                className='rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:bg-white/10'
              />
              <input
                type="email"
                name='email'
                placeholder='Enter your email'
                className='rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:bg-white/10'
              />
            </div>

            <textarea
              name='message'
              rows='9'
              placeholder='Enter your message'
              className='rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:bg-white/10'
            />

            <button className='inline-flex w-fit items-center justify-center rounded-[1rem] bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
