import { Box, Typography, Container, Grid, TextField, Button, IconButton } from '@mui/material';
import { LinkedIn, ContentCopy, Place, Lock } from '@mui/icons-material';

const ContactSection = () => {
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
              src="https://images.unsplash.com/photo-1544980766-42ed401cb18b?q=80&w=800&auto=format&fit=crop"
              alt="Professional Workspace"
              sx={{
                width: '100%',
                height: 380,
                objectFit: 'cover',
                borderRadius: '8px',
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
                   <Typography variant="body1" sx={{ fontWeight: 600 }}>contact@example.com</Typography>
                </Box>
                <IconButton size="small"><ContentCopy sx={{ fontSize: 18 }} /></IconButton>
              </Box>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#64748B', display: 'block', mb: 2 }}>
                PROFESSIONAL NETWORK
              </Typography>
              <Button 
                variant="contained" 
                fullWidth 
                startIcon={<LinkedIn />}
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
          <Box sx={{ flex: 1, p: { xs: 4, md: 8 }, bgcolor: 'white', borderRadius: '16px', border: '1px solid #F1F5F9', boxShadow: '0 4px 30px rgba(0,0,0,0.02)' }}>
               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                    <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.5, color: '#334155', display: 'block', mb: 1.5 }}>
                      NAME
                    </Typography>
                    <TextField 
                      fullWidth 
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
                      multiline 
                      rows={6} 
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
                      Send Message
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
            { label: 'YEARS EXPERIENCE', val: '15+' },
            { label: 'RESOLUTION RATE', val: '98%' },
            { label: 'MEDIATIONS HANDLED', val: '200+' }
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
      </Container>
    </Box>
  );
};

export default ContactSection;
