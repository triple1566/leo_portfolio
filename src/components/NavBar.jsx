import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {


    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]//this is an array for the top navigation bar.

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-5 shadow-2xl shadow-black/20">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-lg font-semibold tracking-[0.28em] text-white/95 uppercase"
        >
          Leo Jeong
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2 py-1 backdrop-blur sm:flex">
          {links.map(({id,link})=> (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium capitalize text-slate-200/80 transition hover:bg-white/10 hover:text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setNav(!nav)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 sm:hidden"
          aria-label="Toggle navigation"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {nav && (
        <div className="sm:hidden">
          <div className="fixed inset-0 bg-slate-950/88 backdrop-blur-xl" onClick={() => setNav(false)} />
          <ul className="section-card soft-shadow absolute left-1/2 top-20 z-10 w-[calc(100%-2rem)] -translate-x-1/2 rounded-[2rem] p-3">
            {links.map(({id,link}) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  className="block rounded-2xl px-4 py-4 text-base font-medium capitalize text-slate-100 transition hover:bg-white/5"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavBar;
