import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'

const ServicesMarquee = () => {
  const services = [
    'IT Services & Software Development',
    'IT Consulting',
    'Technical Training',
    'Communication Skills Training',
  ]

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services]

  return (
    <Box
      component="section"
      id="services"
      sx={{
        background: '#050505',
        py: 4,
        overflow: 'hidden',
        position: 'relative',
        scrollMarginTop: { xs: '80px', md: '96px' },
      }}
    >
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap' }}
      >
        {duplicatedServices.map((service, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.5px',
              }}
            >
              {service}
            </span>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#FF9A1F',
                marginRight: '1rem',
              }}
            >
              ×
            </span>
          </div>
        ))}
      </motion.div>
    </Box>
  )
}

export default ServicesMarquee

