import React from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4 '>
                    Get In
                    <span className='text-purple'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Have a project in mind or want to collaborate? Let's talk!</p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                    {/* contact form */}
                    <div>
                        <form className='mt-8 flex flex-col gap-4'>
                            <input type='text' placeholder='Your Name' className='p-3 rounded-md bg-dark-200 text-white' />
                            <input type='email' placeholder='Your Email' className='p-3 rounded-md bg-dark-200 text-white' />
                            <textarea placeholder='Your Message' className='p-3 rounded-md bg-dark-200 text-white h-32' />
                            <button className='bg-purple-500 hover:bg-purple-600 transition text-white py-2 rounded-md'>Send Message</button>
                        </form>

                    </div>

                    {/* contact information */}
                    <div className='space-y-8'>

                        {/* location */}
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Chandigarh, Mohali</p>
                            </div>
                        </div>

                        {/* email */}
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>bobyk1890@gmail.com</p>
                            </div>
                        </div>

                        {/* phone */}
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91 9876543210</p>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>

                                {/* GitHub */}
                                <a 
                                 href="https://github.com/boby6669"
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                    <FaGithub />
                                </a>

                                {/* Linkedin */}
                                <a 
                                 href="https://www.linkedin.com/in/boby-kumar"
                                 target='_blank'
                                 rel='noopener noreferrer'
                                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                    <FaLinkedin />
                                </a>

                                {/* Twitter */}
                                <a 
                                 href="#"
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                    <FaTwitter />
                                </a>

                                {/* Instagram */}
                                <a
                                 href="https://www.instagram.com/__boby__kumar__choudhary__?igsh=cGw1ZGE2MXNwdnkw"
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#FF0069] hover:bg-pink hover:text-white transition duration-300'>
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
