import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

  const [showMenu, setShowmenu] = useState(false);
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <a href="#" className='text-3xl font-bold text-white'>
            Boby
            <span className='text-purple'>Kumar</span>
            <div className='w-4 h-4 bg-purple rounded-full'></div>
          </a>
        </div>
        <div className='hidden md:flex space-x-10'>
          {/* 01 */}
          <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Home</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          {/* 02 */}
          <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>About</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          {/* 03 */}
          <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Skills</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          {/* 04 */}
          <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Projects</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          {/* 05 */}
          <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Experience</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          {/* 06 */}
          <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Contact</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>

        {/* Mobile button */}
        <div className='md:hidden'>

          {
            showMenu ?
            <FaXmark onClick={()=>setShowmenu(!showMenu)} className='text-2xl cursor-pointer' />
            :
            <FaBars onClick={()=>setShowmenu(!showMenu)} className='text-2xl cursor-pointer' />
            
          }
              
              
        </div>
      </div>

      {/* Mobile Menu */}
      
      {
        showMenu && (
          <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
             {/* 01 */}
          <a onClick={()=>setShowmenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Home</span>
          </a>
          {/* 02 */}
          <a onClick={()=>setShowmenu(!showMenu)} href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>About</span>
          </a>
          {/* 03 */}
          <a onClick={()=>setShowmenu(!showMenu)} href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Skills</span>
          </a>
          {/* 04 */}
          <a onClick={()=>setShowmenu(!showMenu)} href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Projects</span>
          </a>
          {/* 05 */}
          <a onClick={()=>setShowmenu(!showMenu)} href="#expeience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Experience</span>
          </a>
          {/* 06 */}
          <a onClick={()=>setShowmenu(!showMenu)} href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Contact</span>
          </a>
          </div>
        )
      }

    </nav>
  )
}

export default Navbar
