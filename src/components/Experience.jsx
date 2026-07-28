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


const Experience = () => {

    const tech_stack = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: github,
            title: 'GitHub',
            style: 'shadow-purple-500'
        },
        {
            id: 3,
            src: js,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: c,
            title: 'C',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: pgsql,
            title: 'PostgreSQL',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            src: reactlogo,
            title: 'React.js',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: tailwind,
            title: 'Tailwind-CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 10,
            src: node,
            title: 'Node.js',
            style: 'shadow-green-500'
        },
        {
            id: 11,
            src: UE,
            title: 'Unreal Engine 5',
            style: 'shadow-white-500'
        },
        {
            id: 12,
            src: jv,
            title: 'Java',
            style: 'shadow-orange-500'
        },
        {
            id: 13,
            src: an,
            title: 'Android',
            style: 'shadow-green-500'
        },
        {
            id: 14,
            src: ex,
            title: 'Express.js',
            style: 'shadow-black-500'
        },
        {
            id: 15,
            src: rn,
            title: 'React Native',
            style: 'shadow-blue-500'
        },
        {
            id: 16,
            src: jupyter,
            title: 'Jupyter Notebook',
            style: 'shadow-orange-500'
        },
    ]

  return (
        <section name='experience' className='section-shell px-4 py-12 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-6xl'>
                <div className='mb-8 max-w-2xl'>
                    <p className='section-eyebrow'>Experience</p>
                    <h2 className='section-title mt-4'>Tools and technologies that show up across the work.</h2>
                </div>

                <div className='section-card rounded-[2rem] p-6 sm:p-8'>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
                        {tech_stack.map(({id,src,title}) => (
                            <div key={id} className='glass-panel group flex flex-col items-center rounded-3xl p-4 text-center transition hover:-translate-y-1 hover:bg-white/10'>
                                <div className='flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 p-3'>
                                    <img src={src} alt={title} className='max-h-full max-w-full object-contain' />
                                </div>
                                <p className='mt-4 text-sm font-medium text-slate-100'>{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Experience
