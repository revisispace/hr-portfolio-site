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
    title: "Strategic Analytics & HQ Alignment",
    description: "Kategori ini adalah nilai jual utama untuk perusahaan multinasional yang membutuhkan kemampuan analisis data tingkat tinggi.",
    highlights: [
      { label: "Global Reporting & Alignment", details: "Personnel Monthly Report, Annual Report, dan Variation Report (Koordinasi langsung dengan HQ - TPE)." },
      { label: "Manpower & Budget Planning", details: "Manpower Budget, Cost & Wages Increase Analysis." },
      { label: "HR Metrics & Analytics", details: "Turnover Rate Analysis." },
      { label: "Organizational Design", details: "Pemetaan dan penyesuaian Struktur Organisasi MBPT." }
    ]
  },
  {
    category: "Industrial Relations & Compliance",
    icon: GavelIcon,
    title: "Audit, Legal & Risk Mitigation",
    description: "Menunjukkan ketegasan dalam menjaga perusahaan agar mematuhi hukum ketenagakerjaan dan memitigasi risiko hukum.",
    highlights: [
      { label: "Regulatory Compliance", details: "Pembuatan dan eksekusi SK PKB diselaraskan dengan standar HQ (PKB - TPE)." },
      { label: "Corporate Audit", details: "Menangani AUDIT KENU 2024, Audit Stamp - MASTER / Chop Audit, dan SOP HRS." },
      { label: "Risk Management", details: "Mitigasi Human Rights Risk dan pembentukan SATGAS PPKS." },
      { label: "Policy Enforcement", details: "Circular (Surat Edaran), regulasi Dress Code, pengelolaan legalitas BDO Land." }
    ]
  },
  {
    category: "Talent Management",
    icon: PsychologyIcon,
    title: "Organizational Development",
    description: "Mengelola siklus hidup karyawan secara komprehensif, dari awal masuk hingga pengembangan karier dan terminasi.",
    highlights: [
      { label: "Performance & Succession", details: "Performance Evaluation, Evaluation Seniority, Cultivate Plan, dan Retiring & Succession Plan." },
      { label: "Training & Certification", details: "Training Karyawan, Sertifikasi, Training Report Probation, Kursus Bahasa (Eng & Mandarin)." },
      { label: "Mobility & Compensation", details: "MN TRANSFER, Rekom Internal, penentuan Salary Newcomer." },
      { label: "Strategic Offboarding", details: "Pengumuman Pensiun dan eksekusi terminasi yang smooth." }
    ]
  },
  {
    category: "Employee Well-being",
    icon: FavoriteIcon,
    title: "Safety & Engagement",
    description: "Membuktikan empati dan kemampuan membangun budaya kerja positif, esensial bagi HR modern.",
    highlights: [
      { label: "Health & Safety", details: "MCU Health Checking dan Mental Health Checking." },
      { label: "Corporate Culture", details: "Annual/Year End Party, Acara 17 Agustus, Social Club, CSR." },
      { label: "Internal Comm", details: "Pengelolaan SUP Meeting dan SOL Author." }
    ]
  },
  {
    category: "Expatriate Management",
    icon: FlightTakeoffIcon,
    title: "Cross-Cultural HR Admin",
    description: "Niche skill yang dihargai tinggi, melibatkan regulasi imigrasi dan adaptasi lintas budaya.",
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
        <Typography variant="h2" align="center" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: { xs: 8, md: 12 }, fontWeight: 900, letterSpacing: -1.5 }}>
          HR Strategic Portfolio
        </Typography>

        <Grid container spacing={4}>
          {hrExpertiseData.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  elevation={2}
                  sx={{ 
                    height: '100%', 
                    borderRadius: '16px', 
                    transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6,
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                      <IconComponent color="primary" sx={{ fontSize: 24 }} />
                      <Chip 
                        label={study.category} 
                        size="small" 
                        variant="outlined" 
                        color="primary" 
                        sx={{ fontWeight: 800, fontSize: '0.65rem' }} 
                      />
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: 'text.primary', flexGrow: 0, lineHeight: 1.2 }}>
                      {study.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2, lineHeight: 1.6, flexGrow: 0 }}>
                      {study.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Paper 
                      variant="outlined" 
                      sx={{ 
                        bgcolor: '#f8fafc', 
                        p: 2, 
                        borderRadius: 2, 
                        mb: 3,
                        border: '1px solid #E2E8F0',
                        flexGrow: 1
                      }}
                    >
                      {study.highlights.map((item, idx) => (
                        <Box key={idx} sx={{ mb: 1.5, '&:last-child': { mb: 0 } }}>
                          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                            <strong>{item.label}:</strong> {item.details}
                          </Typography>
                        </Box>
                      ))}
                    </Paper>

                    <Button 
                      variant="text" 
                      endIcon={<ArrowForwardIcon />} 
                      sx={{ 
                        justifyContent: 'flex-start', 
                        fontWeight: 900, 
                        p: 0, 
                        minWidth: 0,
                        '&:hover': { bgcolor: 'transparent', color: 'primary.dark' }
                      }}
                    >
                      View Full Details
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
