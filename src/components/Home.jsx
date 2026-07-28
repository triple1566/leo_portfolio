import React from 'react';
import HeroImage from "../assets/heroImage.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-scroll';



const Home = () => {
  return (
        <section name='home' className='section-shell px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36'>
            <div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]'>
                <div className='space-y-8'>
                    <div className='section-card soft-shadow inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-slate-200/80'>
                        <span className='h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.85)]' />
                        Portfolio site, refreshed with a more refined visual language.
                    </div>

                    <div className='space-y-6'>
                        <p className='section-eyebrow'>Welcome</p>
                        <h1 className='max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl'>
                            Leo Jeong, building work that feels sharp, practical, and memorable.
                        </h1>
                        <p className='max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl'>
                            Explore to see my works.
                        </p>
                    </div>

                    <div className='flex flex-col gap-4 sm:flex-row'>
                        <Link
                            to='portfolio'
                            duration={500}
                            smooth
                            className='inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]'
                        >
                            View Portfolio
                            <FaArrowRightLong />
                        </Link>
                        <Link
                            to='contact'
                            duration={500}
                            smooth
                            className='inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
                        >
                            Contact Me
                        </Link>
                    </div>

                    <a
                        href='/JEONG%20SOOCHARN%20-%20RESUME.pdf'
                        download
                        className='inline-flex w-fit items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950 sm:hidden'
                    >
                        Download Resume
                    </a>

                    <div className='grid gap-4 sm:grid-cols-3'>
                        {[
                            ['Projects', '8 featured pieces'],
                            ['Stack', 'Web, tools, and game tech'],
                            ['Focus', 'Polish and utility'],
                        ].map(([label, value]) => (
                            <div key={label} className='section-card rounded-3xl p-4'>
                                <p className='text-xs uppercase tracking-[0.24em] text-slate-400'>{label}</p>
                                <p className='mt-2 text-sm font-semibold text-white'>{value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='relative mx-auto w-full max-w-xl'>
                    <div className='absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-cyan-400/20 via-sky-500/10 to-fuchsia-500/10 blur-2xl' />
                    <div className='section-card soft-shadow relative overflow-hidden rounded-[2rem] p-4 sm:p-6'>
                        <img
                            src={HeroImage}
                            alt='Leo portrait'
                            className='aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center'
                        />

                        <div className='mt-4 grid gap-4 sm:grid-cols-2'>
                            <div className='glass-panel rounded-3xl p-4'>
                                <p className='text-xs uppercase tracking-[0.24em] text-cyan-200/70'>Current mode</p>
                                <p className='mt-2 text-sm font-medium text-white'>Refining and rebuilding</p>
                            </div>
                            <div className='glass-panel rounded-3xl p-4'>
                                <p className='text-xs uppercase tracking-[0.24em] text-cyan-200/70'>What this is</p>
                                <p className='mt-2 text-sm font-medium text-white'>A clearer portfolio experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Home
