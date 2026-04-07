import AboutMe from '../components/AboutMe';
import Timeline from '../components/Timeline';
import CoreValues from '../components/CoreValues';
import Specializations from '../components/Specializations';
import { Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Box>
      <AboutMe />
      <Timeline />
      <CoreValues />
      <Specializations />
    </Box>
  );
};

export default AboutPage;
