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
      href: '/ResumeV10.pdf',
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
      href: 'https://www.instagram.com/playwaktapulse/',
      style: 'rounded-[50px] bg-gradient-to-r from-[#252525] to-[#131313] text-[#00FFA3]',
      download: true,
    }
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id, child, href, style, download}) => (

            <li key = {id} className={"flex justify-between items-center w-40 h-14 px-4 backdrop-blur-md bg-white/60 ml-[-100px] hover:rounded-lg duration-300 hover:ml-[-10px] hover:bg-[#ff3a7f] hover:text-white" + " " + style}>
              <a href={href} className='flex justify-between items-center w-full text-{#0c0e3e} ' download={download} target='_blank' rel='noreferrer'>
                <>
                  {child}
                </>
              </a>
            </li>))}


      </ul>
    </div>
  );
};

export default SocialLinks
