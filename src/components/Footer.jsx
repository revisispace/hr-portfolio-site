import { Box, Typography, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: 6, borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
          <Box>
            <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: 800, mb: 1 }}>Anisah Balqis</Typography>
            <Typography variant="caption" color="text.secondary">© 2025 Anisah Balqis. Dedicated to building better workplaces.</Typography>
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
