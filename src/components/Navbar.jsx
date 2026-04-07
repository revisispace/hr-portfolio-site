import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <AppBar position="sticky" color="default" sx={{ bgcolor: 'white', borderBottom: 1, borderColor: 'divider', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 80, display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h2"
            component={RouterLink}
            to="/"
            sx={{
              fontSize: '1.25rem',
              fontWeight: 800,
              fontFamily: '"Merriweather", serif',
              color: 'text.primary',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            The Executive Editorial
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button 
              variant="contained" 
              color="primary" 
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
