import { Box, Typography, Container, Grid, Card, CardContent, Chip, Stack, Paper } from '@mui/material';
import { EmojiEvents, WorkspacePremium, AutoAwesome } from '@mui/icons-material';

const achievementsData = [
  {
    title: "Best Delegate Award",
    event: "SEBELAS MARET MODEL UNITED NATIONS",
    year: "2019"
  },
  {
    title: "6th rank Memorial - Observer (Writing Memorial)",
    event: "INTERNATIONAL HUMANITARIAN LAW MOOT COURT COMPETITION",
    year: "2019"
  },
  {
    title: "Top 10 Best Oralist",
    event: "INTERNATIONAL LAW COMMUNITY INTERNAL MOOT COURT COMPETITION",
    year: "2018"
  },
  {
    title: "Verbal Commendation Award",
    event: "UNS MODEL UNITED NATIONS CLUB INTERNAL CONFERENCE",
    year: "2018"
  }
];

const certifications = [
  { name: "TOEFL", detail: "Score: 580/677" },
  { name: "English First-SET", detail: "Score: C1 Advanced" },
  { name: "BSI Course", detail: "" }
];

const strengths = [
  "Detail-Oriented", 
  "Fast Learner", 
  "Strong Communication", 
  "Adaptable in Multitasking Environments"
];

const Achievements = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Achievements Column */}
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="overline" sx={{ letterSpacing: 3, fontWeight: 900, color: 'primary.main', mb: 1, display: 'block' }}>
                PROFESSIONAL EXCELLENCE
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 900, letterSpacing: -1, mb: 2 }}>
                Key Achievements
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {achievementsData.map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%',
                      borderRadius: 2, 
                      border: '1px solid #E2E8F0',
                      transition: '0.2s',
                      '&:hover': { bgcolor: '#F8FAFC', borderColor: '#D9B061' }
                    }}
                  >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: { xs: 2, md: 3 }, height: '100%' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, bgcolor: 'rgba(217, 176, 97, 0.1)', borderRadius: 1.5, flexShrink: 0 }}>
                        <EmojiEvents sx={{ color: '#D9B061', fontSize: 18 }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2, mb: 0.5, fontSize: { xs: '0.85rem', md: '1rem' } }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 0.5, fontSize: { xs: '0.7rem', md: '0.8rem' } }}>
                          {item.event}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.7rem' }}>
                          {item.year}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Certifications & Strengths Column */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Box sx={{ mb: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 900, mb: 4 }}>Certifications</Typography>
                <Stack spacing={2}>
                  {certifications.map((cert, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <WorkspacePremium sx={{ color: '#64748B', mt: 0.3 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700 }}>{cert.name}</Typography>
                        {cert.detail && (
                          <Typography variant="body2" color="text.secondary">{cert.detail}</Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, mb: 4 }}>Core Strengths</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {strengths.map((strength) => (
                    <Chip 
                      key={strength} 
                      label={strength} 
                      icon={<AutoAwesome sx={{ fontSize: '1rem !important' }} />}
                      sx={{ 
                        fontWeight: 700, 
                        px: 1, 
                        py: 2.5,
                        borderRadius: 2, 
                        bgcolor: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        '& .MuiChip-label': { px: 1.5 }
                      }} 
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;
