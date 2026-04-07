import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Balance, Public, Shield, Handshake } from '@mui/icons-material';

const CoreExpertise = () => {
  const expertise = [
    { icon: <Balance fontSize="large" color="primary" />, title: 'Industrial Relations & PHI', desc: 'Expertise in labor legislation, mediation, and bipartite negotiation.' },
    { icon: <Public fontSize="large" color="primary" />, title: 'Global HR Operations', desc: 'Managing multi-country HR frameworks and operational excellence.' },
    { icon: <Shield fontSize="large" color="primary" />, title: 'Risk Mitigation & Compliance', desc: 'Implementing strict governance, ethics, and legal compliance.' },
    { icon: <Handshake fontSize="large" color="primary" />, title: 'Strategic Offboarding', desc: 'Ensuring smooth, professional, and compliant career transitions.' },
  ];

  return (
    <Box sx={{ bgcolor: 'white', pt: 12, pb: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ letterSpacing: 3, fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1 }}>
          STRATEGIC PILLARS
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '2rem', mb: 8, color: 'text.primary' }}>
          Core Expertise
        </Typography>

        <Grid container spacing={4}>
          {expertise.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'transparent',
                  border: '1px solid #E2E8F0',
                  boxShadow: 'none',
                  borderRadius: 2,
                  transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px -10px rgba(15, 23, 42, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 3 }}>{item.icon}</Box>
                  <Typography variant="h3" sx={{ fontSize: '1.125rem', fontWeight: 600, mb: 1, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreExpertise;
