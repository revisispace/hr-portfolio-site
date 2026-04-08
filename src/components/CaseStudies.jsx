import { Box, Typography, Container, Grid, Card, CardContent, Divider, Chip } from '@mui/material';
import { Timeline as TimelineIcon, TableChart, Policy } from '@mui/icons-material';
import impactImage from '../assets/impact-case.jpg';

const CaseStudyDeepDive = ({ category, title, situation, action, result, snippet, headerImage }) => (
  <Card sx={{ mb: 12, overflow: 'hidden', bgcolor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
    {headerImage && (
      <Box 
        component="img" 
        src={headerImage} 
        sx={{ 
          width: '100%', 
          height: { xs: 200, md: 400 }, 
          objectFit: 'cover',
          borderBottom: '1px solid #E2E8F0'
        }} 
      />
    )}
    <CardContent sx={{ p: { xs: 4, md: 8 } }}>
      <Box sx={{ mb: 4 }}>
        <Chip 
          label={category} 
          sx={{ 
            bgcolor: '#ECFDF5', 
            color: '#065F46', 
            fontWeight: 700, 
            fontSize: '0.75rem', 
            borderRadius: 1,
            mb: 2 
          }} 
        />
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, color: 'text.primary', mb: 4, lineHeight: 1.2 }}>
          {title}
        </Typography>
      </Box>

    <Grid container spacing={6} sx={{ mb: 6 }}>
      <Grid item xs={12} md={4}>
        <Typography variant="overline" display="block" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
          SITUATION
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.7 }}>
          {situation}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="overline" display="block" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
          ACTION
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.7 }}>
          {action}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="overline" display="block" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
          RESULT
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.7 }}>
          {result}
        </Typography>
      </Grid>
    </Grid>

      </CardContent>
  </Card>
);

const CaseStudies = () => {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" sx={{ fontSize: '3.5rem', fontWeight: 900, mb: 1, letterSpacing: -1 }}>
          Featured Case Studies
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'text.secondary', mb: 10, maxWidth: 640, mx: 'auto', fontSize: '1.125rem' }}>
          Deep dives into complex HR challenges, legal compliance, and strategic resolutions.
        </Typography>

        <CaseStudyDeepDive
          headerImage={impactImage}
          category="INDUSTRIAL RELATIONS"
          title="End-to-End Industrial Relations Dispute Resolution: From Bipartite to PHI"
          situation="Complex dispute arising from restructuring, requiring strict adherence to the nuances of Navigating UU Cipta Kerja amidst heightened union sensitivity."
          action="Led multiple rounds of Bipartite negotiations, managed evidence preparation for mediation, and represented organizational interests through the PHI process."
          result="Successfully achieved Zero legal liability. Settlement reached with 100% compliance with local labor regulations and company SOPs."
          snippet={
            <Box>
              <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <TimelineIcon fontSize="small" /> DISPUTE LIFECYCLE TIMELINE
              </Typography>
              <Grid container spacing={2} justifyContent="space-around">
                {[
                  { step: '1', name: 'Bipartite', label: 'Internal Negotiation' },
                  { step: '2', name: 'Mediation', label: 'Manpower Office' },
                  { step: '3', name: 'PHI', label: 'Court Resolution' },
                ].map((item) => (
                  <Grid item key={item.step} sx={{ textAlign: 'center' }}>
                    <Box sx={{ width: 32, height: 32, bgcolor: 'black', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1, fontWeight: 700 }}>
                      {item.step}
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{item.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{item.label}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
        />

        <CaseStudyDeepDive
          category="GLOBAL OPERATIONS"
          title="Cross-Border HR Reporting & HQ Alignment"
          situation="Direct Reporting to Evergreen HQ in Taipei, managing data silos across regional offices with disparate tracking mechanisms."
          action="Developed Headcount budget analytics dashboards and unified local procedures with global SOP alignment directives."
          result="Reduced reporting latency by 40% and improved budget forecast accuracy within a 2% variance for consecutive quarters."
          snippet={
            <Box>
              <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <TableChart fontSize="small" /> HQ ALIGNMENT DASHBOARD SNIPPET
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, border: '1px solid #E2E8F0', p: 2, borderRadius: 1, bgcolor: 'white' }}>
                <Typography variant="caption" sx={{ fontWeight: 800 }}>Metric Category</Typography>
                <Typography variant="caption" sx={{ fontWeight: 800 }}>Local Status</Typography>
                <Typography variant="caption" sx={{ fontWeight: 800 }}>HQ Target</Typography>
                <Typography variant="caption" sx={{ fontWeight: 800 }}>Alignment Score</Typography>
                <Divider sx={{ gridColumn: 'span 4' }} />
                <Typography variant="caption">Headcount Accuracy</Typography>
                <Typography variant="caption" color="success.main" sx={{ fontWeight: 700 }}>98.5%</Typography>
                <Typography variant="caption">98.0%</Typography>
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700 }}>Optimal</Typography>
              </Box>
            </Box>
          }
        />

        <CaseStudyDeepDive
          category="RISK MITIGATION"
          title="Establishing a Safe Workspace: Sexual Harassment Task Force"
          situation="Identifying the need for proactive cultural safeguards and compliance with emerging preventive regulation frameworks (PPKS)."
          action="Architected a robust Whistleblowing SOP and chaired the multi-departmental Task Force to ensure unbiased reporting channels."
          result="Cultivated measurable psychological safety via annual sentiment audits, with 100% of staff trained in preventive measures."
          snippet={
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Policy color="action" />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Policy Implementation Framework</Typography>
                  <Typography variant="caption" color="text.secondary">Task Force Charter & Confidential Reporting Protocol (v2.0) - Successfully Adopted Q3 2023</Typography>
                </Box>
              </Box>
              <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', cursor: 'pointer' }}>VIEW PROTOCOL →</Typography>
            </Box>
          }
        />
      </Container>
    </Box>
  );
};

export default CaseStudies;
