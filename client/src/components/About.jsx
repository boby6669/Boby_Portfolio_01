import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets, projects } from '../assets/assets'
import { FaChartLine, FaCode, FaRocket, FaUsers } from 'react-icons/fa'

const MotionDiv = motion.div
const MotionImage = motion.img

const technologyUsage = projects
    .flatMap(({ tech }) => tech)
    .reduce((usage, technology) => ({
        ...usage,
        [technology]: (usage[technology] || 0) + 1,
    }), {})

const technologyProjects = projects.reduce((usage, project) => {
    project.tech.forEach((technology) => {
        usage[technology] = usage[technology] || []
        usage[technology].push(project.title)
    })
    return usage
}, {})

const technologyRanking = Object.entries(technologyUsage)
    .sort(([, firstCount], [, secondCount]) => secondCount - firstCount)
    .slice(0, 4)

const technologyInsights = technologyRanking.reduce((insights, [technology, count]) => {
    const relatedProjects = projects.filter(({ tech }) => tech.includes(technology))
    insights[technology] = {
        count,
        percentage: Math.round((count / projects.length) * 100),
        liveCount: relatedProjects.filter(({ status }) => status === 'Live').length,
        categories: [...new Set(relatedProjects.map(({ category }) => category))],
        projects: relatedProjects,
    }
    return insights
}, {})

const uniqueTechnologyCount = Object.keys(technologyUsage).length
const liveProjectCount = projects.filter(({ status }) => status === 'Live').length

const dashboardStats = [
    { label: 'Projects listed', value: projects.length, icon: FaRocket, color: 'text-purple' },
    { label: 'Technologies used', value: uniqueTechnologyCount, icon: FaCode, color: 'text-pink' },
    { label: 'Live projects', value: liveProjectCount, icon: FaUsers, color: 'text-blue' },
]

