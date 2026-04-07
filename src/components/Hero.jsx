import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ bgcolor: 'white', pt: { xs: 8, md: 15 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Text Area */}
          <Box sx={{ flex: 1, pr: { md: 8 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3.5rem', md: '5rem' },
                lineHeight: 1,
                mb: 4,
                fontWeight: 900,
                color: 'text.primary',
                letterSpacing: -2,
              }}
            >
              Strategic HR<br />
              Professional &<br />
              Industrial Relations<br />
              Expert
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: 'text.secondary',
                mb: 8,
                lineHeight: 1.8,
                maxWidth: 480,
              }}
            >
              Integrating legal compliance, global operational efficiency, and a safe workplace culture through structural rigor and human-centric leadership.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mb: { xs: 6, md: 0 } }}>
              <Button variant="contained" color="primary" sx={{ px: 4, py: 2, fontWeight: 800, borderRadius: 1.5 }}>
                DOWNLOAD RESUME
              </Button>
              <Button variant="outlined" color="primary" sx={{ px: 4, py: 2, fontWeight: 800, borderRadius: 1.5 }}>
                CONTACT ME
              </Button>
            </Box>
          </Box>

          {/* Image Area */}
          <Box sx={{ flex: '0 0 auto', display: { xs: 'none', md: 'flex' }, position: 'relative' }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
              alt="Strategic HR Professional Portrait"
              sx={{
                width: '100%',
                maxWidth: 320,
                height: 'auto',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow: '0 40px 100px -20px rgba(15, 23, 42, 0.2)',
                zIndex: 2,
              }}
            />
            {/* Subtle background flair */}
            <Box sx={{ position: 'absolute', right: -20, bottom: -20, width: 140, height: 140, bgcolor: '#F1F5F9', borderRadius: '50%', zIndex: 1 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
