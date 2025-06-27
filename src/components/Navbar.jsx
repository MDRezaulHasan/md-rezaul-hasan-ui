import React from 'react'
import { useState } from 'react'
import {motion, useScroll, AnimatePresence} from 'framer-motion'
import { Code2,Sun,Moon,Menu,X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'


const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };
  return (
   <motion.nav
   className={`fixed top-0 w-full z-50 px-6 py-4 ${isDarkMode ? 'bg-gray-950/80' : 'bg-gray-50/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} `}>
    <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <motion.div whileHover={{scale:1.05}} className='flex items-center space-x-2'>
            <Code2 size={24} className='text-blue-500'/>{' '}
            <span className='text-lg ml-1'>Md Rezaul Hasan</span>
        </motion.div>

        <div className='hidden md:flex items-center space-x-8'>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
                <motion.button
                    key={section}
                    whileHover={{ y: -2 }}
                   onClick={() => scrollToSection(section.toLowerCase())}
                   className={`text-sm uppercase tracking-wider transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                    {section}
                </motion.button>
            ))}

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleDarkMode(isDarkMode ? 'light' : 'dark')}
                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
            >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

        </div>


        {/* Mobile menu button */}
        <div className='md:hidden flex items-center space-x-4'>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleDarkMode(isDarkMode? 'light' : 'dark')}
                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
            >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
            >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>

        </div>


    </div>

    {/**mobile menu*/}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`md:hidden mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
                >
                    
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
                        <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(section.toLowerCase())}
                        className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
                    >
                        {section}
                    </motion.button>
                    ))}
                    
                    
                </motion.div>
            )}
        </AnimatePresence>

   </motion.nav>

   
  )
}

export default Navbar