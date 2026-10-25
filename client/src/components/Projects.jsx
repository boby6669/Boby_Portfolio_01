import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const MotionDiv = motion.div

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'React', 'Full Stack', 'AI']
  const filteredProjects = useMemo(() => projects.filter((project) => filter === 'All' || project.category === filter || project.tech.includes(filter)), [filter])
  return (
    <MotionDiv
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='projects'
      className='bg-dark-100 py-16 sm:py-20'
    >
      <div className='container mx-auto px-5 sm:px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 '>
          My <span className='text-purple'>Projects</span>
        </h2>
        <p className='mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-gray-400 sm:mb-16 sm:text-base'>Here are some of my recent works</p>

        <div className='mb-8 flex flex-wrap justify-center gap-2'>
          {filters.map((item) => (
            <button key={item} type='button' onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm transition ${filter === item ? 'bg-purple text-white shadow-lg shadow-purple/20' : 'bg-dark-300 text-white/60 hover:bg-purple/20 hover:text-white'}`}>{item}</button>
          ))}
        </div>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
          {/* Map through your projects data and display them here */}
          {
            filteredProjects.map((project, index)=>(
                <ProjectCard key={index} {...project} />
            ))
          }
        </div>
        <div className='text-center mt-12'>
            <a href="https://github.com/boby6669" target='_blank' rel='noreferrer' className='inline-flex items-center rounded-lg border border-purple px-6 py-3 font-medium transition duration-300 hover:bg-purple/20'>
                <span>View More Projects</span>
                <FaArrowRight className='ml-2' />
            </a>
        </div>

      </div>
    </MotionDiv>
  )
}

export default Projects
