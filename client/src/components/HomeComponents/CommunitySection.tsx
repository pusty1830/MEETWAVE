import { Box, Container, Typography, Grid, Button } from "@mui/material";

const CommunitySection = () => (
    <Box sx={{ py: 10, bgcolor: 'grey.100' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Join Our Thriving Community
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[
            { number: '10,000+', text: 'Live Streams Hosted' },
            { number: '5M+', text: 'Minutes of Meetings' },
            { number: '1M+', text: 'Active Users' },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" gutterBottom>
                  {item.number}
                </Typography>
                <Typography variant="h6">
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large">
            Join Our Community
          </Button>
        </Box>
      </Container>
    </Box>
  );

  export default CommunitySection;