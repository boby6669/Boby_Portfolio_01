import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const MotionDiv = motion.div


// Dummy data for demonstration; replace with your actual data as needed
// const workData = [
//   {
//     title: "Frontend Developer",
//     company: "Example Corp",
//     period: "2022 - Present",
//     description: "Worked on building modern web applications."
//   },
//   {
//     title: "UI Designer",
//     company: "Design Studio",
//     period: "2020 - 2022",
//     description: "Designed user interfaces for mobile and web."
//   }
// ];

const Work = () => {
  return (
    <MotionDiv
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='experience'
      className='bg-dark-100 py-16 sm:py-20'
    >
      <div className='container mx-auto px-5 sm:px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 '>
          My <span className='text-purple'>Experience</span>
        </h2>
        <p className='mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-gray-400 sm:mb-16 sm:text-base'>
          My professional journey so far
        </p>

        <div className='max-w-3xl mx-auto'>
          <div className='space-y-8 sm:space-y-12'>
            {workData.map((data, index) => (
              <div
                key={index}
                className="relative pl-9 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-purple before:content-[''] cursor-pointer transition-all duration-300 hover:-translate-y-2 sm:pl-12"
              >
                {/* timeline */}
                <div className='absolute left-[-0.4rem] top-0 h-5 w-5 rounded-full bg-purple shadow-[0_0_14px_#885cf6] sm:left-[-0.5rem] sm:h-6 sm:w-6'>

                </div>
                {/* box */}
                <div className="rounded-2xl bg-dark-300 p-5 shadow-lg shadow-black/10 sm:p-6">
                  <div className='mb-2 flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:justify-between'>
                     <h3 className="text-lg font-semibold sm:text-xl">{data.role}</h3>
                     <span className='rounded-full bg-purple/20 px-3 py-1 text-xs text-purple'>{data.duration}</span>
                  </div>
                  
                  <p className="text-gray-400">{data.company}</p>
                  <p className="text-gray-300">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}

export default Work
