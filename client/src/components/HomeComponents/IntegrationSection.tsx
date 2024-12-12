import { Check } from "@mui/icons-material";
import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Card, CardContent } from "@mui/material";

const IntegrationSection = () => (
    <Box sx={{ py: 10, bgcolor: 'grey.100' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Seamless Integration
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Works With Your Favorite Tools
            </Typography>
            <List>
              {['Social Media Platforms', 'Calendar Apps', 'File Sharing Services', 'Project Management Tools'].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Check color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Grid item xs={4} key={index}>
                  <Card>
                    <CardContent>
                      <Box
                        component="img"
                        src={`/placeholder.svg?height=80&width=80&text=Logo ${index + 1}`}
                        alt={`Integration ${index + 1}`}
                        sx={{ width: '100%' }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  export default IntegrationSection