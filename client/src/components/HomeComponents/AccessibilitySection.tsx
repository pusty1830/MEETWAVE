import { Laptop, Smartphone, Tablet } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";

const AccessibilitySection = () => (
    <Box sx={{ py: 10 }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Access Anywhere, Anytime
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4 }}>
          <Laptop sx={{ fontSize: 64, color: 'primary.main' }} />
          <Smartphone sx={{ fontSize: 64, color: 'primary.main' }} />
          <Tablet sx={{ fontSize: 64, color: 'primary.main' }} />
        </Box>
        <Typography variant="h5" align="center" paragraph>
          Join from your desktop, mobile, or tablet. Enjoy seamless cross-device syncing and high-definition streaming.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large">
            Download Our App
          </Button>
        </Box>
      </Container>
    </Box>
  );

  export default AccessibilitySection;
  