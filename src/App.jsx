import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </ThemeProvider>
  )
}

export default App
App