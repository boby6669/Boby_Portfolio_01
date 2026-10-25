import React from 'react'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
const ProjectCard = ({ title, description, image, tech, demo, code, status }) => {
    return (
        <article className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-dark-300 to-dark-200 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-purple/50 hover:shadow-purple/10 focus-within:border-purple/50'>
            <div className='relative overflow-hidden'>
                <img src={image} alt={`${title} project preview`} className='h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-60' />
                <div className='absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent' />
                <span className='absolute left-4 top-4 rounded-full border border-white/15 bg-dark-100/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-md'>{status}</span>
            </div>
            <div className='flex flex-1 flex-col p-5 sm:p-6'>
                <div className='mb-2 flex items-center justify-between gap-3'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                </div>
                <p className='mb-5 text-sm leading-6 text-gray-400'>{description}</p>
                <div className='mb-6 flex flex-wrap gap-2'>
                    {tech.map((item, index) => (
                        <span key={index} className='rounded-full bg-dark-400 px-3 py-1 text-xs text-white/80'>
                            {item}
                        </span>
                    ))}
                </div>
                <div className='mt-auto flex gap-2'>
                    <a 
                        href={demo}
                        aria-disabled={demo === '#'}
                        tabIndex={demo === '#' ? -1 : 0}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-center text-sm font-medium transition duration-300 ${demo === '#' ? 'pointer-events-none cursor-not-allowed bg-purple/30 text-white/50' : 'bg-purple hover:bg-purple-700'}`}
                    >
                        Demo <FaArrowUpRightFromSquare className='text-xs' />
                    </a>
                    <a 
                        href={code}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-purple/60 px-4 py-2.5 text-center text-sm font-medium transition duration-300 hover:bg-purple/20'
                    >
                        Code <FaGithub className='text-sm' />
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
