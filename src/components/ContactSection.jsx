import { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
import { LinkedIn, ContentCopy, Place, Lock } from '@mui/icons-material';
import workspaceImage from '../assets/workspace.jpg';

const ContactSection = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ open: false, message: '', severity: 'success' });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('annisamsah99@gmail.com');
    setCopySuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Validate Access Key Loading
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS ERROR: Access Key is missing. Did you restart the server after creating .env?");
      setSubmitStatus({ 
        open: true, 
        message: 'Konfigurasi tidak lengkap (Access Key hilang). Silakan hubungi pengelola.', 
        severity: 'error' 
      });
      return;
    }

    setIsSubmitting(true);
    console.log("LOG: Starting form submission to Web3Forms...");

    // 2. Prepare Data (with botcheck/honeypot)
    const data = {
      ...formData,
      access_key: accessKey,
      subject: `New Inquiry from ${formData.name} - Portfolio`,
      from_name: "Portfolio Inquiry",
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
      console.log("LOG: Web3Forms Response:", result);

      if (result.success) {
        setSubmitStatus({ 
          open: true, 
          message: 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda.', 
          severity: 'success' 
        });
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        setSubmitStatus({ 
          open: true, 
          message: result.message || 'Gagal mengirim pesan. Silakan coba lagi nanti.', 
          severity: 'error' 
        });
      }
    } catch (error) {
      console.error("WEB3FORMS CONNECTION ERROR:", error);
      setSubmitStatus({ 
        open: true, 
        message: 'Terjadi kesalahan koneksi. Periksa jaringan Anda atau coba lagi.', 
        severity: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Typography 
          variant="h1" 
          align="center" 
          sx={{ 
            fontSize: { xs: '3rem', md: '5rem' }, 
            fontWeight: 900, 
            mb: 2,
            letterSpacing: -3,
            lineHeight: 1
          }}
        >
          Let's Connect
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ 
            color: 'text.secondary', 
            mb: 10, 
            maxWidth: 600, 
            mx: 'auto', 
            fontSize: '1.25rem',
            lineHeight: 1.6
          }}
        >
          Whether you're looking for a strategic HR partner or just want to discuss industrial relations, my inbox is always open.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 10 } }}>
          {/* Left Column */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 40%' } }}>
            <Box
              component="img"
              src={workspaceImage}
              alt="Professional Workspace"
              sx={{
                width: '100%',
                height: 380,
                objectFit: 'cover',
                borderRadius: '16px',
                mb: 6
              }}
            />
            
            <Box sx={{ mb: 6 }}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#64748B', display: 'block', mb: 2 }}>
                EMAIL INQUIRY
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  p: 2.5, 
                  border: '1px solid #E2E8F0', 
                  borderRadius: 1.5,
                  bgcolor: 'white'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                   <Box component="span" sx={{ fontSize: 20 }}>📩</Box>
                   <Typography variant="body1" sx={{ fontWeight: 600 }}>annisamsah99@gmail.com</Typography>
                </Box>
                <IconButton size="small" onClick={handleCopyEmail}>
                  <ContentCopy sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>
              <Snackbar 
                open={copySuccess} 
                autoHideDuration={3000} 
                onClose={() => setCopySuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              >
                <Alert severity="success" sx={{ width: '100%' }}>Email copied to clipboard!</Alert>
              </Snackbar>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#64748B', display: 'block', mb: 2 }}>
                PROFESSIONAL NETWORK
              </Typography>
              <Button 
                variant="contained" 
                fullWidth 
                startIcon={<LinkedIn />}
                component="a"
                href="https://linkedin.com/in/anisah-balqis"
                target="_blank"
                sx={{ 
                  bgcolor: '#0077B5', 
                  py: 2,
                  fontWeight: 800, 
                  borderRadius: 1.5,
                  justifyContent: 'flex-start',
                  px: 3,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': { bgcolor: '#006699' }
                }}
              >
                Connect on LinkedIn
              </Button>
            </Box>

            <Box>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#64748B', display: 'block', mb: 2 }}>
                LOCATION & MOBILITY
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <Place color="action" />
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, lineHeight: 1.6 }}>
                  Available for opportunities in Jakarta, Bekasi, and surrounding areas.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Column (Form) */}
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ flex: 1, p: { xs: 4, md: 8 }, bgcolor: 'white', borderRadius: '16px', border: '1px solid #F1F5F9', boxShadow: '0 4px 30px rgba(0,0,0,0.02)' }}
          >
               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#334155', display: 'block', mb: 1.5 }}>
                      NAME
                    </Typography>
                    <TextField 
                      fullWidth 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      variant="filled" 
                      InputProps={{ 
                        disableUnderline: true, 
                        sx: { bgcolor: '#F1F5F9', borderRadius: 1.5, py: 1.5, px: 1, fontWeight: 500 } 
                      }} 
                    />
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#334155', display: 'block', mb: 1.5 }}>
                      COMPANY
                    </Typography>
                    <TextField 
                      fullWidth 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Organization Name" 
                      variant="filled" 
                      InputProps={{ 
                        disableUnderline: true, 
                        sx: { bgcolor: '#F1F5F9', borderRadius: 1.5, py: 1.5, px: 1, fontWeight: 500 } 
                      }} 
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#334155', display: 'block', mb: 1.5 }}>
                      EMAIL ADDRESS
                    </Typography>
                    <TextField 
                      fullWidth 
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com" 
                      variant="filled" 
                      InputProps={{ 
                        disableUnderline: true, 
                        sx: { bgcolor: '#F1F5F9', borderRadius: 1.5, py: 1.5, px: 1, fontWeight: 500 } 
                      }} 
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#334155', display: 'block', mb: 1.5 }}>
                      MESSAGE
                    </Typography>
                    <TextField 
                      fullWidth 
                      name="message"
                      required
                      multiline 
                      rows={6} 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I assist your organization?" 
                      variant="filled" 
                      InputProps={{ 
                        disableUnderline: true, 
                        sx: { bgcolor: '#F1F5F9', borderRadius: 1.5, py: 1.5, px: 1, fontWeight: 500 } 
                      }} 
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <Button 
                      variant="contained" 
                      fullWidth 
                      type="submit"
                      disabled={isSubmitting}
                      sx={{ 
                        bgcolor: 'black', 
                        color: 'white', 
                        py: 2.5, 
                        fontWeight: 900, 
                        borderRadius: 1.5,
                        fontSize: '1.125rem',
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#1E293B' }
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 3, opacity: 0.6 }}>
                       <Lock sx={{ fontSize: 14 }} />
                       <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          Your messages are confidential. I typically respond within 24 hours.
                       </Typography>
                    </Box>
                  </Box>
               </Box>
          </Box>
        </Box>

        {/* Stats Row */}
        <Box sx={{ mt: 15, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 6 }}>
          {[
            { label: 'YEARS EXPERIENCE', val: '5+' },
            { label: 'RESOLUTION RATE', val: '98%' },
            { label: 'MEDIATIONS HANDLED', val: '20+' }
          ].map((stat, idx) => (
            <Box key={idx} sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 900, mb: 1, letterSpacing: -2 }}>
                {stat.val}
              </Typography>
              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2, color: 'text.secondary', fontSize: '0.9rem' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

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
      </Container>
    </Box>
  );
};

export default ContactSection;
