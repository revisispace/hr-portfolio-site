import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';

const InquirySection = () => {
  return (
    <Box sx={{ bgcolor: '#0B0F1A', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative diagonal overlay mentioned in the prompt/implied */}
      <Box 
        sx={{ 
          position: 'absolute', 
          right: 0, 
          top: 0, 
          bottom: 0, 
          width: '30%', 
          bgcolor: 'rgba(255, 255, 255, 0.03)', 
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
          display: { xs: 'none', md: 'block' }
        }} 
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 800, mb: 3, lineHeight: 1.1, letterSpacing: -2 }}>
              Let's strengthen your organizational framework.
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem', mb: 8, maxWidth: 640 }}>
              Currently open for strategic consulting or senior-level opportunities in HR and Industrial Relations.
            </Typography>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Full Name"
                    variant="filled"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.05)',
                      borderRadius: 1,
                      '& .MuiFilledInput-root': {
                        color: 'white',
                        '&:before': { borderBottom: 'none' },
                        '&:after': { borderBottom: 'none' },
                        '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                      },
                      input: { color: 'white', py: 2.5 }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Email Address"
                    variant="filled"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.05)',
                      borderRadius: 1,
                      '& .MuiFilledInput-root': {
                        color: 'white',
                        '&:before': { borderBottom: 'none' },
                        '&:after': { borderBottom: 'none' },
                        '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                      },
                      input: { color: 'white', py: 2.5 }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Message"
                    variant="filled"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.05)',
                      borderRadius: 1,
                      '& .MuiFilledInput-root': {
                        color: 'white',
                        '&:before': { borderBottom: 'none' },
                        '&:after': { borderBottom: 'none' },
                        '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                      },
                      textarea: { color: 'white' }
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D9B061', // The gold/mustard from the screenshots
                  color: 'black',
                  fontWeight: 900,
                  px: 5,
                  py: 2,
                  borderRadius: 1,
                  '&:hover': { bgcolor: '#C59A4F' }
                }}
              >
                Send Inquiry
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InquirySection;
