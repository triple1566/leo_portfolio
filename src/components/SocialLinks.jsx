import React, { useEffect, useState } from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from'react-icons/bs';


const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let closeTimeoutId;

    const handleMouseMove = (event) => {
      if (window.innerWidth < 1024) {
        return;
      }

      if (event.clientX <= 32) {
        window.clearTimeout(closeTimeoutId);
        setIsOpen(true);
        return;
      }

      closeTimeoutId = window.setTimeout(() => {
        setIsOpen(false);
      }, 140);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.clearTimeout(closeTimeoutId);
    };
  }, []);

  const links=[
    {
      id:1,
      child:(
        <>
          LinkedIn<FaLinkedin size={24}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/leoj1566/',
      style: 'rounded-tr-md'
    },
    {
      id:2,
      child:(
        <>
          Github<FaGithub size={24}/>
        </>
      ),
      href: 'https://github.com/triple1566',
      style: 'rounded-tr-md'
    },
    {
      id:3,
      child:(
        <>
          Mail<HiOutlineMail size={24}/>
        </>
      ),
      href: 'mailto:ljhub1566@gmail.com',
      style: 'rounded-tr-md'
    },
    {
      id:4,
      child:(
        <>
          Resume<BsFillPersonLinesFill size={24}/>
        </>
      ),
      href: '/JEONG SOOCHARN - RESUME.pdf',
      style: 'rounded-tr-md',
      download: true,
    }
  ];

  return (
    <div
      className={`fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block ${isOpen ? 'w-44' : 'w-4'}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`glass-panel soft-shadow overflow-hidden rounded-r-[1.4rem] border-l-0 transition-all duration-300 ease-out ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-[calc(100%-1rem)] opacity-95'}`}>
        <div className='absolute left-0 top-0 h-full w-4 bg-cyan-400/20' />
      <ul className='space-y-3 p-3 pl-4'>
        {links.map(({id, child, href, style, download}) => (
            <li key = {id} className={`group flex w-36 items-center justify-between overflow-hidden rounded-[1rem] px-3 py-2.5 text-slate-100 transition duration-300 hover:translate-x-2 hover:bg-cyan-400 hover:text-slate-950 ${style}`}>
              <a href={href} className='flex w-full items-center justify-between gap-2 text-xs font-medium' download={download} target='_blank' rel='noreferrer'>
                {child}
              </a>
            </li>))}


      </ul>
      </div>
    </div>
  );
};

export default SocialLinks
