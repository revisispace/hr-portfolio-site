import { Box, Typography, Container, Grid, Chip, Divider } from '@mui/material';
import { Download, Timeline as TimelineIcon, Analytics, WorkspacePremium } from '@mui/icons-material';
import Button from '@mui/material/Button';

const Specializations = () => {
  const skills = [
    'INDONESIAN LABOR LAW', 'HRIS TOOLS', 'STRATEGIC ALIGNMENT',
    'CONFLICT RESOLUTION', 'COLLECTIVE LABOR AGREEMENT', 'PERFORMANCE MANAGEMENT',
    'TALENT ACQUISITION', 'INDUSTRIAL RELATIONS', 'WORKPLACE SAFETY'
  ];

  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, mb: 4, fontWeight: 900, lineHeight: 1 }}>
              Strategic<br />Specializations
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, maxWidth: 380, fontSize: '1.125rem', lineHeight: 1.8 }}>
              Key competencies developed through over a decade of high-stakes Industrial Relations and human resources management.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                borderRadius: 1.5, 
                py: 2, 
                px: 4, 
                fontWeight: 800,
                bgcolor: '#D9B061',
                color: 'black'
              }}
            >
              <Download sx={{ fontSize: 20 }} /> DOWNLOAD CV
            </Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ bgcolor: '#F1F5F9', p: { xs: 4, md: 8 }, borderRadius: '24px' }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 10 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      bgcolor: 'white',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                      color: '#475569',
                      fontWeight: 800,
                      p: 1.5,
                      fontSize: '0.7rem',
                      borderRadius: '8px',
                      letterSpacing: 0.5,
                      border: '1px solid #E2E8F0',
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box>
                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                     <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', fontSize: '0.65rem', letterSpacing: 1 }}>
                       PRIMARY EXPERTISE
                     </Typography>
                   </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 800 }}>
                    Senior Human Resources Generalist
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>Industrial Relations Specialist</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 8 }}>
                  <Box>
                    <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 900, color: '#D9B061', mb: 0.5, lineHeight: 1 }}>12+</Typography>
                    <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', fontSize: '0.65rem' }}>YEARS EXP.</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 900, color: '#D9B061', mb: 0.5, lineHeight: 1 }}>150+</Typography>
                    <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', fontSize: '0.65rem' }}>RESOLUTIONS</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Specializations;
