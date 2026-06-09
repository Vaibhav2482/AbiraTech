import React from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Typography, Button, Grid, Card, CardContent, useMediaQuery, useTheme } from '@mui/material'
import warehouseImg from '../assets/warehouse.jpeg'
import payrollImg from '../assets/payroll.jpeg'
import automationImg from '../assets/egle.png'
import websolImg from '../assets/websol.png'

const FeaturedProjects = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const projects = [
    {
      id: 1,
      title: 'Warehouse Analytics Dashboard',
      subtitle: 'Real-time warehouse visibility and operational insights',
      tech: ['React', 'ASP.NET Core', 'SQL Server'],
      image: warehouseImg,
      description: 'A premium analytics platform designed for warehouse performance and accuracy.',
    },
    {
      id: 2,
      title: 'Payroll Management System',
      subtitle: 'Automated payroll processing with secure reporting',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: payrollImg,
      description: 'A reliable payroll platform for structured pay cycles and compliance control.',
    },
    {
      id: 3,
      title: 'Business Automation Portal',
      subtitle: 'Workflow automation for business operations',
      tech: ['React', 'ASP.NET Core', 'SQL Server'],
      image: automationImg,
      description: 'Automation portal that simplifies operations, approvals, and real-time tracking.',
    },
    {
      id: 4,
      title: 'Web Application Solutions',
      subtitle: 'Custom web products for growth-driven teams',
      tech: ['Next.js', 'Node.js', 'PostgreSQL'],
      image: websolImg,
      description: 'Tailored web applications built for performance, scalability, and user clarity.',
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
      id="projects"
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
              mb: 3,
              textAlign: 'center',
            }}
          >
            Recent Projects
          </Typography>
          <Box sx={{ height: '4px', width: '100px', background: '#FF9A1F', mx: 'auto', mb: 6 }} />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      height: '100%',
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    {/* Project Image */}
                    <Box
                      sx={{
                        height: '300px',
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.35)',
                          transition: 'all 0.3s ease',
                        },
                      }}
                    />

                    {/* Project Content */}
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                      <Typography
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: '#FF9A1F',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          mb: 1,
                        }}
                      >
                        Project
                      </Typography>

                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: '1.75rem',
                          fontWeight: 700,
                          mb: 1,
                          color: '#111111',
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color: '#666666',
                          fontWeight: 500,
                          mb: 2,
                        }}
                      >
                        {project.subtitle}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: '#666666',
                          lineHeight: 1.6,
                          mb: 3,
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                        {project.tech.map((tech, i) => (
                          <Box
                            key={i}
                            sx={{
                              px: 2,
                              py: 0.75,
                              backgroundColor: '#F5F5F5',
                              borderRadius: '4px',
                              fontSize: '0.8rem',
                              fontWeight: 500,
                              color: '#111111',
                              border: '1px solid #E0E0E0',
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>

                      {/* View Case Study Button */}
                      <Button
                        sx={{
                          color: '#FF9A1F',
                          fontWeight: 600,
                          textTransform: 'none',
                          fontSize: '0.95rem',
                          p: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#E55A2D',
                            transform: 'translateX(4px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        View Case Study →
                      </Button>
                    </CardContent>
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

export default FeaturedProjects

