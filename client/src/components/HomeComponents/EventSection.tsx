import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { useState, useEffect } from "react";

const EventsSection = () => {
    const [countdown, setCountdown] = useState(10);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 10));
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <Box id="events" sx={{ py: 10 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Live & Upcoming Events
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((_, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <Box
                    component="img"
                    src={`/placeholder.svg?height=200&width=400&text=Event ${index + 1}`}
                    alt={`Event ${index + 1}`}
                    sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Exciting Event {index + 1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Join us for an amazing livestream experience!
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="caption" color="text.secondary">
                        {index === 0 ? `Starts in ${countdown} seconds` : "Starts in 2 hours"}
                      </Typography>
                      <Button variant="contained" color="primary" size="small">
                        Join Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  };
  
export default EventsSection;  