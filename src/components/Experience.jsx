import React from 'react'

//import blender from "../assets/Blender.png";
import c from "../assets/C.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import node from "../assets/node.png";
import jupyter from "../assets/Jupyter.png";
import pgsql from "../assets/Postgresql.png";
import python from "../assets/python.png";
import reactlogo from "../assets/react.png";
//import subsP from "../assets/SubstancePainter.png";
import tailwind from "../assets/tailwind.png";
import UE from "../assets/UnrealEngine.png";
import jv from "../assets/javalogo.png";
import an from "../assets/Android_robot.png";
import ex from "../assets/express-js.png";
import rn from "../assets/react-native.png";

const experienceCategories = [
    {
        title: 'App',
        description: 'Web and mobile application work.',
        items: [
            { src: html, title: 'HTML' },
            { src: css, title: 'CSS' },
            { src: js, title: 'Javascript' },
            { src: reactlogo, title: 'React.js' },
            { src: tailwind, title: 'Tailwind-CSS' },
            { src: node, title: 'Node.js' },
            { src: ex, title: 'Express.js' },
            { src: jv, title: 'Java' },
            { src: an, title: 'Android' },
            { src: rn, title: 'React Native' },
            { src: github, title: 'GitHub' },
        ],
    },
    {
        title: 'Applied AI',
        description: 'Practical AI-enabled project tooling and experimentation.',
        items: [
            { src: python, title: 'Python' },
            { src: jupyter, title: 'Jupyter Notebook' },
            { src: pgsql, title: 'PostgreSQL' },
        ],
    },
    {
        title: 'Machine Learning',
        description: 'Notebook-driven model exploration and data workflows.',
        items: [
            { src: python, title: 'Python' },
            { src: jupyter, title: 'Jupyter Notebook' },
            { src: c, title: 'C' },
            { src: pgsql, title: 'PostgreSQL' },
        ],
    },
    {
        title: 'Game Dev',
        description: 'Real-time systems and interactive experiences.',
        items: [
            { src: UE, title: 'Unreal Engine 5' },
            { src: c, title: 'C' },
            { src: github, title: 'GitHub' },
        ],
    },
];

const Experience = () => {
  return (
        <section name='experience' className='section-shell px-4 py-12 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-6xl'>
                <div className='mb-8 max-w-2xl'>
                    <p className='section-eyebrow'>Experience</p>
                    <h2 className='section-title mt-4'>Tools and technologies grouped by the kind of work they support.</h2>
                </div>

                <div className='grid gap-6 xl:grid-cols-2'>
                    {experienceCategories.map(({ title, description, items }) => (
                        <article key={title} className='section-card rounded-[1.6rem] p-6 sm:p-8'>
                            <div className='mb-6'>
                                <p className='text-xs uppercase tracking-[0.24em] text-cyan-200/70'>{title}</p>
                                <p className='mt-2 text-sm leading-7 text-slate-300'>{description}</p>
                            </div>

                            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
                                {items.map(({ src, title: itemTitle }) => (
                                    <div key={itemTitle} className='glass-panel group flex flex-col items-center rounded-[1.25rem] p-4 text-center transition hover:-translate-y-1 hover:bg-white/10'>
                                        <div className='flex h-20 w-20 items-center justify-center rounded-[1rem] bg-white/5 p-3'>
                                            <img src={src} alt={itemTitle} className='max-h-full max-w-full object-contain' />
                                        </div>
                                        <p className='mt-4 text-sm font-medium text-slate-100'>{itemTitle}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default Experience
