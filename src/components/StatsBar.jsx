import React from 'react'
import { motion } from 'framer-motion'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

const StatsBar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const stats = [
    { number: '5+', label: 'Team Members' },
    { number: '100%', label: 'Commitment' },
    { number: 'Real-Time', label: 'Project Experience' },
    { number: 'Industry', label: 'Focused Training' },
  ]

  // Duplicate stats for seamless loop
  const duplicatedStats = [...stats, ...stats]

  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(135deg, #FF9A1F 0%, #E17A00 100%)',
        py: { xs: 3, md: 4 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          display: 'flex',
          gap: '4rem',
          whiteSpace: 'nowrap',
        }}
      >
        {duplicatedStats.map((stat, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3rem',
              minWidth: 'max-content',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                  mt: 0.5,
                  letterSpacing: '0.5px',
                }}
              >
                {stat.label}
              </Typography>
            </div>
            <span
              style={{
                fontSize: '2rem',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 300,
                marginLeft: '1rem',
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

export default StatsBar

