import React from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Typography, Button, useMediaQuery, useTheme } from '@mui/material'

const ContactCTA = ({ onOpenContactDialog }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #FF9A1F 0%, #E17A00 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '250px',
          height: '250px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Headline */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                mb: 3,
                textAlign: 'center',
                lineHeight: 1.2,
              }}
            >
              Let's Build Something Practical and Scalable
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                textAlign: 'center',
                mb: 6,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.95)',
              }}
            >
              Ready to accelerate your business or career? Connect with Abira Technologies today.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => onOpenContactDialog?.('contact')}
              sx={{
                backgroundColor: 'white',
                color: '#FF9A1F',
                px: { xs: 3, md: 4 },
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '4px',
                textTransform: 'none',
                minWidth: isMobile ? '100%' : 'auto',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Contact Abira
            </Button>

            <Button
              onClick={() => onOpenContactDialog?.('scheduleCall')}
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                px: { xs: 3, md: 4 },
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '4px',
                textTransform: 'none',
                minWidth: isMobile ? '100%' : 'auto',
                border: '2px solid white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#FF9A1F',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              Schedule a Call
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            style={{
              textAlign: 'center',
              marginTop: '3rem',
            }}
          >
            <Typography
              sx={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              📧 Email us at <strong>admin@abiratech.com</strong> or call <strong>+91 (741) 494-0051</strong>
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ContactCTA

