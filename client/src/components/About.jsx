import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='bg-dark-200 py-16 sm:py-20'
        >
            <div className='container mx-auto px-5 sm:px-6'>
                {/* Heading */}
                <h2 className='mb-3 text-center text-3xl font-bold sm:mb-4'>
                    About
                    <span className='text-purple'>Me</span>
                </h2>
                <p className='mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-gray-400 sm:mb-16 sm:text-base'>Get to know more my background and passion</p>

                {/* image + my journey */}
                <div className='flex flex-col items-center gap-8 md:flex-row md:gap-12'>
                    {/* image */}
                    <div className='h-full w-full overflow-hidden px-8 sm:px-10 md:w-1/2'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='h-64 w-full rounded-2xl object-cover shadow-xl shadow-black/20 sm:h-80 md:h-full'
                            src={assets.myPhoto} alt="profile"
                        />
                    </div>
                    {/* text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='w-full md:w-1/2'
                    >
                        <div className='rounded-2xl p-2 sm:p-8'>
                            <h3 className='mb-4 text-2xl font-semibold sm:mb-6'>My Journey</h3>
                            <p className='mb-5 text-sm leading-7 text-gray-300 sm:mb-6 sm:text-base'>I'm a passionate full-stack developer with over 5 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.</p>
                            <p className='mb-8 text-sm leading-7 text-gray-300 sm:mb-12 sm:text-base'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.</p>

                            {/* cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='cursor-pointer rounded-2xl bg-dark-300 p-5 shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-2 sm:p-6'>
                                                    <div className='text-3xl text-purple sm:text-4xl'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-300'>{data.description}</p>
                                        </div>
                                    ))
                                }

                            </div>


                        </div>

                    </motion.div>



                </div>

            </div>

        </motion.div>
    )
}

export default About