const About = () => {
    const [selectedTechnology, setSelectedTechnology] = useState(technologyRanking[0]?.[0] || '')
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
    const [hoveredTechnology, setHoveredTechnology] = useState('')
    const selectedInsight = technologyInsights[selectedTechnology]
    const selectedCoverage = selectedInsight?.percentage || 0
    const selectedLiveCount = selectedInsight?.liveCount || 0

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
                                <div key={label} className='group/stat rounded-2xl border border-white/10 bg-gradient-to-br from-dark-300 to-dark-200 p-3 text-center shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-purple/40 hover:shadow-purple/10 sm:p-4'>
                                    <span className='mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 transition group-hover/stat:bg-purple/15'>
                                        {React.createElement(icon, { className: `${color}` })}
                                    </span>
                                    <p className='text-xl font-bold text-white sm:text-2xl'>{value}</p>
                                    <p className='mt-1 text-[10px] leading-4 text-white/45 sm:text-xs'>{label}</p>
                                </div>
                            ))}
                        </div>
                        <div className='rounded-2xl border border-white/10 bg-dark-300/80 p-4 shadow-xl shadow-black/10'>
                            <div className='mb-4 flex items-center justify-between'>
                                <div>
                                    <p className='text-xs uppercase tracking-[0.18em] text-white/40'>Live activity</p>
                                    <p className='mt-1 text-sm font-semibold text-white'>Development focus</p>
                                </div>
                                <span className='flex items-center gap-2 text-xs text-green-300'>
                                    <span className='h-2 w-2 animate-pulse rounded-full bg-green-400' />
                                    Active now
                                </span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div
                                    className='relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full'
                                    style={{ background: `conic-gradient(#885cf6 0deg, #ec4899 ${selectedCoverage * 3.6}deg, #3d3d3d ${selectedCoverage * 3.6}deg)` }}
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                        className='absolute inset-1 rounded-full border border-dashed border-white/40'
                                    />
                                    <div className='flex h-16 w-16 flex-col items-center justify-center rounded-full bg-dark-300'>
                                        <span className='text-lg font-bold text-white'>{selectedCoverage}%</span>
                                        <span className='text-[9px] text-white/40'>coverage</span>
                                    </div>
                                </div>
                                <div className='min-w-0 flex-1 space-y-3'>
                                    <div className='mb-2 flex items-center justify-between gap-2'>
                                        <span className='truncate text-xs font-semibold text-purple'>{selectedTechnology || 'No technology'}</span>
                                        <span className='whitespace-nowrap text-[10px] text-green-300'>{selectedLiveCount} live project{selectedLiveCount === 1 ? '' : 's'}</span>
                                    </div>
                                    {technologyRanking.map(([technology, count], index) => (
                                        <div
                                            key={technology}
                                            tabIndex='0'
                                            className='group relative rounded-lg px-2 py-1 outline-none transition hover:bg-white/5 focus:bg-white/5'
                                            title={`${technology}: used in ${count} project${count === 1 ? '' : 's'}`}
                                        >
                                            <div className='mb-1 flex justify-between text-[11px] text-white/60'>
                                                <span className='font-medium text-white/75'>{technology}</span>
                                                <span>{count}/{projects.length}</span>
                                            </div>
                                            <div className='h-1.5 overflow-hidden rounded-full bg-dark-400'>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${Math.round((count / projects.length) * 100)}%` }}
                                                    transition={{ duration: 1, ease: 'easeOut' }}
                                                    viewport={{ once: true }}
                                                    className={`h-full rounded-full ${['bg-purple', 'bg-pink', 'bg-blue', 'bg-green-400'][index]}`}
                                                />
                                            </div>
                                            <div className='pointer-events-none absolute left-0 top-full z-20 mt-2 hidden w-56 rounded-xl border border-white/10 bg-dark-100 p-3 text-left shadow-2xl group-hover:block group-focus:block sm:left-auto sm:right-0'>
                                                <p className='mb-2 text-xs font-semibold text-purple'>{technology} in {count} project{count === 1 ? '' : 's'}</p>
                                                <ul className='space-y-1 text-[11px] text-white/65'>
                                                    {technologyProjects[technology].map((projectTitle) => (
                                                        <li key={projectTitle} className='truncate'>• {projectTitle}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
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

                            <div className='group/usage mb-8 rounded-2xl border border-white/5 bg-dark-300/60 p-4 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-purple/40 hover:shadow-purple/10 sm:p-5'>
                                        <div className='mb-5 flex items-start justify-between gap-3'>
                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <h4 className='font-semibold'>Technology usage</h4>
                                                    <span className='rounded-full bg-green-400/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-green-300'>Live data</span>
                                                </div>
                                                <p className='mt-1 text-xs text-white/40'>Hover a bar to inspect project coverage</p>
                                            </div>
                                            <span className='whitespace-nowrap text-xs text-purple'>{uniqueTechnologyCount} tracked</span>
                                        </div>
                                        <div className='space-y-2'>
                                            {technologyRanking.map(([technology, count], index) => (
                                                <div
                                                    key={technology}
                                                    tabIndex='0'
                                                    onPointerEnter={() => {
                                                        setSelectedTechnology(technology)
                                                        setHoveredTechnology(technology)
                                                    }}
                                                    onPointerLeave={() => setHoveredTechnology('')}
                                                    onPointerMove={(event) => setTooltipPosition({ x: event.clientX + 14, y: event.clientY + 14 })}
                                                    onFocus={() => {
                                                        setSelectedTechnology(technology)
                                                        setHoveredTechnology(technology)
                                                    }}
                                                    onBlur={() => setHoveredTechnology('')}
                                                    className={`group relative rounded-xl border p-2 outline-none transition-all duration-300 ${selectedTechnology === technology ? 'border-purple/30 bg-purple/10' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
                                                >
                                                    <div className='mb-2 flex justify-between text-xs'>
                                                        <span className='font-medium text-white/80'>{technology}</span>
                                                        <span className='text-white/50'>{count} projects · {Math.round((count / projects.length) * 100)}%</span>
                                                    </div>
                                                    <div className='h-2 overflow-hidden rounded-full bg-dark-400'>
                                                        <MotionDiv
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${Math.round((count / projects.length) * 100)}%` }}
                                                            transition={{ duration: 1, ease: 'easeOut' }}
                                                            viewport={{ once: true }}
                                                            className={`h-full rounded-full bg-gradient-to-r ${['from-purple', 'from-pink', 'from-blue', 'from-green-400'][index]} to-purple`}
                                                        />
                                                    </div>
                                                    {hoveredTechnology === technology && (
                                                    <div
                                                        className='pointer-events-none fixed z-[60] w-44 rounded-lg border border-purple/20 bg-dark-100/95 p-2.5 text-left shadow-xl shadow-purple/10 backdrop-blur-md'
                                                        style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
                                                    >
                                                        <div className='flex items-center justify-between gap-2'>
                                                            <p className='truncate text-[11px] font-semibold text-purple'>{technology}</p>
                                                            <span className='whitespace-nowrap text-[9px] text-green-300'>{technologyInsights[technology].liveCount} live</span>
                                                        </div>
                                                        <p className='mt-1 text-[10px] text-white/60'>{count} of {projects.length} projects</p>
                                                        <p className='mt-1 truncate text-[9px] text-white/40'>{technologyProjects[technology].join(' · ')}</p>
                                                    </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        {selectedInsight && (
                                            <div className='mt-4 rounded-xl border border-white/5 bg-dark-100/70 p-3 transition-all duration-300'>
                                                <div className='flex items-center justify-between gap-3'>
                                                    <div>
                                                        <p className='text-[10px] uppercase tracking-widest text-white/40'>Selected technology</p>
                                                        <p className='mt-1 text-sm font-semibold text-white'>{selectedTechnology}</p>
                                                    </div>
                                                    <div className='text-right'>
                                                        <p className='text-lg font-bold text-purple'>{selectedInsight.percentage}%</p>
                                                        <p className='text-[10px] text-white/40'>project coverage</p>
                                                    </div>
                                                </div>
                                                <div className='mt-3 flex flex-wrap gap-2'>
                                                    {selectedInsight.categories.map((category) => (
                                                        <span key={category} className='rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/60'>{category}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
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
