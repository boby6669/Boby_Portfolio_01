import React from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/assets'



const Hero = () => {
  return (
    <motion.div
    // animation ke liye
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='home'
    className='flex min-h-[calc(100svh-4.5rem)] items-center bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] pb-12 pt-24 sm:pb-16 md:min-h-screen md:pt-20'
    >
        <div className='container mx-auto flex flex-col items-center justify-between px-5 sm:px-6 md:flex-row'>

            {/* Left side containt */}
            <div className='mb-10 w-full text-center md:mb-0 md:w-1/2 md:text-left'>
                <p className='mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple sm:text-sm'>Welcome to my portfolio</p>
                <h1 className='mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl'>
                    Hi, I'm <span className='text-purple'>Boby Kumar</span>
                </h1>
                <h2 className='typewriter mb-6 inline-block max-w-full text-2xl font-semibold sm:text-3xl md:text-4xl'>Full Stack Developer</h2>
                <p className='mx-auto mb-8 max-w-lg text-base leading-7 text-gray-300 sm:text-lg md:mx-0'>I create stunning web experience with modern technologies and innovative design.</p>

                <div className='flex justify-center gap-3 sm:gap-4 md:justify-start'>
                    <a href="#projects" className='rounded-lg bg-purple px-5 py-3 text-sm font-medium shadow-lg shadow-purple/20 transition duration-300 hover:bg-purple-700 sm:px-6 sm:text-base'>View Work</a>
                    <a href="#contact" className='rounded-lg border border-purple px-5 py-3 text-sm font-medium transition duration-300 hover:bg-purple/20 sm:px-6 sm:text-base'>Contact</a>
                </div>
            </div>

            {/* right side containt */}

            <div className='flex w-full justify-center md:w-1/2'>
                <div className='relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70'>
                        <motion.img
                        animate={{y:[0, -20, 0]}}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className='relative z-10 h-56 w-56 rounded-full object-cover animate-float sm:h-64 sm:w-64 md:h-80 md:w-80'
                        src={assets.myPhoto} alt="profile" />
                    </div>

                </div>

            </div>

        </div>

    </motion.div>
  )
}

export default Hero
