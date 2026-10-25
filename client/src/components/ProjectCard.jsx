import React from 'react'
const ProjectCard = ({ title, description, image, tech, demo, code, status }) => {
    return (
        <div className='group overflow-hidden rounded-2xl border border-white/5 bg-dark-300 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-purple/40'>
            <div className='relative overflow-hidden'>
                <img src={image} alt={title} className='h-60 w-full object-cover transition duration-500 group-hover:scale-105' />
                <div className='absolute inset-0 bg-gradient-to-t from-dark-300/70 to-transparent opacity-0 transition group-hover:opacity-100' />
            </div>
            <div className='p-5 sm:p-6'>
                <div className='mb-2 flex items-center justify-between gap-3'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <span className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${status === 'Live' ? 'bg-green-400/10 text-green-300' : 'bg-purple/15 text-purple'}`}>{status}</span>
                </div>
                <p className='mb-4 text-sm leading-6 text-gray-400'>{description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {tech.map((item, index) => (
                        <span key={index} className='rounded-full bg-dark-400 px-3 py-1 text-xs text-white/80'>
                            {item}
                        </span>
                    ))}
                </div>
                <div className='flex gap-2'>
                    <a 
                        href={demo}
                        aria-disabled={demo === '#'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='flex-1 rounded-lg bg-purple px-4 py-2 text-center text-sm font-medium transition duration-300 hover:bg-purple-700'
                    >
                        View Demo
                    </a>
                    <a 
                        href={code}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='flex-1 rounded-lg border border-purple px-4 py-2 text-center text-sm font-medium transition duration-300 hover:bg-purple/20'
                    >
                        View Code
                    </a>
                </div>


            </div>
        </div>
    )
}

export default ProjectCard
