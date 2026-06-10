import React, { useState } from 'react'
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
import ContactDialog from './components/ContactDialog'
import Footer from './components/Footer'

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogType, setDialogType] = useState('contact')

  const openDialog = (type) => {
    setDialogType(type)
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onOpenContactDialog={openDialog} />
      <Hero onOpenContactDialog={openDialog} />
      <ServicesMarquee />
      <StatsBar />
      <FeaturedProjects />
      <AboutSection />
      <ProcessTimeline />
      <TechnologiesSection />
      <TestimonialsSection />
      <ContactCTA onOpenContactDialog={openDialog} />
      <Footer />
      <ContactDialog open={dialogOpen} onClose={closeDialog} dialogType={dialogType} />
    </ThemeProvider>
  )
}

export default App

