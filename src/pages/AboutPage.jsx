import AboutMe from '../components/AboutMe';
import Timeline from '../components/Timeline';
import CoreValues from '../components/CoreValues';
import Achievements from '../components/Achievements';
import Specializations from '../components/Specializations';
import { Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Box>
      <AboutMe />
      <Timeline />
      <CoreValues />
      <Achievements />
      <Specializations />
    </Box>
  );
};

export default AboutPage;
