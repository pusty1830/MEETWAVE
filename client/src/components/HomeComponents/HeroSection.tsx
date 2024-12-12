import { Box, Container, Fade, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroSlides = [
    { title: "Connect with MeetWave", description: "Seamless virtual events and meetings", image: "/images/meeting4.jpeg" },
    { title: "Share Your Ideas", description: "Reach a global audience with ease", image: "/images/podacast1.jpeg" },
    { title: "Stream Like a Pro", description: "High-quality, reliable streaming for all", image: "/images/livestreaming1.jpeg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ position: 'relative', height: 400, overflow: 'hidden' }}>
          {heroSlides.map((slide, index) => (
            <Fade key={index} in={index === activeSlide} timeout={1000}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: index === activeSlide ? 'block' : 'none',
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt={slide.title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute',borderRadius:'10px' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    py: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h2" component="h1" gutterBottom>
                    {slide.title}
                  </Typography>
                  <Typography variant="h5" paragraph>
                    {slide.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                      Get Started
                    </Button>
                    <Button variant="outlined" color="primary">
                      Explore Features
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Fade>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: index === activeSlide ? 'primary.main' : 'grey.300',
                mx: 0.5,
                cursor: 'pointer',
              }}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
