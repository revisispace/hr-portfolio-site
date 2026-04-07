import { Box, Typography, Container, Grid } from '@mui/material';

const TimelineItem = ({ year, role, company, description, isLeft }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: isLeft ? 'row' : 'row-reverse',
      alignItems: 'flex-start',
      mb: 6,
      position: 'relative',
      width: '100%',
    }}
  >
    {/* Content Side */}
    <Box
      sx={{
        width: { xs: 'calc(100% - 40px)', md: '45%' },
        textAlign: { xs: 'left', md: isLeft ? 'right' : 'left' },
        px: 3,
      }}
    >
      <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
        {role}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>
        {company}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, maxWidth: { md: isLeft ? 'none' : 400 }, ml: { md: isLeft ? 'auto' : 0 } }}>
        {description}
      </Typography>
    </Box>

    {/* Center Spine & Dot */}
    <Box
      sx={{
        width: { xs: 40, md: '10%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        mt: 1,
      }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          bgcolor: 'primary.main',
          borderRadius: '50%',
          border: '4px solid white',
          boxShadow: '0 0 0 1px #E2E8F0',
          zIndex: 2,
        }}
      />
    </Box>

    {/* Year Side */}
    <Box
      sx={{
        width: { xs: 0, md: '45%' },
        display: { xs: 'none', md: 'block' },
        px: 3,
        textAlign: isLeft ? 'left' : 'right',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          color: 'text.secondary',
          mt: 0.5,
          fontFamily: '"Merriweather", serif',
        }}
      >
        {year}
      </Typography>
    </Box>
    
    {/* Mobile Year (Shown only on small screens) */}
    <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', top: -24, left: 52 }}>
       <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>{year}</Typography>
    </Box>
  </Box>
);

const Timeline = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" sx={{ letterSpacing: 4, fontWeight: 800, color: 'text.secondary', display: 'block', mb: 1 }}>
          THE JOURNEY
        </Typography>
        <Typography variant="h2" align="center" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: { xs: 8, md: 15 }, fontWeight: 800 }}>
          Career Timeline
        </Typography>

        <Box sx={{ position: 'relative' }}>
          {/* Vertical Central Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: 'divider',
              transform: { xs: 'none', md: 'translateX(-50%)' },
              zIndex: 1,
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 4 } }}>
            <TimelineItem
              year="2020 — Present"
              role="Senior HR Generalist"
              company="Global Tech Logistics Firm"
              description="Leading regional industrial relations and strategic support alignment across 5 countries."
              isLeft={true}
            />
            <TimelineItem
              year="2017 — 2020"
              role="Senior HR Generalist"
              company="Manufacturing Systems International"
              description="Reduced compliance risk across labor negotiations and human-centric compliance standards."
              isLeft={false}
            />
            <TimelineItem
              year="2012 — 2017"
              role="HR Specialist"
              company="Pacific Retail Solutions"
              description="Focused on performance management frameworks and early stage in-house discipline regulation."
              isLeft={true}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Timeline;
