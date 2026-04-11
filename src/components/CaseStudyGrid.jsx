import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Divider, Chip, Paper, Button } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Data Lengkap HR & Legal Core Expertise
export const hrExpertiseData = [
  {
    category: "Global HR Operations",
    icon: <PublicIcon />, 
    title: "Strategic Analytics & HQ Alignment",
    description: "Aligning local HR operations with global standards through precise data analytics, HRIS optimization, and comprehensive strategic reporting.",
    highlights: [
      { label: "Global & Internal Reporting", details: "Managed comprehensive HR metrics (turnover, headcount) for internal stakeholders and Evergreen HQ Taipei." },
      { label: "HRIS Optimization", details: "Streamlined HR data and payroll administration using Andal Paymaster (APM)." },
      { label: "Policy Development", details: "Drove continuous policy improvements and disseminated corporate regulations via official Circulars." },
      { label: "HR Administration", details: "Oversaw end-to-end personnel data management, employee transitions, and workforce planning." },
      { label: "Expatriate Management", details: "Expat Onboarding: Penanganan New Expat Arrival, Expat Administration: Pengelolaan dokumen dan kebutuhan terkait (PPT Expat)." }
    ]
  },
  {
    category: "Industrial Relations",
    icon: <GavelIcon />, 
    title: "Dispute Resolution & Labor Relations",
    description: "Safeguarding corporate stability by managing end-to-end labor disputes, from bipartite mediation to Industrial Relations Court (PHI).",
    highlights: [
      { label: "Dispute Resolution", details: "Managed complex labor disputes including Bipartite, Tripartite (Disnaker), and PHI litigation with external counsel." },
      { label: "Conflict Management", details: "Handled sensitive exit interviews, employee grievances, and negotiated resignation settlements." },
      { label: "External Relations", details: "Maintained strong regulatory compliance and relationships with Disnaker, APINDO, and labor auditors." },
      { label: "Disciplinary Actions", details: "Executed internal investigations and documented legal evidence for severe policy violations." }
    ]
  },
  {
    category: "Corporate Legal",
    icon: <PolicyIcon />, 
    title: "Legal Compliance & Contract Management",
    description: "Mitigating legal risks through rigorous contract drafting, policy enforcement, and proactive compliance with Indonesian labor laws.",
    highlights: [
      { label: "Legal Drafting", details: "Formulated NDAs, warning letters (SP), termination notices, probation, and driver partnership agreements." },
      { label: "Corporate Policies", details: "Drafted and enforced the Company Handbook (PKB), internal SOPs, and corporate code of conduct." },
      { label: "Contract Management", details: "Reviewed and coordinated legal drafting for vendor agreements and outsourcing contracts." },
      { label: "Counsel Coordination", details: "Managed MoU renewals and collaborated closely with external retainer lawyers." }
    ]
  },
  {
    category: "Talent Management",
    icon: <PsychologyIcon />, 
    title: "Acquisition & Organizational Development",
    description: "Driving organizational growth through optimized talent acquisition, performance management, and strategic employee development.",
    highlights: [
      { label: "End-to-End Recruitment", details: "Directed the full recruitment lifecycle from candidate sourcing and HR interviews to user coordination and offering." },
      { label: "Performance Management", details: "Administered KPI frameworks, monitored employee performance, and provided constructive coaching." },
      { label: "Training & Development", details: "Designed training programs, coordinated with vendors, and evaluated training effectiveness for career pathing." },
      { label: "Onboarding", details: "Facilitated seamless integration of new hires through comprehensive induction programs." }
    ]
  },
  {
    category: "Employee Engagement",
    icon: <FavoriteIcon />, 
    title: "Well-being & Corporate Culture",
    description: "Fostering a highly productive and collaborative work culture through targeted engagement initiatives and strong labor union relations.",
    highlights: [
      { label: "Corporate Events & CSR", details: "Spearheaded annual gatherings, cultural events, and Corporate Social Responsibility (CSR) initiatives." },
      { label: "Labor Union Relations", details: "Fostered a conducive and collaborative working environment with labor unions." },
      { label: "Employee Satisfaction", details: "Conducted internal surveys to measure, analyze, and improve overall employee morale." },
      { label: "Internal Communications", details: "Managed transparent communication channels to ensure organizational alignment and engagement." }
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
                        <Box sx={{ 
                          color: 'primary.main', 
                          '& .MuiSvgIcon-root': { fontSize: 32 } 
                        }}>
                          {study.icon}
                        </Box>
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
