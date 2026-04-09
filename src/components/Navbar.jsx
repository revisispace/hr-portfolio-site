import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        width: 280, 
        height: '100%', 
        bgcolor: 'white', 
        p: 3, 
        display: 'flex', 
        flexDirection: 'column' 
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
        <Typography variant="h6" sx={{ fontWeight: 900, fontFamily: '"Merriweather", serif' }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ mb: 'auto' }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 2 }}>
            <ListItemButton 
              component={NavLink} 
              to={item.path}
              sx={{ 
                borderRadius: 2,
                px: 2,
                '&.active': {
                  bgcolor: 'rgba(217, 176, 97, 0.1)',
                  '& .MuiListItemText-primary': {
                    color: '#D9B061',
                    fontWeight: 900
                  }
                },
                '&:hover': { bgcolor: 'rgba(217, 176, 97, 0.1)' }
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontWeight: 700, 
                  color: 'text.primary',
                  fontSize: '1.1rem'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button 
        variant="contained" 
        fullWidth
        component="a"
        href="https://drive.google.com/file/d/15BArPkxb9lnqYczvY4WmHJ_OCoDheZ77/view?usp=drive_link"
        target="_blank"
        sx={{ 
          borderRadius: 1, 
          fontWeight: 800, 
          bgcolor: '#D9B061', 
          color: 'black',
          py: 2,
          boxShadow: 'none',
          '&:hover': { bgcolor: '#C59A4F', boxShadow: 'none' }
        }}
      >
        Download CV
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" sx={{ bgcolor: 'white', borderBottom: 1, borderColor: 'divider', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 80, display: 'flex', justifyContent: 'space-between' }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Box 
              component="img" 
              src={logo} 
              alt="Anisah Balqis Logo"
              sx={{ 
                height: { xs: 32, md: 40 }, 
                width: 'auto',
                transition: '0.3s'
              }} 
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 800,
                fontFamily: '"Merriweather", serif',
                color: 'text.primary',
                whiteSpace: 'nowrap'
              }}
            >
              Anisah Balqis
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  position: 'relative',
                  '&.active': {
                    color: '#D9B061',
                    fontWeight: 800,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8, 
                      left: '15%',
                      width: '70%',
                      height: '2px',
                      bgcolor: '#D9B061',
                      borderRadius: '2px'
                    }
                  },
                  '&:hover': { color: '#D9B061', bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button 
              variant="contained" 
              color="primary" 
              component="a"
              href="https://drive.google.com/file/d/15BArPkxb9lnqYczvY4WmHJ_OCoDheZ77/view?usp=drive_link"
              target="_blank"
              sx={{ 
                ml: 2, 
                borderRadius: 1, 
                fontWeight: 700, 
                bgcolor: '#D9B061', 
                color: 'black',
                py: 1.2,
                px: 3,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#C59A4F', boxShadow: 'none' }
              }}
            >
              Download CV
            </Button>
          </Box>

          {/* Mobile Burger Bar Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, border: 'none' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
