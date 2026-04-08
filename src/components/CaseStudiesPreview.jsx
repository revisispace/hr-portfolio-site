import { Box, Typography, Container, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import impactImage from '../assets/impact-case.jpg';

const CaseStudiesPreview = () => {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" sx={{ letterSpacing: 6, fontWeight: 900, color: 'text.secondary', display: 'block', mb: 1 }}>
          PROOF OF IMPACT
        </Typography>
        <Typography variant="h2" align="center" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: { xs: 8, md: 12 }, fontWeight: 900, letterSpacing: -1.5 }}>
          Case Studies
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: { xs: 6, md: 10 } 
          }}
        >
          {/* Image Area */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '16/10',
                bgcolor: '#0F172A',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: { xs: 3, md: 5 },
                boxShadow: '0 40px 100px -20px rgba(15, 23, 42, 0.25)',
              }}
            >
              <Box
                component="img"
                src={impactImage}
                alt="End-to-End Industrial Relations Dispute Resolution"
                sx={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '12px', 
                  boxShadow: 10 
                }}
              />
            </Box>
          </Box>

          {/* Text Area */}
          <Box sx={{ flex: 1, textAlign: 'left' }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, mb: 4, fontWeight: 900, lineHeight: 1.1 }}>
              End-to-End Industrial<br />Relations Dispute<br />Resolution
            </Typography>
            <Box sx={{ mb: 6 }}>
              <Typography variant="overline" display="block" sx={{ fontWeight: 900, mb: 1.5, color: '#D9B061', fontSize: '0.7rem', letterSpacing: 2 }}>
                CHALLENGE
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.8, fontSize: '1.125rem' }}>
                Navigating a high-stakes collective labor dispute involving over 500 employees across multiple jurisdictions.
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography variant="overline" display="block" sx={{ fontWeight: 900, mb: 1.5, color: '#D9B061', fontSize: '0.7rem', letterSpacing: 2 }}>
                RESULT
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.8, fontSize: '1.125rem' }}>
                • 100% resolution rate without court escalation.<br />
                • 15% reduction in annual legal contingency fund.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
               <Button 
                component={RouterLink} 
                to="/case-studies"
                variant="contained" 
                color="primary"
                endIcon={<ArrowForward />} 
                sx={{ fontWeight: 800, px: 4, py: 2, borderRadius: 1.5 }}
              >
                VIEW FULL STUDY
              </Button>
               <Button 
                component={RouterLink} 
                to="/contact"
                variant="outlined" 
                color="primary"
                sx={{ fontWeight: 800, px: 4, py: 2, borderRadius: 1.5 }}
              >
                CONTACT ME
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudiesPreview;
