import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { FaChartLine, FaCode, FaRocket, FaUsers } from 'react-icons/fa'

const MotionDiv = motion.div
const MotionImage = motion.img

const dashboardStats = [
    { label: 'Projects shipped', value: '24+', icon: FaRocket, color: 'text-purple' },
    { label: 'Technologies', value: '12+', icon: FaCode, color: 'text-pink' },
    { label: 'Happy clients', value: '18+', icon: FaUsers, color: 'text-blue' },
]

const skillProgress = [
    { label: 'Frontend development', value: 92, color: 'from-purple to-pink' },
    { label: 'Backend & APIs', value: 84, color: 'from-blue to-purple' },
    { label: 'UI/UX implementation', value: 88, color: 'from-pink to-purple' },
]

const About = () => {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='bg-dark-200 py-16 sm:py-20'
        >
            <div className='container mx-auto px-5 sm:px-6'>
                {/* Heading */}
                <div className='mb-3 flex items-center justify-center gap-3'>
                    <span className='h-px w-8 bg-purple' />
                    <h2 className='text-center text-3xl font-bold sm:mb-1'>About<span className='text-purple'>Me</span></h2>
                    <span className='h-px w-8 bg-purple' />
                </div>
                <p className='mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-gray-400 sm:mb-16 sm:text-base'>Get to know more my background and passion</p>

                <div className='grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12'>
                    <div className='space-y-5'>
                        <div className='group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-300 p-3 shadow-2xl shadow-purple/10'>
                        <MotionImage
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='h-72 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105 sm:h-96'
                            src={assets.myPhoto} alt="profile"
                        />
                            <div className='absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-dark-100/80 px-4 py-3 backdrop-blur-md'>
                                <div>
                                    <p className='text-xs uppercase tracking-widest text-white/40'>Current focus</p>
                                    <p className='mt-1 text-sm font-semibold text-white'>Building digital experiences</p>
                                </div>
                                <FaChartLine className='text-xl text-purple' />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-3'>
                            {dashboardStats.map(({ label, value, icon, color }) => (
                                <div key={label} className='rounded-2xl border border-white/5 bg-dark-300 p-3 text-center transition hover:-translate-y-1 hover:border-purple/30 sm:p-4'>
                                    {React.createElement(icon, { className: `mx-auto mb-2 ${color}` })}
                                    <p className='text-xl font-bold text-white sm:text-2xl'>{value}</p>
                                    <p className='mt-1 text-[10px] leading-4 text-white/45 sm:text-xs'>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <MotionDiv
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='w-full'
                    >
                        <div className='rounded-3xl border border-white/5 bg-white/[0.02] p-4 sm:p-8'>
                            <div className='mb-6 flex items-start justify-between gap-4'>
                                        <div>
                                            <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple'>Developer dashboard</p>
                                            <h3 className='text-2xl font-semibold sm:text-3xl'>My <span className='text-purple'>Journey</span></h3>
                                        </div>
                                        <span className='rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-300'>Active</span>
                            </div>
                            <p className='mb-5 text-sm leading-7 text-gray-300 sm:mb-6 sm:text-base'>I'm a passionate full-stack developer with over 5 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.</p>
                            <p className='mb-8 text-sm leading-7 text-gray-300 sm:mb-12 sm:text-base'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.</p>

                            <div className='mb-8 rounded-2xl border border-white/5 bg-dark-300/60 p-4 sm:p-5'>
                                        <div className='mb-5 flex items-center justify-between'>
                                            <div>
                                                <h4 className='font-semibold'>Core expertise</h4>
                                                <p className='text-xs text-white/40'>A quick look at my strengths</p>
                                            </div>
                                            <span className='text-xs text-purple'>2025 - 2026</span>
                                        </div>
                                        <div className='space-y-4'>
                                            {skillProgress.map(({ label, value, color }) => (
                                                <div key={label}>
                                                    <div className='mb-2 flex justify-between text-xs'>
                                                        <span className='text-white/70'>{label}</span>
                                                        <span className='text-white/50'>{value}%</span>
                                                    </div>
                                                    <div className='h-2 overflow-hidden rounded-full bg-dark-400'>
                                                        <MotionDiv
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${value}%` }}
                                                            transition={{ duration: 1, ease: 'easeOut' }}
                                                            viewport={{ once: true }}
                                                            className={`h-full rounded-full bg-gradient-to-r ${color}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                            </div>

                            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                                        {
                                            aboutInfo.map((data, index) => (
                                                <div key={index} className='group cursor-pointer rounded-2xl border border-white/5 bg-dark-300 p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-purple/40 sm:p-6'>
                                                    <div className='mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-purple/10 text-3xl text-purple transition group-hover:bg-purple group-hover:text-white sm:text-4xl'>
                                                        <data.icon className='text-xl' />
                                            </div>
                                            <h3 className='mb-3 text-lg font-semibold'>{data.title}</h3>
                                            <p className='text-sm leading-6 text-gray-300'>{data.description}</p>
                                        </div>
                                    ))
                                }

                            </div>


                        </div>

                    </MotionDiv>



                </div>

            </div>

        </MotionDiv>
    )
}

export default About
