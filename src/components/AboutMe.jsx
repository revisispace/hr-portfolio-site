import { Box, Typography, Container, Divider } from '@mui/material';
import aboutPortrait from '../assets/about-portrait.jpg';

const experienceData = [
  {
    company: "PT. Multi Bina Pura International (Evergreen Group)",
    title: "Senior Human Resource Generalist",
    location: "Jakarta",
    duration: "Feb 2023 — Present",
    responsibilities: [
      "Lead and supervise end-to-end HR operations, including recruitment, attendance management, and employee lifecycle administration.",
      "Oversee and conducting HR reporting and ensure accuracy, compliance, and timely submission from internal management to Taipei Expatriates (Evergreen).",
      "Supervise performance management, training, and employee development initiatives in alignment with organizational objectives.",
      "Act as a key point of oversight for industrial relations, including employee grievances, disciplinary actions, and labor compliance.",
      "Manage relationships with external stakeholders, including government bodies, BPJS, insurance providers, and labor unions.",
      "Ensure effective implementation, monitoring, and communication of company policies and HR regulations.",
      "Provide strategic oversight of onboarding and offboarding processes to ensure governance, consistency, and compliance."
    ]
  },
  {
    company: "PT. Beringin Pratama Sentosa",
    title: "Legal Officer (Freelance)",
    location: "Jakarta (remote)",
    duration: "Aug 2024 — Jan 2025",
    responsibilities: [
      "Drafted and reviewed loan, debt, and capital agreements ensuring legal compliance and risk mitigation.",
      "Developed a document control system to streamline contract approval workflows.",
      "Provided legal opinions to guide management in decision-making and dispute prevention.",
      "Researched regulatory updates and industry trends to maintain compliance.",
      "Collaborated with executive, finance, and marketing teams to facilitate seamless deal execution."
    ]
  },
  {
    company: "Jurist Wanna Be",
    title: "Content Specialist Intern",
    location: "Jakarta (remote)",
    duration: "Aug 2022 — Nov 2022",
    responsibilities: [
      "Managed content strategy and publishing for LinkedIn and Instagram channels.",
      "Researched and curated labor market data from multiple platforms.",
      "Produced SEO-optimized copywriting for targeted audiences.",
      "Screened and approved content to ensure brand consistency and quality.",
      "Coordinated with internal teams to optimize content workflow."
    ]
  },
  {
    company: "Career Network",
    title: "Vice President Partnerships",
    location: "Semarang (remote)",
    duration: "Sept 2022 — Oct 2022",
    responsibilities: [
      "Drafted MoUs and proposals to establish clear collaboration terms.",
      "Presented and negotiated partnership agreements with potential stakeholders.",
      "Delivered progress reports to the CEO and board members.",
      "Researched and identified prospective partner organizations.",
      "Coordinated partnership execution and performance tracking."
    ]
  },
  {
    company: "PT Bank Syariah Indonesia Tbk.",
    title: "Human Capital Intern Staff (HCBP Division)",
    location: "Jakarta",
    duration: "Aug 2021 — Jan 2022",
    responsibilities: [
      "Assisted in HR issue analysis and root cause identification using structured problem-solving tools.",
      "Supported manpower planning through employee data collection and reporting.",
      "Conducted employee performance research via surveys and interviews.",
      "Prepared internal memos and meeting documentation.",
      "Liaised with management to recommend HR solutions and process improvements."
    ]
  }
];

const AboutMe = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        {/* Top Section: Photo & Bio */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: { xs: 6, md: 10 },
            mb: 15
          }}
        >
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '400px' }, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={aboutPortrait}
              alt="Anisah Balqis - Strategic HR Executive"
              sx={{
                width: '100%',
                height: 'auto',
                aspectRatio: '4/5',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 20px 48px -10px rgba(15, 23, 42, 0.1)',
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, mb: 4, fontWeight: 900, color: 'text.primary', letterSpacing: -2 }}>
              About Me
            </Typography>
            <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 4, color: 'text.primary', fontStyle: 'italic', lineHeight: 1.4 }}>
              "Balancing business objectives with genuine human empathy."
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', mb: 3, fontSize: '1.125rem', lineHeight: 1.8 }}>
              I believe that a strong company is built on clear legal compliance, transparent communication, and a genuinely safe environment for its people. As a Senior HR Generalist, I bridge the gap between organizational strategy and individual growth.
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.125rem', lineHeight: 1.8 }}>
              With over a decade of experience across diverse industries, I specialize in industrial relations, risk mitigation, and operational excellence for global teams.
            </Typography>
          </Box>
        </Box>

        {/* Detailed Experience Section */}
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, fontWeight: 800, color: '#D9B061', mb: 2, display: 'block' }}>
            CAREER JOURNEY
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 900, mb: 8, letterSpacing: -1.5 }}>
            Professional Experience
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {experienceData.map((job, index) => (
              <Box key={index}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'baseline', mb: 3 }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {job.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#D9B061', fontSize: '1.1rem' }}>
                      {job.company}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: 'left', md: 'right' }, mt: { xs: 1, md: 0 } }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>
                      {job.duration}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      {job.location}
                    </Typography>
                  </Box>
                </Box>
                
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {job.responsibilities.map((resp, i) => (
                    <Box component="li" key={i} sx={{ color: '#475569', mb: 1.5, lineHeight: 1.7, fontSize: '1.05rem' }}>
                      {resp}
                    </Box>
                  ))}
                </Box>
                {index < experienceData.length - 1 && <Divider sx={{ mt: 10, borderColor: 'rgba(0,0,0,0.06)' }} />}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
