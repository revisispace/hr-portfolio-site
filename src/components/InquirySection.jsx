import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';

const InquirySection = () => {
  return (
    <Box sx={{ bgcolor: '#000000', py: { xs: 8, md: 15 }, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative diagonal overlay from the design image */}
      <Box 
        sx={{ 
          position: 'absolute', 
          right: 0, 
          top: 0, 
          bottom: 0, 
          width: '35%', 
          bgcolor: 'rgba(255, 255, 255, 0.05)', 
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
          display: { xs: 'none', md: 'block' },
          zIndex: 1
        }} 
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            {/* Heading: Merriweather Serif as shown in the design */}
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'white', 
                fontSize: { xs: '2rem', md: '3.25rem' }, 
                fontFamily: '"Merriweather", serif',
                fontWeight: 700, 
                mb: 3, 
                lineHeight: 1.2,
                letterSpacing: -0.5
              }}
            >
              Let's strengthen your organizational framework.
            </Typography>

            {/* Subheading: Muted Sans-serif */}
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontSize: '1.1rem', 
                mb: 6, 
                maxWidth: 600,
                lineHeight: 1.6
              }}
            >
              Currently open for strategic consulting or senior-level opportunities in HR and Industrial Relations.
            </Typography>

            {/* Robust Flexbox Layout: Replaces MUI Grid to Fix Live Site Wrapping */}
            <Box 
              component="form" 
              noValidate 
              sx={{ 
                width: '100%', 
                maxWidth: '850px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2 // Solid tight gap control
              }}
            >
              {/* Row 1: Full Name & Email Address (50% each on desktop) */}
              <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                <TextField
                  fullWidth
                  placeholder="Full Name"
                  variant="outlined"
                  sx={{
                    bgcolor: '#111827',
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      height: '56px',
                      '& fieldset': { borderColor: '#1e293b' },
                      '&:hover fieldset': { borderColor: '#334155' },
                      '&.Mui-focused fieldset': { borderColor: '#D9B061' },
                    },
                    '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 }
                  }}
                />
              </Box>

              <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                <TextField
                  fullWidth
                  placeholder="Email Address"
                  variant="outlined"
                  sx={{
                    bgcolor: '#111827',
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      height: '56px',
                      '& fieldset': { borderColor: '#1e293b' },
                      '&:hover fieldset': { borderColor: '#334155' },
                      '&.Mui-focused fieldset': { borderColor: '#D9B061' },
                    },
                    '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 }
                  }}
                />
              </Box>

              {/* Row 2: Message (100% width forced) */}
              <Box sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Message"
                  variant="outlined"
                  sx={{
                    bgcolor: '#111827',
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: '#1e293b' },
                      '&:hover fieldset': { borderColor: '#334155' },
                      '&.Mui-focused fieldset': { borderColor: '#D9B061' },
                    },
                    '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 }
                  }}
                />
              </Box>

              {/* Action Button: Pushed below the flex container or part of it */}
              <Box sx={{ width: '100%', mt: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#EAC583', // Exact Gold/Cream palette
                    color: 'black',
                    fontWeight: 900,
                    px: 4.5,
                    py: 1.8,
                    borderRadius: '2px', // Professional rectangular look
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': { bgcolor: '#D9B061' }
                  }}
                >
                  Send Inquiry
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InquirySection;
