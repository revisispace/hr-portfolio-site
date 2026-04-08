import { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Snackbar, Alert } from '@mui/material';

const InquirySection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ open: false, message: '', severity: 'success' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Validate Access Key Loading
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS ERROR (Inquiry): Access Key is missing. Check your .env file and restart server.");
      setSubmitStatus({ 
        open: true, 
        message: 'Akses ditolak (Key tidak ditemukan). Pastikan file .env sudah dikonfigurasi.', 
        severity: 'error' 
      });
      return;
    }

    setIsSubmitting(true);
    console.log("LOG (Inquiry): Starting submission...");

    // 2. Prepare Data (with botcheck/honeypot)
    const data = {
      ...formData,
      access_key: accessKey,
      subject: `Organizational Framework Inquiry from ${formData.name}`,
      from_name: "Strategic Inquiry",
      botcheck: "" // Hidden Honeypot
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("LOG (Inquiry): Response:", result);

      if (result.success) {
        setSubmitStatus({ 
          open: true, 
          message: 'Inquiry sent successfully! I will reach out shortly.', 
          severity: 'success' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ 
          open: true, 
          message: result.message || 'Failed to send inquiry. Please try again.', 
          severity: 'error' 
        });
      }
    } catch (error) {
      console.error("WEB3FORMS ERROR (Inquiry):", error);
      setSubmitStatus({ 
        open: true, 
        message: 'A connection error occurred. Please check your network.', 
        severity: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ bgcolor: '#000000', py: { xs: 8, md: 15 }, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative diagonal overlay */}
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
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'white', 
                fontSize: { xs: '2.25rem', md: '3.5rem' }, 
                fontFamily: '"Merriweather", serif',
                fontWeight: 700, 
                mb: 3, 
                lineHeight: 1.2,
                letterSpacing: -0.5
              }}
            >
              Let's strengthen your organizational framework.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontSize: '1.1rem', 
                mb: 8, 
                maxWidth: 600,
                lineHeight: 1.6
              }}
            >
              Currently open for strategic consulting or senior-level opportunities in HR and Industrial Relations.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%', maxWidth: '850px' }}>
              {/* Honeypot Spam Protection */}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
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
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
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
              </Box>

              <Box sx={{ width: '100%', mb: 3 }}>
                <TextField
                  fullWidth
                  name="message"
                  required
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
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

              <Box sx={{ textAlign: 'left' }}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    bgcolor: '#EAC583',
                    color: 'black',
                    fontWeight: 900,
                    px: 5,
                    py: 1.8,
                    borderRadius: '2px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    boxShadow: 'none',
                    '&:hover': { bgcolor: '#D9B061', boxShadow: 'none' }
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar 
        open={submitStatus.open} 
        autoHideDuration={6000} 
        onClose={() => setSubmitStatus({ ...submitStatus, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={submitStatus.severity} sx={{ width: '100%' }}>
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InquirySection;
