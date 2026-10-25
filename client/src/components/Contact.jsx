import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa'

const contactDetails = [
    {
        label: 'Location',
        value: 'Chandigarh, Mohali',
        icon: FaMapMarkerAlt,
    },
    {
        label: 'Email',
        value: 'bobyk1890@gmail.com',
        icon: FaEnvelope,
        href: 'mailto:bobyk1890@gmail.com',
    },
    {
        label: 'Phone',
        value: '+91 9876543210',
        icon: FaPhone,
        href: 'tel:+919876543210',
    },
]

const Contact = () => {
    const [sent, setSent] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const subject = encodeURIComponent(`Portfolio enquiry from ${form.get('name')}`)
        const body = encodeURIComponent(`${form.get('message')}\n\nReply to: ${form.get('email')}`)

        window.location.href = `mailto:bobyk1890@gmail.com?subject=${subject}&body=${body}`
        setSent(true)
        event.currentTarget.reset()
    }

    return (
        <section id='contact' className='relative overflow-hidden bg-dark-100 py-16 sm:py-20 lg:py-24'>
            <div className='pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-purple/10 blur-3xl' />
            <div className='container relative mx-auto px-5 sm:px-6'>
                <div className='mb-10 text-center sm:mb-14'>
                    <div className='mb-3 flex items-center justify-center gap-3'>
                        <span className='h-px w-8 bg-purple' />
                        <h2 className='text-3xl font-bold sm:text-4xl'>
                            Get In <span className='text-purple'>Touch</span>
                        </h2>
                        <span className='h-px w-8 bg-purple' />
                    </div>
                    <p className='mx-auto max-w-xl text-sm leading-6 text-gray-400 sm:text-base'>
                        Have a project in mind or want to collaborate? Let&apos;s create something meaningful together.
                    </p>
                </div>

                <div className='mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10'>
                    <div className='rounded-3xl border border-white/10 bg-dark-200/80 p-5 shadow-2xl shadow-black/10 sm:p-8'>
                        <div className='mb-6'>
                            <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple'>Start a conversation</p>
                            <h3 className='text-2xl font-semibold'>Tell me about your idea</h3>
                        </div>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <div className='grid gap-4 sm:grid-cols-2'>
                                <label className='flex flex-col gap-2 text-sm text-white/70'>
                                    Name
                                    <input required name='name' type='text' placeholder='Your name' className='min-h-12 rounded-xl border border-white/10 bg-dark-300 px-4 text-white outline-none transition placeholder:text-white/30 focus:border-purple focus:ring-2 focus:ring-purple/20' />
                                </label>
                                <label className='flex flex-col gap-2 text-sm text-white/70'>
                                    Email
                                    <input required name='email' type='email' placeholder='you@example.com' className='min-h-12 rounded-xl border border-white/10 bg-dark-300 px-4 text-white outline-none transition placeholder:text-white/30 focus:border-purple focus:ring-2 focus:ring-purple/20' />
                                </label>
                            </div>
                            <label className='flex flex-col gap-2 text-sm text-white/70'>
                                Message
                                <textarea required name='message' placeholder='Tell me about your project...' className='min-h-36 resize-y rounded-xl border border-white/10 bg-dark-300 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-purple focus:ring-2 focus:ring-purple/20' />
                            </label>
                            <button type='submit' className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-purple px-5 py-3 font-semibold text-white shadow-lg shadow-purple/20 transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 focus:ring-offset-dark-200'>
                                Send Message <FaPaperPlane className='text-sm' />
                            </button>
                            {sent && <p role='status' className='text-sm text-green-300'>Your email app is opening with the message ready to send.</p>}
                        </form>
                    </div>

                    <div className='rounded-3xl border border-white/10 bg-gradient-to-br from-purple/15 via-dark-200 to-pink/10 p-5 sm:p-8'>
                        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple'>Contact details</p>
                        <h3 className='mb-8 text-2xl font-semibold'>Let&apos;s connect</h3>
                        <div className='space-y-5'>
                            {contactDetails.map(({ label, value, icon, href }) => {
                                const content = (
                                    <>
                                        <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple/15 text-lg text-purple'>
                                            {React.createElement(icon)}
                                        </span>
                                        <span className='min-w-0'>
                                            <span className='block text-xs uppercase tracking-wider text-white/40'>{label}</span>
                                            <span className='mt-1 block break-words text-sm text-white/80'>{value}</span>
                                        </span>
                                    </>
                                )

                                return href ? (
                                    <a key={label} href={href} className='flex items-center gap-4 rounded-2xl border border-white/5 bg-black/10 p-3 transition hover:border-purple/40 hover:bg-purple/10'>
                                        {content}
                                    </a>
                                ) : (
                                    <div key={label} className='flex items-center gap-4 rounded-2xl border border-white/5 bg-black/10 p-3'>
                                        {content}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='mt-8 border-t border-white/10 pt-6'>
                            <p className='mb-4 text-sm font-medium text-white/70'>Follow me online</p>
                            <div className='flex flex-wrap gap-3'>
                                <a href='https://github.com/boby6669' target='_blank' rel='noreferrer' aria-label='GitHub' className='flex h-11 w-11 items-center justify-center rounded-xl bg-dark-300 text-purple transition hover:bg-purple hover:text-white'><FaGithub /></a>
                                <a href='https://www.linkedin.com/in/boby-kumar' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='flex h-11 w-11 items-center justify-center rounded-xl bg-dark-300 text-purple transition hover:bg-purple hover:text-white'><FaLinkedin /></a>
                                <a href='https://www.instagram.com/__boby__kumar__choudhary__' target='_blank' rel='noreferrer' aria-label='Instagram' className='flex h-11 w-11 items-center justify-center rounded-xl bg-dark-300 text-pink transition hover:bg-pink hover:text-white'><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
