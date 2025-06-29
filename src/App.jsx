import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import SkillsSection from './components/sections/SkillsSection'

const App = () => {
  return (
    <ThemeProvider>
      <div className='pb-[100vh]'>
        <Navbar />
        <HeroSection />
        <SkillsSection/>
      </div>
    </ThemeProvider>
  )
}

export default App
