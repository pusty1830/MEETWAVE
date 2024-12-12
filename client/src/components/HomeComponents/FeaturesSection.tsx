import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import { useState } from "react";

const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const features = [
      { title: "Livestreaming", description: "Broadcast to thousands with ease" },
      { title: "Meetings", description: "Collaborate in real-time with your team" },
      { title: "Podcasts", description: "Create and share audio content effortlessly" },
    ];
  
    return (
      <Box id="features" sx={{ py: 10 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Core Features
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => setActiveFeature(index)}>
                      Explore
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 6, p: 4, bgcolor: 'grey.100', borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom>
              {features[activeFeature].title} Preview
            </Typography>
            <Typography paragraph>
              Interactive preview for {features[activeFeature].title} would go here.
            </Typography>
            <Button variant="contained" color="primary">
              Try Now
            </Button>
          </Box>
        </Container>
      </Box>
    );
  };

  export default FeaturesSection;