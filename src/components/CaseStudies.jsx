import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Close as CloseIcon, FiberManualRecord as BulletIcon } from '@mui/icons-material';
import impactImage from '../assets/impact-case.jpg';
import disputeImage from '../assets/dispute-resolution.png';

const caseStudiesData = [
  {
    "id": 1,
    "tag": "INDUSTRIAL RELATIONS",
    "title": "End-to-End Dispute Resolution: From Bipartite to PHI",
    "image": disputeImage,
    "summary": "Led complex labor dispute resolutions, successfully securing an interlocutory ruling that protected the company from significant legal and financial liabilities.",
    "modalContent": {
      "situation": "The company was involved in an industrial relations dispute that escalated beyond internal resolution, requiring formal legal proceedings under Indonesian labor law.",
      "action": [
        "Led the dispute resolution process from bipartite negotiations through to the Industrial Relations Court (PHI).",
        "Prepared comprehensive documentation, legal chronologies, and supporting evidence.",
        "Coordinated closely with legal counsel and internal stakeholders to ensure alignment.",
        "Represented HR in ensuring full compliance with Indonesian employment regulations throughout the litigation process."
      ],
      "result": [
        "Successfully secured an interlocutory ruling (putusan sela) declaring the case outside the jurisdiction of PHI, resulting in dismissal.",
        "Protected the company from legal liability and potential financial loss.",
        "Strengthened internal capability in handling complex industrial relations disputes."
      ]
    }
  },
  {
    "id": 2,
    "tag": "GLOBAL OPERATIONS",
    "title": "Cross-Border HR Reporting & HQ Alignment",
    "summary": "Standardized regional data formats and managed end-to-end HR reporting to ensure seamless alignment with the multinational headquarters in Singapore.",
    "modalContent": {
      "situation": "Operating under a multinational structure, the HR function needed to ensure accurate and consistent reporting to regional headquarters in Singapore.",
      "action": [
        "Managed end-to-end HR reporting, including headcount, recruitment tracking, and workforce updates.",
        "Standardized data formats to align with HQ requirements.",
        "Acted as liaison between Indonesia operations and regional HQ for HR-related matters.",
        "Ensured timely and accurate responses to cross-border HR inquiries."
      ],
      "result": [
        "Improved data accuracy and reporting consistency across entities.",
        "Strengthened communication and trust with regional headquarters.",
        "Supported more effective regional workforce planning and decision-making."
      ]
    }
  },
  {
    "id": 3,
    "tag": "COMPLIANCE & ETHICS",
    "title": "Establishing a Safe Workspace: Sexual Harassment Task Force",
    "summary": "Initiated and formulated the official Sexual Harassment Task Force (SATGAS) from the ground up to ensure a compliant, safe, and respectful workplace.",
    "modalContent": {
      "situation": "The organization required a structured and compliant approach to prevent and address workplace sexual harassment.",
      "action": [
        "Initiated and established the Sexual Harassment Task Force (SATGAS) from the ground up.",
        "Developed a comprehensive manual book covering definitions, reporting mechanisms, and case handling procedures.",
        "Led the proposal process for internal approval (TPE).",
        "Appointed as Secretary of the Task Force, supporting coordination and case administration.",
        "Promoted awareness of workplace conduct and reporting channels."
      ],
      "result": [
        "Successfully implemented a formal and compliant framework aligned with regulations.",
        "Increased employee awareness and trust in reporting mechanisms.",
        "Strengthened the company’s commitment to a safe and respectful workplace."
      ]
    }
  },
  {
    "id": 4,
    "tag": "TALENT ACQUISITION",
    "title": "End-to-End Recruitment & Onboarding Execution",
    "summary": "Managed the full-cycle recruitment of 40+ diverse positions across corporate and field operations to support sustained operational growth.",
    "modalContent": {
      "situation": "The company required consistent hiring across both office and field roles to support operational growth.",
      "action": [
        "Managed full-cycle recruitment: job posting, sourcing, screening, interviewing, and offering.",
        "Recruited across diverse roles, including office positions (HR, Accounting, Marketing) and field roles (Technicians, Mechanics, Forklift Operators).",
        "Designed and executed onboarding programs to integrate new hires into company culture and policies."
      ],
      "result": [
        "Successfully filled approximately 30–40 positions over the past few years.",
        "Ensured timely fulfillment of hiring needs across multiple departments.",
        "Improved onboarding experience, employee readiness, and workforce stability."
      ]
    }
  },
  {
    "id": 5,
    "tag": "ORGANIZATIONAL DEVELOPMENT",
    "title": "Training Program Design & Vendor Coordination",
    "image": impactImage,
    "summary": "Designed and delivered structured, cross-departmental training programs (soft skills to K3 safety) by optimizing internal resources and vendor partnerships.",
    "modalContent": {
      "situation": "The company aimed to enhance employee capability through structured training programs across multiple competency areas.",
      "action": [
        "Designed and coordinated training programs covering soft skills, technical skills, managerial development, and safety (K3, First Aid, Fire Training).",
        "Managed both internal (in-house) and external/vendor-led training programs.",
        "Liaised with vendors to ensure training quality and relevance.",
        "Coordinated logistics, participant management, and training execution."
      ],
      "result": [
        "Delivered diverse and impactful training programs across departments.",
        "Improved employee competency and workplace safety awareness.",
        "Strengthened relationships with external training providers."
      ]
    }
  }
];

