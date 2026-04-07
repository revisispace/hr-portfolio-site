import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Security, Analytics, Groups } from '@mui/icons-material';

const ValueCard = ({ icon: Icon, title, description }) => (
  <Card 
    sx={{ 
      height: '100%', 
      bgcolor: 'white', 
      borderRadius: '16px', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.02)', 
      border: '1px solid #F1F5F9',
      transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.05)',
      }
    }}
  >
    <CardContent sx={{ p: 5 }}>
      <Box 
        sx={{ 
          width: 48, 
          height: 48, 
          bgcolor: '#ECFDF5', 
          borderRadius: '12px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          mb: 3 
        }}
      >
        <Icon sx={{ color: '#059669', fontSize: 24 }} />
      </Box>
      <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 800, mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '1rem' }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const CoreValues = () => {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ValueCard 
              icon={Security}
              title="Integrity First"
              description="Maintaining strict confidentiality and ethical standards in all personnel matters, ensuring every decision is rooted in fairness."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ValueCard 
              icon={Analytics}
              title="Data-Driven Decisions"
              description="Aligning local HR metrics with global HQ standards to provide actionable insights that fuel organizational efficiency."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ValueCard 
              icon={Groups}
              title="Human-Centric Empathy"
              description="Creating psychologically safe workspaces and task forces that prioritize mental well-being alongside productivity."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreValues;
