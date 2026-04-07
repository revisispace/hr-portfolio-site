import Hero from '../components/Hero';
import CoreExpertise from '../components/CoreExpertise';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import Timeline from '../components/Timeline';
import InquirySection from '../components/InquirySection';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <CoreExpertise />
      <CaseStudiesPreview />
      <Timeline />
      <InquirySection />
    </Box>
  );
};

export default HomePage;