const CaseStudies = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const handleOpen = (caseStudy) => {
    setSelectedCase(caseStudy);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="overline" 
            sx={{ 
              letterSpacing: 4, 
              fontWeight: 700, 
              color: 'primary.main',
              display: 'block',
              mb: 2 
            }}
          >
            IMPACT & RESULTS
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' }, 
              fontWeight: 900,
              mb: 3
            }}
          >
            Proven Case Studies
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary', 
              maxWidth: 700, 
              mx: 'auto',
              fontSize: '1.125rem'
            }}
          >
            Strategic HR interventions and legal resolutions that drive organizational stability and growth.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {caseStudiesData.map((study) => (
            <Grid item xs={12} sm={6} md={4} key={study.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.1)'
                }
              }}>
                {study.image && (
                  <Box
                    component="img"
                    src={study.image}
                    alt={study.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderBottom: '1px solid #E2E8F0'
                    }}
                  />
                )}
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Chip 
                    label={study.tag} 
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(217, 176, 97, 0.1)', 
                      color: 'primary.main', 
                      fontWeight: 800, 
                      fontSize: '0.65rem',
                      borderRadius: 1,
                      mb: 2.5,
                      letterSpacing: 1
                    }} 
                  />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontFamily: '"Merriweather", serif', 
                      fontWeight: 800, 
                      mb: 2,
                      lineHeight: 1.3,
                      color: 'text.primary'
                    }}
                  >
                    {study.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary', 
                      lineHeight: 1.7,
                      mb: 4
                    }}
                  >
                    {study.summary}
                  </Typography>
                </CardContent>
                <Box sx={{ px: 4, pb: 4 }}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    onClick={() => handleOpen(study)}
                    sx={{ 
                      fontWeight: 700,
                      borderRadius: 1.5,
                      py: 1.5
                    }}
                  >
                    View Case Study
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Detail Modal */}
        <Dialog 
          open={openModal} 
          onClose={handleClose}
          fullWidth
          maxWidth="md"
          PaperProps={{
            sx: { borderRadius: 3, p: { xs: 1, md: 2 } }
          }}
        >
          {selectedCase && (
            <>
              <DialogTitle sx={{ pr: 6 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontFamily: '"Merriweather", serif', 
                    fontWeight: 900,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    lineHeight: 1.2
                  }}
                >
                  {selectedCase.title}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: 16,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Box sx={{ mb: 5 }}>
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      fontWeight: 800, 
                      color: 'primary.main', 
                      display: 'block', 
                      mb: 1.5,
                      fontSize: '0.75rem',
                      letterSpacing: 2
                    }}
                  >
                    SITUATION
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {selectedCase.modalContent.situation}
                  </Typography>
                </Box>

                <Box sx={{ mb: 5 }}>
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      fontWeight: 800, 
                      color: 'primary.main', 
                      display: 'block', 
                      mb: 1.5,
                      fontSize: '0.75rem',
                      letterSpacing: 2
                    }}
                  >
                    ACTION
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {selectedCase.modalContent.action.map((item, index) => (
                      <ListItem key={index} alignItems="flex-start" sx={{ px: 0, py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                          <BulletIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item} 
                          primaryTypographyProps={{ 
                            variant: 'body1', 
                            sx: { color: 'text.secondary', lineHeight: 1.7 } 
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box>
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      fontWeight: 800, 
                      color: 'primary.main', 
                      display: 'block', 
                      mb: 1.5,
                      fontSize: '0.75rem',
                      letterSpacing: 2
                    }}
                  >
                    RESULT
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {selectedCase.modalContent.result.map((item, index) => (
                      <ListItem key={index} alignItems="flex-start" sx={{ px: 0, py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 28, mt: 1 }}>
                          <BulletIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item} 
                          primaryTypographyProps={{ 
                            variant: 'body1', 
                            sx: { color: 'text.secondary', lineHeight: 1.7 } 
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 3, pt: 0 }}>
                <Button 
                  onClick={handleClose} 
                  variant="outlined"
                  sx={{ borderRadius: 1.5, fontWeight: 700 }}
                >
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default CaseStudies;
