import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: 6, borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
          <Box>
            <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: 800, mb: 1 }}>The Executive Editorial</Typography>
            <Typography variant="caption" color="text.secondary">© 2024 The Executive Editorial. Dedicated to building better workplaces.</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link href="#" color="inherit" sx={{ fontSize: '0.875rem', fontWeight: 500 }}>Privacy Policy</Link>
            <Link href="#" color="inherit" sx={{ fontSize: '0.875rem', fontWeight: 500 }}>Terms of Service</Link>
            <Link href="#" color="inherit" sx={{ fontSize: '0.875rem', fontWeight: 500 }}>LinkedIn</Link>
            <Link href="#" color="inherit" sx={{ fontSize: '0.875rem', fontWeight: 500 }}>Contact</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
