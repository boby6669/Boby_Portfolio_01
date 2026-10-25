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
                            <div key={index} className='cursor-pointer rounded-2xl border border-white/5 bg-dark-200 p-5 transition duration-300 hover:-translate-y-2 sm:p-6'>
                                <div className='mb-4 flex items-center'>
                                    <skill.icon className='w-12 h-12 text-purple mr-6' />
                                    <h3 className='text-xl font-semibold'>{skill.title}</h3>
                                </div>
                                <p className='text-gray-400 mb-4'>{skill.description}</p>

                                <div className='flex flex-wrap gap-2'>
                                    {skill.tags.map((tech)=>(
                                        <span key={tech} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{tech}</span>
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
