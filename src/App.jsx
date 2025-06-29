import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import AboutSection from './components/sections/AboutSection'

const App = () => {
  return (
    <ThemeProvider>
      <div className='pb-[100vh]'>
        <Navbar />
        <HeroSection />
        <SkillsSection/>
        <ProjectsSection/>
        <AboutSection />
      </div>
    </ThemeProvider>
  )
}

export default App
