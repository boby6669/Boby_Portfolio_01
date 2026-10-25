import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
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

        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
          {/* Map through your projects data and display them here */}
          {
            projects.map((project, index)=>(
                <ProjectCard key={index} {...project} />
            ))
          }
        </div>
        <div className='text-center mt-12'>
            <a href="#" className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
                <span>View More Projects</span>
                <FaArrowRight className='ml-2' />
            </a>
        </div>

      </div>
    </motion.div>
  )
}

export default Projects
