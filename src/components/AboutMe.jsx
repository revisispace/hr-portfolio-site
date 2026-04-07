import { Box, Typography, Container } from '@mui/material';

const AboutMe = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: { xs: 6, md: 10 } 
          }}
        >
          {/* Image Area */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '400px' }, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              alt="Strategic HR Executive"
              sx={{
                width: '100%',
                height: 'auto',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 20px 48px -10px rgba(15, 23, 42, 0.1)',
              }}
            />
          </Box>

          {/* Text Area */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, mb: 4, fontWeight: 900, color: 'text.primary', letterSpacing: -2 }}>
              About Me
            </Typography>
            <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 4, color: 'text.primary', fontStyle: 'italic', lineHeight: 1.4 }}>
              "Balancing business objectives with genuine human empathy."
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', mb: 3, fontSize: '1.125rem', lineHeight: 1.8 }}>
              I believe that a strong company is built on clear legal compliance, transparent communication, and a genuinely safe environment for its people. As a Senior HR Generalist, I bridge the gap between organizational strategy and individual growth.
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.125rem', lineHeight: 1.8 }}>
              With over a decade of experience across diverse industries, I specialize in industrial relations, risk mitigation, and operational excellence for global teams.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
