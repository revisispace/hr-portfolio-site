import { Box, Typography, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: 6, borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box 
                component="img" 
                src={logo} 
                alt="Anisah Balqis Logo"
                sx={{ height: 28, width: 'auto' }} 
              />
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: '"Merriweather", serif' }}>
                Anisah Balqis
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 500 }}>
              © 2025 Anisah Balqis. Dedicated to building better workplaces.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link component={RouterLink} to="/case-studies" color="inherit" sx={{ fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Case Studies</Link>
            <Link component={RouterLink} to="/about" color="inherit" sx={{ fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>About</Link>
            <Link component={RouterLink} to="/contact" color="inherit" sx={{ fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Contact</Link>
            <Link href="https://linkedin.com/in/anisah-balqis" target="_blank" color="inherit" sx={{ fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>LinkedIn</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
