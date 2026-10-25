import React from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/assets'
import { FaArrowDown, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'

const MotionDiv = motion.div
const MotionImage = motion.img

const Hero = () => {
  return (
    <MotionDiv
    // animation ke liye
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='home'
    className='relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-[#17151f] pb-12 pt-24 sm:pb-16 md:min-h-screen md:pt-20'
    >
        <div className='pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple/20 blur-3xl' />
        <div className='pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink/10 blur-3xl' />
        <div className='container mx-auto flex flex-col items-center justify-between px-5 sm:px-6 md:flex-row'>

            {/* Left side containt */}
            <div className='mb-10 w-full text-center md:mb-0 md:w-1/2 md:text-left'>
                <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-3 py-1.5 text-xs font-medium text-purple sm:text-sm'>
                    <span className='h-2 w-2 animate-pulse rounded-full bg-green-400' />
                    Available for new opportunities
                </div>
                <h1 className='mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl'>
                    Hi, I'm <span className='bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent'>Boby Kumar</span>
                </h1>
                <h2 className='typewriter mb-6 inline-block max-w-full text-2xl font-semibold sm:text-3xl md:text-4xl'>Full Stack Developer</h2>
                <p className='mx-auto mb-8 max-w-lg text-base leading-7 text-gray-300 sm:text-lg md:mx-0'>I create stunning web experience with modern technologies and innovative design.</p>

                <div className='flex justify-center gap-3 sm:gap-4 md:justify-start'>
                    <a href="#projects" className='inline-flex items-center gap-2 rounded-lg bg-purple px-5 py-3 text-sm font-medium shadow-lg shadow-purple/20 transition duration-300 hover:bg-purple-700 sm:px-6 sm:text-base'>View Work <FaLocationArrow className='text-xs' /></a>
                    <a href="#contact" className='rounded-lg border border-purple px-5 py-3 text-sm font-medium transition duration-300 hover:bg-purple/20 sm:px-6 sm:text-base'>Contact</a>
                </div>
                <div className='mt-8 flex items-center justify-center gap-4 md:justify-start'>
                    <span className='text-sm text-white/40'>Follow me</span>
                    <a href='https://github.com/boby6669' target='_blank' rel='noreferrer' aria-label='GitHub' className='text-white/60 transition hover:text-purple'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/boby-kumar' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='text-white/60 transition hover:text-purple'><FaLinkedin /></a>
                </div>
            </div>

            {/* right side containt */}

            <div className='flex w-full justify-center md:w-1/2'>
                <div className='relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80'>
                    <div className='absolute -inset-3 rounded-full bg-gradient-to-r from-purple to-pink opacity-50 blur-xl' />
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink p-1'>
                        <MotionImage
                        animate={{y:[0, -20, 0]}}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className='relative z-10 h-full w-full rounded-full border-4 border-[#17151f] object-cover animate-float'
                        src={assets.myPhoto} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
        <a href='#about' aria-label='Scroll to about section' className='absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/40 transition hover:text-purple md:block'><FaArrowDown /></a>
    </MotionDiv>
  )
}

export default Hero
