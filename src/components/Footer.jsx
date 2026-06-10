import React from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Typography, Link, Grid, IconButton, Divider } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Navigation',
      links: ['Home', 'Services', 'Projects', 'About', 'Contact'],
    },
    {
      title: 'Services',
      links: ['Web Development', 'Mobile Apps', 'AI Solutions', 'Cloud Services', 'IT Consulting'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Team', 'Careers', 'Blog', 'Contact'],
    },
  ]

  const socialIcons = [
    { icon: FacebookIcon,
      url: '#',
      label: 'Facebook' },
    { icon: TwitterIcon, 
      url: '#', 
      label: 'Twitter' },
    { icon: LinkedInIcon,
      url: 'https://www.linkedin.com/company/abira-technologies/', 
      label: 'LinkedIn' },
    { icon: GitHubIcon, 
      url: '#', 
      label: 'GitHub' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <Box
      component="footer"
      sx={{
        '& a': {
          textDecoration: 'none',
        },
        '& a:hover': {
          textDecoration: 'none',
        },

        background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)',
        color: 'white',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={6} sx={{ mb: 6 }}>
            {/* Logo and Description */}
            <Grid item xs={12} md={3}>
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 2 }}>
                  <Logo size={36} />
                </Box>
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Accelerate. Build. Innovate. Rise. Achieve.
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Abira Technologies Pvt. Ltd.
                </Typography>

                {/* Social Icons */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {socialIcons.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconButton
                          href={social.url}
                          sx={{
                            color: '#FF9A1F',
                            border: '2px solid #FF9A1F',
                            borderRadius: '8px',
                            width: 40,
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: '#FF9A1F',
                              color: 'white',
                            },
                          }}
                        >
                          <Icon />
                        </IconButton>
                      </motion.div>
                    )
                  })}
                </Box>
              </motion.div>
            </Grid>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'white',
                      mb: 2,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {section.links.map((link, i) => (
                      <Link
                        key={i}
                        href="#"
                        sx={{
                          fontSize: '0.9rem',
                          color: 'rgba(255, 255, 255, 0.7)',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          '&:hover': {
                            color: '#FF9A1F',
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -4,
                            left: 0,
                            width: 0,
                            height: 2,
                            backgroundColor: '#FF9A1F',
                            transition: 'width 0.3s ease',
                          },
                          '&:hover::after': {
                            width: 'calc(100% - 4px)',
                          },
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            ))}

            {/* Contact Info */}
            <Grid item xs={12} md={3}>
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'white',
                    mb: 2,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Contact
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        mb: 0.5,
                      }}
                    >
                      Email
                    </Typography>
                    <Link
                      href="mailto:hello@abira.tech"
                      sx={{
                        fontSize: '0.9rem',
                        color: '#FF9A1F',
                        fontWeight: 500,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      admin@abiratech.com
                    </Link>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        mb: 0.5,
                      }}
                    >
                      Phone
                    </Typography>
                    <Link
                      href="tel:+18001234567"
                      sx={{
                        fontSize: '0.9rem',
                        color: '#FF9A1F',
                        fontWeight: 500,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      +91 (741) 494-0051
                    </Link>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        mb: 0.5,
                      }}
                    >
                      Location
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      Pune, Maharashtra, India
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Divider */}
        <Divider sx={{ background: 'rgba(255, 107, 61, 0.2)', my: 4 }} />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              © {currentYear} ABIRA Technologies. All rights reserved.
            </Typography>

            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link
                href="#"
                sx={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#FF9A1F',
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#FF9A1F',
                  },
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Footer

