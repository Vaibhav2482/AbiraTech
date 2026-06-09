import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Container, Typography, Grid, Card, Button, useMediaQuery, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import StarIcon from '@mui/icons-material/Star'

const TestimonialsSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: 'Abira Technologies transformed our business with a scalable SaaS platform. Their team is professional, innovative, and delivers on time.',
      author: 'John Anderson',
      title: 'CEO, TechStart Inc.',
      rating: 5,
    },
    {
      text: 'The mobile app they developed increased our customer engagement by 300%. Highly recommend their services!',
      author: 'Sarah Johnson',
      title: 'Product Manager, Digital Ventures',
      rating: 5,
    },
    {
      text: 'Best decision we made for our company. Their AI solutions helped us automate complex processes and save costs.',
      author: 'Michael Chen',
      title: 'CTO, Innovation Labs',
      rating: 5,
    },
  ]

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Retention' },
    { number: '24/7', label: 'Support' },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1A1A1A 0%, #222222 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Stats */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      mb: 4,
                      p: 3,
                      backgroundColor: 'rgba(255, 107, 61, 0.1)',
                      border: '1px solid rgba(255, 107, 61, 0.3)',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 107, 61, 0.2)',
                        borderColor: '#FF9A1F',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: '#FF9A1F',
                        lineHeight: 1,
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Grid>

          {/* Right Side - Testimonial Carousel */}
          <Grid item xs={12} md={7}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    p: { xs: 3, md: 4 },
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 107, 61, 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Star Rating */}
                  <Box sx={{ display: 'flex', gap: 0.5, mb: 3 }}>
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: '#FF9A1F', fontSize: '1.25rem' }} />
                    ))}
                  </Box>

                  {/* Testimonial Text */}
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontStyle: 'italic',
                      color: 'rgba(255, 255, 255, 0.95)',
                      mb: 4,
                      lineHeight: 1.8,
                      fontWeight: 400,
                    }}
                  >
                    "{currentTestimonial.text}"
                  </Typography>

                  {/* Author Info */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      sx={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'white',
                        mb: 0.5,
                      }}
                    >
                      {currentTestimonial.author}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: '#FF9A1F',
                        fontWeight: 500,
                      }}
                    >
                      {currentTestimonial.title}
                    </Typography>
                  </Box>

                  {/* Navigation */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      onClick={prevTestimonial}
                      sx={{
                        minWidth: 'auto',
                        width: 48,
                        height: 48,
                        p: 0,
                        borderRadius: '8px',
                        border: '2px solid #FF9A1F',
                        color: '#FF9A1F',
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
                      <ChevronLeftIcon />
                    </Button>
                    <Button
                      onClick={nextTestimonial}
                      sx={{
                        minWidth: 'auto',
                        width: 48,
                        height: 48,
                        p: 0,
                        borderRadius: '8px',
                        border: '2px solid #FF9A1F',
                        color: '#FF9A1F',
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
                      <ChevronRightIcon />
                    </Button>
                  </Box>

                  {/* Indicators */}
                  <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
                    {testimonials.map((_, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                          width: currentIndex === index ? 32 : 8,
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: currentIndex === index ? '#FF9A1F' : 'rgba(255, 255, 255, 0.3)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TestimonialsSection

