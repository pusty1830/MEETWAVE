import { Box, Container, Typography, Grid } from "@mui/material";

const HowItWorksSection = () => {
    const howItWorks = [
      { title: "Sign Up", description: "Create your account in seconds" },
      { title: "Create Event", description: "Set up your livestream, meeting, or podcast" },
      { title: "Invite Participants", description: "Share your event link with attendees" },
      { title: "Engage & Share", description: "Interact with your audience in real-time" },
    ];
  
    return (
      <Box id="how-it-works" sx={{ py: 10, bgcolor: 'grey.100' }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {howItWorks.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      fontWeight: 'bold',
                      mb: 2,
                      mx: 'auto',
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Don't just take our word for it
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
              "MeetWave has revolutionized how we conduct our virtual events. It's intuitive and powerful!"
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              - Jane Doe, CEO of TechCorp
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  };

  export default HowItWorksSection;