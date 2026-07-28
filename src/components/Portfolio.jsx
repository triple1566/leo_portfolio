import React, { useState } from 'react';
import UE1 from "../assets/portfolio/UE1.jpeg";
import TAAMapp from "../assets/portfolio/TAAMapp.png";
import QuickBay from "../assets/portfolio/QuickBay.png";
import RBF from "../assets/portfolio/RBF.png";
import PolyReg from "../assets/portfolio/PolyReg.png";
import RAGarXivRec from "../assets/portfolio/RAGarXivRec.png";

const categories = [
  {
    key: 'all',
    label: 'All',
  },
  {
    key: 'app',
    label: 'App',
  },
  {
    key: 'applied-ai',
    label: 'Applied AI',
  },
  {
    key: 'machine-learning',
    label: 'Machine Learning',
  },
  {
    key: 'game-dev',
    label: 'Game Dev',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolios=[
    {
      id: 1,
      src: RAGarXivRec,
      text: "RAG arXiv Research Paper Recommender",
      link: "https://github.com/triple1566/arXiv_Recommender_RAG",
      category: 'applied-ai',
    },
    {
      id: 2,
      src: QuickBay,
      text: "QuickBay",
      link: "https://devpost.com/software/quickbay",
      category: 'app',
    },
    {
      id: 3,
      src: TAAMapp,
      text: "Toronto Asian Arts App",
      link: "https://youtu.be/Cmdpo_1TH80",
      category: 'app',
    },
    {
      id: 4,
      src: RBF,
      text: "RBF Image Desnoiser",
      link: "https://github.com/triple1566/RBF_Image_Denoiser",
      category: 'machine-learning',
    },
    {
      id: 5,
      src: PolyReg,
      text: "Polynomial Regression Algorithm",
      link: "https://github.com/triple1566/Polynomial_Regression_Algorithm/blob/main/PolyReg/poly_notebook.ipynb",
      category: 'machine-learning',
    },
    {
      id: 6,
      src: UE1,
      text: "Unreal Engine Demos",
      links: [
        {
          label: "HUD/UI Demo",
          href: "https://youtu.be/SeTS6ctvShU"
        },
        {
          label: "FPV-TPV Server Replication Demo",
          href: "https://youtu.be/RE01SPaD6E4"
        }
      ],
      category: 'game-dev',
    },
  ];

  const visibleProjects = activeCategory === 'all'
    ? portfolios
    : portfolios.filter((project) => project.category === activeCategory);

  return (
    <section name="portfolio" className='section-shell px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 flex flex-col gap-4 sm:mb-10'>
          <p className='section-eyebrow'>Portfolio</p>
          <div className='flex flex-wrap gap-3'>
            {categories.map(({ key, label }) => {
              const isActive = activeCategory === key;

              return (
                <button
                  key={key}
                  type='button'
                  onClick={() => setActiveCategory(key)}
                  className={`inline-flex items-center justify-center rounded-[1rem] border px-4 py-2 text-sm font-medium transition ${isActive
                    ? 'border-cyan-300/50 bg-cyan-400 text-slate-950'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {visibleProjects.map(({id,src,text,link,links}) => (
            <article key={id} className='section-card group overflow-hidden rounded-[1.4rem]'>
              <div className='relative overflow-hidden'>
                <img src={src} alt={text} className='h-64 w-full object-cover transition duration-500 group-hover:scale-105' />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80' />
              </div>
              <div className='flex flex-col gap-4 p-6'>
                <div>
                  <p className='text-xs uppercase tracking-[0.22em] text-cyan-200/70'>Featured project</p>
                  <h3 className='mt-2 text-xl font-semibold text-white'>{text}</h3>
                </div>
                <div className='flex flex-col gap-3'>
                  {links ? (
                    links.map(({label, href}) => (
                      <a
                        key={label}
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex w-fit items-center gap-2 rounded-[1rem] border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-400 hover:text-slate-950'
                      >
                        {label}
                        <span aria-hidden='true'>↗</span>
                      </a>
                    ))
                  ) : (
                    <a
                      href={link}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex w-fit items-center gap-2 rounded-[1rem] border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-400 hover:text-slate-950'
                    >
                      Open project
                      <span aria-hidden='true'>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio
