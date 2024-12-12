
import {
 
  Box
} from '@mui/material';
import HeroSection from '../components/HomeComponents/HeroSection';
import FeaturesSection from '../components/HomeComponents/FeaturesSection';
import HowItWorksSection from '../components/HomeComponents/HowItWorkSection';
import EventsSection from '../components/HomeComponents/EventSection';
import CommunitySection from '../components/HomeComponents/CommunitySection';
import AccessibilitySection from '../components/HomeComponents/AccessibilitySection';
import IntegrationSection from '../components/HomeComponents/IntegrationSection';
import TestimonialsSection from '../components/HomeComponents/TestimonialSection';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#3cacae',
    },
    secondary: {
      main: '#2b9698',
    },
  },
});

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <EventsSection />
        <CommunitySection />
        <AccessibilitySection />
        <IntegrationSection />
        <TestimonialsSection />
      
      </Box>
    </ThemeProvider>
  );
}