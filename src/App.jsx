import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './styles/theme'
import Header from './components/Header'
import Hero from './components/Hero'
import ServicesMarquee from './components/ServicesMarquee'
import StatsBar from './components/StatsBar'
import FeaturedProjects from './components/FeaturedProjects'
import AboutSection from './components/AboutSection'
import ProcessTimeline from './components/ProcessTimeline'
import TechnologiesSection from './components/TechnologiesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <ServicesMarquee />
      <StatsBar />
      <FeaturedProjects />
      <AboutSection />
      <ProcessTimeline />
      <TechnologiesSection />
      
      <TestimonialsSection />
      <ContactCTA />
      <Footer />
    </ThemeProvider>
  )
}

export default App

