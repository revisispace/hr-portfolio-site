import { Box, Typography, Container } from '@mui/material';

const timelineData = [
  {
    year: "Feb 2023 — Present",
    role: "Senior Human Resource Generalist",
    company: "PT. Multi Bina Pura International (Evergreen Group)",
    description: "Leading end-to-end strategic HR operations, overseeing industrial relations and compliance, and ensuring accurate HR reporting directly to Evergreen Expatriates in Taipei."
  },
  {
    year: "Aug 2024 — Jan 2025",
    role: "Legal Officer (Freelance)",
    company: "PT. Beringin Pratama Sentosa",
    description: "Drafted legal agreements, developed document control systems, and provided legal opinions to guide management in risk mitigation and dispute prevention."
  },
  {
    year: "Aug 2022 — Nov 2022",
    role: "Content Specialist Intern",
    company: "Jurist Wanna Be",
    description: "Managed social media content strategy, researched labor market data, and produced SEO-optimized copywriting for targeted audiences."
  },
  {
    year: "Sept 2022 — Oct 2022",
    role: "Vice President Partnerships",
    company: "Career Network",
    description: "Drafted MoUs, negotiated partnership agreements, and coordinated collaboration execution with external stakeholders."
  },
  {
    year: "Aug 2021 — Jan 2022",
    role: "Human Capital Intern Staff (HCBP)",
    company: "PT Bank Syariah Indonesia Tbk.",
    description: "Assisted in HR issue analysis, supported manpower planning through data research, and liaised with management for HR process improvements."
  }
];

const TimelineItem = ({ year, role, company, description, isLeft }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: isLeft ? 'row' : 'row-reverse',
      alignItems: 'flex-start',
      mb: 8,
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
      <Typography variant="body2" sx={{ fontWeight: 700, color: '#D9B061', mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>
        {company}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, maxWidth: { md: isLeft ? 'none' : 450 }, ml: { md: isLeft ? 'auto' : 0 } }}>
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
          width: 14,
          height: 14,
          bgcolor: '#0F172A',
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
       <Typography variant="caption" sx={{ fontWeight: 700, color: '#D9B061' }}>{year}</Typography>
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
        <Typography variant="h2" align="center" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: { xs: 10, md: 15 }, fontWeight: 900, letterSpacing: -1.5 }}>
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

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                role={item.role}
                company={item.company}
                description={item.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Timeline;
