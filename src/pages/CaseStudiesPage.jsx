import CaseStudies from '../components/CaseStudies';
import CaseStudyGrid from '../components/CaseStudyGrid';
import { Box } from '@mui/material';

const CaseStudiesPage = () => {
  return (
    <Box>
      <CaseStudyGrid />
      {/* Keeping the existing CaseStudies (Deep Dives) below the grid for a complete experience */}
      <CaseStudies />
    </Box>
  );
};

export default CaseStudiesPage;
