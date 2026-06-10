import React from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Button, Typography, useMediaQuery, useTheme } from '@mui/material'

const Hero = ({ onOpenContactDialog }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        background: 'linear-gradient(150deg, #050505 0%, #111111 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Floating Elements */}
      <motion.div
        animate={floatingVariants.animate}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(255, 107, 61, 0.1) 0%, rgba(255, 107, 61, 0.05) 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.05) 0%, rgba(17, 17, 17, 0) 100%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Headline */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Accelerate. Build. Innovate.<br />
              Rise. Achieve.
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#B8B8B8',
                lineHeight: 1.8,
                mb: 4,
                maxWidth: '720px',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Technology-driven solutions, IT consulting, real-time project delivery, and practical skill-focused training that help businesses and individuals grow.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'left' }}>
            <Button
              onClick={() => onOpenContactDialog?.('contact')}
              variant="contained"
              sx={{
                backgroundColor: '#FF9A1F',
                color: 'white',
                px: { xs: 3, md: 4 },
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '4px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#E17A00',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(255, 154, 31, 0.22)',
                },
                transition: 'all 0.3s ease',
                minWidth: isMobile ? '100%' : 'auto',
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Hero

