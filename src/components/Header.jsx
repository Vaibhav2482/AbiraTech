import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Button, AppBar, Toolbar, Link, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Services', 'Projects', 'About', 'Contact']

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} sx={{ mb: 1 }}>
            <Link href={`#${item.toLowerCase()}`} sx={{ fontSize: '1rem', fontWeight: 500, width: '100%' }}>
              {item}
            </Link>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FF9A1F',
          color: 'white',
          width: '100%',
          mt: 2,
          textTransform: 'none',
          fontWeight: 600,
        }}
      >
        Start Project
      </Button>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: isScrolled ? 'rgba(5, 5, 5, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(14px)' : 'none',
          boxShadow: isScrolled ? '0 24px 60px rgba(0, 0, 0, 0.25)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          borderBottom: isScrolled ? '1px solid rgba(255, 154, 31, 0.15)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5 }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Box sx={{ cursor: 'pointer' }}>
                <Logo size={42} />
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      sx={{
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        position: 'relative',
                        textDecoration: 'none',
                        '&:hover': { color: '#FF9A1F' },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -5,
                          left: 0,
                          width: 0,
                          height: 2,
                          backgroundColor: '#FF9A1F',
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            )}

            {/* Desktop CTA Button */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FF9A1F',
                    color: 'white',
                    px: 3,
                    py: 1.2,
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: '4px',
                    '&:hover': {
                      backgroundColor: '#E17A00',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Start a Project
                </Button>
              </motion.div>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      )}
    </>
  )
}

export default Header

