import { Box, Typography, Container, Grid, Card, CardContent, Divider, Chip, Paper, Button } from '@mui/material';
import { 
  Public as PublicIcon, 
  Gavel as GavelIcon, 
  Psychology as PsychologyIcon, 
  Favorite as FavoriteIcon, 
  FlightTakeoff as FlightTakeoffIcon,
  ArrowForward as ArrowForwardIcon 
} from '@mui/icons-material';

const hrExpertiseData = [
  {
    category: "Global HR Operations & Analytics",
    icon: PublicIcon,
    title: "Global HR Operations & Analytics",
    description: "Aligning local HR operations with global standards through precise data analytics and comprehensive strategic reporting.",
    highlights: [
      { label: "Global Reporting & Alignment", details: "Personnel Monthly Report, Annual Report, dan Variation Report (TPE HQ)." },
      { label: "Manpower & Budget Planning", details: "Manpower Budget, Cost & Wages Increase Analysis." },
      { label: "HR Metrics & Analytics", details: "Turnover Rate Analysis." },
      { label: "Organizational Design", details: "Pemetaan dan penyesuaian Struktur Organisasi MBPT." }
    ]
  },
  {
    category: "Industrial Relations & Compliance",
    icon: GavelIcon,
    title: "Industrial Relations & Compliance",
    description: "Ensuring regulatory compliance and mitigating corporate risk through a decisive, ethical, and measured approach to industrial relations.",
    highlights: [
      { label: "Regulatory Compliance", details: "Pembuatan dan eksekusi SK PKB diselaraskan dengan standar HQ (PKB - TPE)." },
      { label: "Corporate Audit", details: "Menangani AUDIT KENU 2024, Audit Stamp - MASTER / Chop Audit, dan SOP HRS." },
      { label: "Risk Management", details: "Mitigasi Human Rights Risk dan pembentukan SATGAS PPKS." },
      { label: "Policy Enforcement", details: "Circular (Surat Edaran), regulasi Dress Code, pengelolaan legalitas BDO Land." }
    ]
  },
  {
    category: "Organizational Development",
    icon: PsychologyIcon,
    title: "Organizational Development",
    description: "Driving organizational growth through optimized employee lifecycle management, from talent onboarding to strategic offboarding transitions.",
    highlights: [
      { label: "Performance & Succession", details: "Performance Evaluation, Evaluation Seniority, Cultivate Plan, dan Retiring & Succession Plan." },
      { label: "Training & Certification", details: "Training Karyawan, Sertifikasi, Training Report Probation, Kursus Bahasa." },
      { label: "Mobility & Compensation", details: "MN TRANSFER, Rekom Internal, penentuan Salary Newcomer." },
      { label: "Strategic Offboarding", details: "Pengumuman Pensiun dan eksekusi terminasi yang smooth." }
    ]
  },
  {
    category: "Employee Well-being",
    icon: FavoriteIcon,
    title: "Employee Well-being",
    description: "Fostering a physically and psychologically safe work environment through well-being initiatives to sustain productivity and employee retention.",
    highlights: [
      { label: "Health & Safety", details: "MCU Health Checking dan Mental Health Checking." },
      { label: "Corporate Culture", details: "Annual/Year End Party, Acara 17 Agustus, Social Club, CSR." },
      { label: "Internal Comm", details: "Pengelolaan SUP Meeting dan SOL Author." }
    ]
  },
  {
    category: "Expatriate Management",
    icon: FlightTakeoffIcon,
    title: "Expatriate Management (Cross-Cultural HR Admin)",
    description: "Facilitating seamless global mobility through integrated immigration compliance and cross-cultural adaptation support.",
    highlights: [
      { label: "Expat Onboarding", details: "Penanganan New Expat Arrival." },
      { label: "Expat Administration", details: "Pengelolaan dokumen dan kebutuhan terkait (PPT Expat)." }
    ]
  }
];

const CaseStudyGrid = () => {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" sx={{ letterSpacing: 6, fontWeight: 900, color: 'text.secondary', display: 'block', mb: 1 }}>
          CORE EXPERTISE
        </Typography>
        <Typography variant="h2" align="center" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: { xs: 8, md: 15 }, fontWeight: 900, letterSpacing: -1.5 }}>
          HR Strategic Portfolio
        </Typography>

        <Grid container spacing={8}>
          {hrExpertiseData.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <Grid item xs={12} key={index}>
                <Card 
                  elevation={2}
                  sx={{ 
                    borderRadius: '16px', 
                    transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 8,
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      justifyContent: 'space-between', 
                      gap: 2,
                      mb: 4 
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconComponent color="primary" sx={{ fontSize: 32 }} />
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                          {study.title}
                        </Typography>
                      </Box>
                      <Chip 
                        label={study.category} 
                        size="small" 
                        variant="outlined" 
                        color="primary" 
                        sx={{ fontWeight: 800, fontSize: '0.75rem' }} 
                      />
                    </Box>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: '900px' }}>
                      {study.description}
                    </Typography>

                    <Divider sx={{ mb: 4 }} />

                    <Paper 
                      variant="outlined" 
                      sx={{ 
                        bgcolor: '#f8fafc', 
                        p: 4, 
                        borderRadius: 3, 
                        mb: 4,
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      <Grid container spacing={3}>
                        {study.highlights.map((item, idx) => (
                          <Grid item xs={12} md={6} key={idx}>
                            <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                              <strong>{item.label}:</strong> {item.details}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Paper>

                    <Button 
                      variant="text" 
                      endIcon={<ArrowForwardIcon />} 
                      sx={{ 
                        fontWeight: 900, 
                        p: 0, 
                        '&:hover': { bgcolor: 'transparent', color: 'primary.dark' }
                      }}
                    >
                      View Detailed Case Analysis
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudyGrid;
