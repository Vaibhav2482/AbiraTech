import React from 'react'
import { Box } from '@mui/material'
import AbiraLogo from '../assets/abira-logo.jpeg'

const Logo = ({ size = 46 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      <Box
        component="img"
        src={AbiraLogo}
        alt="Abira Technologies Pvt. Ltd."
        sx={{
          width: size,
          height: size,
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1.1,
        }}
      >
        <Box
          sx={{
            color: '#FFFFFF',
            fontSize: {
              xs: '0.75rem', // Mobile
              sm: '0.9rem',  // Small tablet
              md: '1rem',    // Tablet
              lg: '1.15rem', // Desktop
            },
            fontWeight: 700,
          }}
        >
          Abira Technologies
        </Box>

        <Box
          sx={{
            color: '#B8B8B8',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Pvt. Ltd.
        </Box>
      </Box>
    </Box>
  )
}

export default Logo;