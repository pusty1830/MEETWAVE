import { Box, Container, Typography, Grid, Card, CardContent, IconButton } from "@mui/material";

const TestimonialsSection = () => (
    <Box id="testimonials" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      component="img"
                      src={`/placeholder.svg?height=50&width=50&text=User ${index + 1}`}
                      alt={`User ${index + 1}`}
                      sx={{ width:  50, height: 50, borderRadius: '50%', mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1">John Doe</Typography>
                      <Typography variant="body2" color="text.secondary">CEO, Tech Company</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" paragraph>
                    "MeetWave has transformed how we conduct our virtual meetings and webinars. It's user-friendly and packed with features!"
                  </Typography>
                  <Box sx={{ color: 'warning.main' }}>
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <IconButton key={i} size="small" sx={{ p: 0 }}>
                        <Box component="svg" sx={{ width: 20, height: 20 }} viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </Box>
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  export default TestimonialsSection;