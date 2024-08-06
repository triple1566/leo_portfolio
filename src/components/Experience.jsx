import React from 'react'

import blender from "../assets/Blender.png";
import c from "../assets/C.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import node from "../assets/node.png";
import nomad from "../assets/nomad.png";
import pgsql from "../assets/Postgresql.png";
import python from "../assets/python.png";
import reactlogo from "../assets/react.png";
import subsP from "../assets/SubstancePainter.png";
import tailwind from "../assets/tailwind.png";
import UE from "../assets/UnrealEngine.png";
import jv from "../assets/javalogo.png";
import an from "../assets/Android_robot.png";


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
            src: nomad,
            title: 'Nomad Sculpt',
            style: 'shadow-red-500'
        },
        {
            id: 13,
            src: blender,
            title: 'Blender',
            style: 'shadow-red-500'
        },
        {
            id: 14,
            src: subsP,
            title: 'Substance Painter',
            style: 'shadow-red-500'
        },
        {
            id: 15,
            src: jv,
            title: 'Java',
            style: 'shadow-orange-500'
        },
        {
            id: 16,
            src: an,
            title: 'Android',
            style: 'shadow-green-500'
        },
    ]

  return (
    <div name='experience' className='w-full h-full'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center h-full text-[#0c0e3e] w-[80%] sm:w-[70%]'>
            <div className='pb-12'>
                <p className='text-[30px] font-bold inline border-b-4 sm:text-[40px]'>
                    Experience
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-gray-900 font-semibold text-center py-8 px-12 sm:px-0'>
                {
                    tech_stack.map(({id,src,title,style})=>(
                    <div key={id} className={'bg-gray-200 shadow-md hover:scale-105 duration 500 py-2 rounded-lg hover:bg-[#ff0059] hover:text-white duration-300'}>
                        <img src={src} alt="" className='w-20 mx-auto p-2'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Experience
