import React from 'react';
import UE1 from "../assets/portfolio/UE1.jpeg";
import UE2 from "../assets/portfolio/UE2.jpeg";
import TAAMapp from "../assets/portfolio/TAAMapp.png";
import TODOlist from "../assets/portfolio/TODOlist.png";
import QuickBay from "../assets/portfolio/QuickBay.png";
import RBF from "../assets/portfolio/RBF.png";
import PolyReg from "../assets/portfolio/PolyReg.png";
import RAGarXivRec from "../assets/portfolio/RAGarXivRec.png";

const Portfolio = () => {

  const portfolios=[
    {
      id: 1,
      src: RAGarXivRec,
      text: "RAG arXiv Research Paper Recommender",
      link: "https://github.com/triple1566/arXiv_Recommender_RAG"
    },
    {
      id: 2,
      src: QuickBay,
      text: "QuickBay",
      link: "https://devpost.com/software/quickbay"
    },
    {
      id: 3,
      src: TAAMapp,
      text: "Toronto Asian Arts App",
      link: "https://youtu.be/Cmdpo_1TH80"
    },
    {
      id: 4,
      src: TODOlist,
      text: "Leo's ToDo List",
      link: "https://leo-pern-todo-650a2faaa317.herokuapp.com/"
    },
    {
      id: 5,
      src: RBF,
      text: "RBF Image Desnoiser",
      link: "https://github.com/triple1566/RBF_Image_Denoiser"
    },
    {
      id: 6,
      src: PolyReg,
      text: "Polynomial Regression Algorithm",
      link: "https://github.com/triple1566/Polynomial_Regression_Algorithm/blob/main/PolyReg/poly_notebook.ipynb"
    },
    {
      id: 7,
      src: UE1,
      text: "HUD/UI Demo",
      link: "https://youtu.be/SeTS6ctvShU"
    },
    {
      id: 8,
      src: UE2,
      text: "FPV-TPV Server Replication Demo",
      link: "https://youtu.be/RE01SPaD6E4"
    },
  ];

  return (
    <section name="portfolio" className='section-shell px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='section-eyebrow'>Portfolio</p>
            <h2 className='section-title mt-4 max-w-2xl'>Selected work presented with a cleaner editorial rhythm.</h2>
          </div>
          <p className='section-copy max-w-xl text-sm leading-7 sm:text-right sm:text-base'>
            The projects are unchanged, but the layout now gives each one more breathing room and visual priority.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {portfolios.map(({id,src,text,link}) => (
            <article key={id} className='section-card group overflow-hidden rounded-[1.75rem]'>
              <div className='relative overflow-hidden'>
                <img src={src} alt={text} className='h-64 w-full object-cover transition duration-500 group-hover:scale-105' />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80' />
              </div>
              <div className='flex flex-col gap-4 p-6'>
                <div>
                  <p className='text-xs uppercase tracking-[0.22em] text-cyan-200/70'>Featured project</p>
                  <h3 className='mt-2 text-xl font-semibold text-white'>{text}</h3>
                </div>
                <a
                  href={link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-400 hover:text-slate-950'
                >
                  Open project
                  <span aria-hidden='true'>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio
