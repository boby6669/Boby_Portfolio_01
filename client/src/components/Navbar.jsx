import React, { useEffect, useState } from 'react'
import {
  FaBars,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaTools,
} from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const navItems = [
  { label: 'Home', href: '#home', icon: FaHome },
  { label: 'About', href: '#about', icon: FaInfoCircle },
  { label: 'Skills', href: '#skills', icon: FaTools },
  { label: 'Projects', href: '#projects', icon: FaCode },
  { label: 'Experience', href: '#experience', icon: FaBriefcase },
  { label: 'Contact', href: '#contact', icon: FaEnvelope },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const closeMenuOnEscape = (event) => {
      if (event.key === 'Escape') {
        setShowMenu(false)
      }
    }

    document.addEventListener('keydown', closeMenuOnEscape)
    return () => document.removeEventListener('keydown', closeMenuOnEscape)
  }, [])

  const toggleMenu = () => setShowMenu((isOpen) => !isOpen)
  const closeMenu = () => setShowMenu(false)

  return (
    <nav className='fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-dark-100/85 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-6 md:px-8 md:py-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <a
          href='#home'
          onClick={closeMenu}
          className='group text-2xl font-bold tracking-tight text-white sm:text-3xl'
          aria-label='Boby Kumar home'
        >
          Boby<span className='text-purple transition-colors group-hover:text-pink'>Kumar</span>
          <span className='ml-1 inline-block h-2.5 w-2.5 rounded-full bg-purple shadow-[0_0_12px_#885cf6] sm:h-3 sm:w-3' />
        </a>

        <div className='hidden items-center space-x-8 md:flex lg:space-x-10'>
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className='group relative text-sm font-medium text-white/80 transition duration-300 hover:text-purple'
            >
              <span>{label}</span>
              <span className='absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-purple transition-all duration-300 group-hover:w-full' />
            </a>
          ))}
        </div>

        <button
          type='button'
          onClick={toggleMenu}
          className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:border-purple/60 hover:bg-purple/20 md:hidden'
          aria-expanded={showMenu}
          aria-controls='mobile-navigation'
          aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {showMenu && (
        <>
          <button
            type='button'
            onClick={closeMenu}
            className='fixed inset-0 top-[4.5rem] -z-10 bg-black/45 md:hidden'
            aria-label='Close navigation menu'
          />
          <div
            id='mobile-navigation'
            className='container mx-auto mt-3 overflow-hidden rounded-2xl border border-white/10 bg-dark-300/95 p-2 shadow-2xl shadow-black/30 md:hidden'
          >
            <div className='mb-1 rounded-xl bg-gradient-to-r from-purple/20 to-pink/10 px-4 py-3'>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-purple'>Explore</p>
              <p className='mt-1 text-sm text-white/60'>Find your next favorite section</p>
            </div>
            <div className='grid gap-1'>
              {navItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className='flex min-h-12 items-center gap-4 rounded-xl px-4 py-3 text-base font-medium text-white/85 transition hover:bg-purple/15 hover:text-white active:bg-purple/25'
                >
                  <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-purple'>
                    <Icon className='text-sm' />
                  </span>
                  <span>{label}</span>
                  <span className='ml-auto text-white/30'>→</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
