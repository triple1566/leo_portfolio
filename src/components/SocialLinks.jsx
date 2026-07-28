import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from'react-icons/bs';
import WaktapulseLogo from '../assets/portfolio/Logo.png';


const SocialLinks = () => {

  const links=[
    {
      id:1,
      child:(
        <>
          LinkedIn<FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/leoj1566/',
      style: 'rounded-tr-md'
    },
    {
      id:2,
      child:(
        <>
          Github<FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/triple1566',
      style: 'rounded-tr-md'
    },
    {
      id:3,
      child:(
        <>
          Mail<HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:ljhub1566@gmail.com',
      style: 'rounded-tr-md'
    },
    {
      id:4,
      child:(
        <>
          Resume<BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: '/JEONG SOOCHARN - RESUME.pdf',
      style: 'rounded-tr-md',
      download: true,
    },
    {
      id:5,
      child:(
        <>
          <p className='text-[30px], font-SDSwagger text-[#ffffff]'>WAKTAPULSE</p><img src={WaktapulseLogo} alt="WaktapulseLogo" className='scale-[40%] ml-[-17px]'/>
        </>
      ),
      href: 'https://www.instagram.com/leopard1566/?__pwa=1',
      style: 'rounded-[50px] bg-gradient-to-r from-[#252525] to-[#131313] text-[#00FFA3]',
      download: true,
    }
  ];

  return (
    <div className='fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block'>
      <ul className='space-y-3'>
        {links.map(({id, child, href, style, download}) => (
            <li key = {id} className={`glass-panel group flex w-44 items-center justify-between overflow-hidden rounded-full px-4 py-3 text-slate-100 transition duration-300 hover:translate-x-2 hover:bg-cyan-400 hover:text-slate-950 ${style}`}>
              <a href={href} className='flex w-full items-center justify-between gap-3 text-sm font-medium' download={download} target='_blank' rel='noreferrer'>
                {child}
              </a>
            </li>))}


      </ul>
    </div>
  );
};

export default SocialLinks
