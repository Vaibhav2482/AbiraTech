import React from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Typography, Grid, Card, useMediaQuery, useTheme } from '@mui/material'

const ProcessTimeline = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const steps = [
    { num: '01', title: 'Discovery', description: 'We understand your goals, market, and requirements.' },
    { num: '02', title: 'Planning', description: 'Strategic planning and technical architecture design.' },
    { num: '03', title: 'UI/UX Design', description: 'Creating beautiful and intuitive user experiences.' },
    { num: '04', title: 'Development', description: 'Building robust and scalable applications.' },
    { num: '05', title: 'Testing', description: 'Rigorous QA and performance optimization.' },
    { num: '06', title: 'Deployment', description: 'Smooth launch and production deployment.' },
    { num: '07', title: 'Support', description: '24/7 support and continuous improvements.' },
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
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F5F5F5 0%, #FAFAFA 100%)',
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
            How We Work
          </Typography>
          <Box sx={{ height: '4px', width: '100px', background: '#FF9A1F', mx: 'auto', mb: 8 }} />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={3}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={12 / Math.ceil(steps.length / 2)} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      p: 3,
                      backgroundColor: 'white',
                      border: '2px solid #E0E0E0',
                      borderRadius: '8px',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        borderColor: '#FF9A1F',
                        boxShadow: '0 12px 24px rgba(255, 107, 61, 0.1)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    {/* Step Number */}
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#FF9A1F',
                        lineHeight: 1,
                        mb: 2,
                      }}
                    >
                      {step.num}
                    </Typography>

                    {/* Step Title */}
                    <Typography
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#111111',
                        mb: 1,
                      }}
                    >
                      {step.title}
                    </Typography>

                    {/* Step Description */}
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        color: '#666666',
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {step.description}
                    </Typography>

                    {/* Connecting Line */}
                    {index < steps.length - 1 && !isMobile && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          right: '-3.5%',
                          width: '7%',
                          height: '2px',
                          background: '#E0E0E0',
                          transform: 'translateY(-50%)',
                          '@media (max-width: 900px)': {
                            display: 'none',
                          },
                        }}
                      />
                    )}
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

export default ProcessTimeline

