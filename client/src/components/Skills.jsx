import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const MotionDiv = motion.div

const Skills = () => {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='skills'
            className='bg-dark-100 py-16 sm:py-20'
        >
            <div className='container mx-auto px-5 sm:px-6'>
                <h2 className='text-3xl font-bold text-center mb-4 '>
                    My <span className='text-purple'>Skills</span>
                </h2>
                <p className='mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-gray-400 sm:mb-16 sm:text-base'>Technologies I work with to bring ideas to life</p>

                <div className='mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-dark-200 to-dark-300/80 p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-purple/40 hover:shadow-purple/10 sm:p-6'>
                                <span className='absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple/10 blur-2xl transition group-hover:bg-purple/25' />
                                <div className='relative mb-5 flex items-center gap-4'>
                                    <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple/10 text-2xl text-purple transition group-hover:bg-purple group-hover:text-white'>
                                        <skill.icon />
                                    </span>
                                    <h3 className='text-lg font-semibold sm:text-xl'>{skill.title}</h3>
                                </div>
                                <p className='relative mb-5 text-sm leading-6 text-gray-400'>{skill.description}</p>

                                <div className='relative flex flex-wrap gap-2'>
                                    {skill.tags.map((tech)=>(
                                        <span key={tech} className='rounded-full border border-white/5 bg-dark-400/80 px-3 py-1 text-xs text-white/75 transition group-hover:border-purple/20'>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            

        </MotionDiv>
    )
}

export default Skills
