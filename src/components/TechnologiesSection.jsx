import React from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Typography, Grid, Card, useMediaQuery, useTheme } from '@mui/material'

const TechnologiesSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const technologies = {
    Frontend: ['React', 'Next.js', 'Material UI', 'Tailwind CSS', 'Vue.js'],
    Backend: ['ASP.NET Core', 'Node.js', 'Python', 'Java', '.NET'],
    Database: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    Cloud: ['Azure', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
    Tools: ['GitHub', 'GitLab', 'Jira', 'CI/CD', 'Figma'],
  }

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
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#F5F5F5',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              color: '#111111',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Technologies We Use
          </Typography>
          <Box sx={{ height: '4px', width: '100px', background: '#FF9A1F', mx: 'auto', mb: 8 }} />
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {Object.entries(technologies).map(([category, items], index) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid rgba(255, 107, 61, 0.2)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.95)',
                        borderColor: '#FF9A1F',
                        boxShadow: '0 20px 40px rgba(255, 107, 61, 0.15)',
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    {/* Category Title */}
                    <Typography
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#FF9A1F',
                        mb: 3,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      {category}
                    </Typography>

                    {/* Tech Items */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: 1.5,
                              borderRadius: '6px',
                              backgroundColor: 'rgba(255, 107, 61, 0.05)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 107, 61, 0.1)',
                                transform: 'translateX(4px)',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#FF9A1F',
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                color: '#111111',
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default TechnologiesSection

