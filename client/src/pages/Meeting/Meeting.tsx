import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Box,
  useMediaQuery,
  Snackbar,
  Menu,
  MenuItem,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  VideoCall as VideoIcon,
  ContentCopy as CopyIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3cacae',
    },
  },
});

interface CarouselItem {
  title: string;
  description: string;
}

const MeetingPage: React.FC = () => {
  const navigate=useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [meetingLink, setMeetingLink] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // console.log(location)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const carouselItems: CarouselItem[] = [
    { title: "Get a link that you can share", description: "Click New meeting to get a link that you can send to people that you want to meet with" },
    { title: "Plan ahead", description: "Click New meeting to schedule meetings in Google Calendar and send invites to participants" },
    { title: "Your meeting is safe", description: "No one can join a meeting unless invited or admitted by the host" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : carouselItems.length - 1));
  };

  const handleNextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const generateMeetingLink = () => {
    const link = `https://meetwave.com/${Math.random().toString(36).substr(2, 9)}`;
    setMeetingLink(link);
    setDialogOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(meetingLink);
    setSnackbarOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2" component="h1" sx={{ color: '#3cacae', mt: 9, mb: 1, fontWeight: 'bold' }}>
        Meetings
      </Typography>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom color="primary">
              Video calls and meetings for everyone
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Connect, collaborate and celebrate from anywhere with MEETWAVE
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<VideoIcon />}
                onClick={()=>navigate('/join-meeting')}
                fullWidth={isMobile}
              >
                Join Meeting
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<VideoIcon />}
                onClick={handleMenu}
                fullWidth={isMobile}
              >
                New Meeting
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={()=>navigate('/instant-meeting')}>
                    Start an Instant Meeting
                  </MenuItem>
                  <MenuItem onClick={()=>navigate('/meeting-later')}>
                    Create Meeting for Later
                  </MenuItem>

                {/* <MenuItem onClick={handleClose}>
                    Shedule a meeting 
                  </MenuItem> */}
              </Menu>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              <a href="#" style={{ color: 'inherit' }}>Learn more</a> about MEETWAVE
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  aspectRatio: '1',
                  width: '100%',
                  maxWidth: 400,
                  mx: 'auto',
                }}
              >
                <img
                  src="/images/meeting2.jpeg"
                  alt="MEETWAVE Illustration"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Card sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, mx: 2, transform: 'translateY(50%)' }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {carouselItems[carouselIndex].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {carouselItems[carouselIndex].description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton onClick={handlePrevSlide} size="small">
                      <ChevronLeftIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {carouselItems.map((_, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: index === carouselIndex ? 'primary.main' : 'grey.300',
                          }}
                        />
                      ))}
                    </Box>
                    <IconButton onClick={handleNextSlide} size="small">
                      <ChevronRightIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Your meeting is ready!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share this link with others to join the meeting:
          </DialogContentText>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <TextField
              value={meetingLink}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
            <IconButton onClick={copyToClipboard} size="small" sx={{ ml: 1 }}>
              <CopyIcon />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Copied to clipboard"
      />
    </ThemeProvider>
  );
};

export default MeetingPage;