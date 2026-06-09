import React from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Typography, Grid, Card } from '@mui/material'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import StarIcon from '@mui/icons-material/Star'
import SpeedIcon from '@mui/icons-material/Speed'

const AboutSection = () => {
  const features = [
    {
      icon: EmojiPeopleIcon,
      title: 'Real-Time Project Experience',
      description: 'Hands-on delivery of live projects with practical execution and client focus.',
    },
    {
      icon: StarIcon,
      title: 'Industry-Focused Training',
      description: 'Tailored learning paths that align with current business and technical needs.',
    },
    {
      icon: SpeedIcon,
      title: 'Quality & Commitment',
      description: 'Reliable delivery backed by a strong commitment to excellence and trust.',
    },
    {
      icon: EmojiPeopleIcon,
      title: 'On-Time Delivery',
      description: 'Project milestones and training schedules delivered consistently on time.',
    },
    {
      icon: StarIcon,
      title: 'Practical Learning Approach',
      description: 'Real skills built through actionable practice and industry exposure.',
    },
    {
      icon: SpeedIcon,
      title: 'Dedicated Team of 5 Members',
      description: 'A compact specialist team that offers agility, focus, and personal ownership.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#050505',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left side - Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 800,
                  mb: 4,
                  lineHeight: 1.3,
                  color: '#FFFFFF',
                }}
              >
                Abira Technologies Pvt. Ltd. is a technology-driven company focused on delivering practical, scalable, and future-ready solutions.
              </Typography>

              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#B8B8B8',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                We partner with businesses and individuals to accelerate growth through IT services, consulting, and skill-focused training.
              </Typography>

              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#B8B8B8',
                  lineHeight: 1.8,
                }}
              >
                We work on real-time projects with a strong focus on quality, commitment, and on-time delivery. Our team understands client requirements and provides reliable solutions that meet business needs efficiently.
              </Typography>

              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#B8B8B8',
                  lineHeight: 1.8,
                  mt: 3,
                }}
              >
                We provide professional training in Programming, Coding, Technical Skills, and Communication Skills with practical implementation and industry exposure.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right side - Features */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Grid container spacing={3}>
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div variants={itemVariants}>
                        <Card
                          sx={{
                            p: 3,
                            backgroundColor: '#111111',
                            border: '1px solid rgba(255, 154, 31, 0.14)',
                            borderRadius: '12px',
                            display: 'flex',
                            gap: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 16px 32px rgba(255, 154, 31, 0.14)',
                              borderColor: '#FF9A1F',
                              transform: 'translateY(-4px)',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: '56px',
                              height: '56px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#FF9A1F',
                              borderRadius: '12px',
                              color: '#050505',
                            }}
                          >
                            <Icon sx={{ fontSize: '1.5rem' }} />
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: '#FFFFFF',
                                mb: 1,
                              }}
                            >
                              {feature.title}
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: '0.95rem',
                                color: '#B8B8B8',
                                lineHeight: 1.6,
                              }}
                            >
                              {feature.description}
                            </Typography>
                          </Box>
                        </Card>
                      </motion.div>
                    </Grid>
                  )
                })}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection

