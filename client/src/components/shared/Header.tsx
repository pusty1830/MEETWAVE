import React from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, useTheme, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '@fontsource/poppins';
import { useLocation, useNavigate } from 'react-router-dom';
import color from '../utils/Colors';
import { isLoggedIn } from '../../services/axiosClient';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import GroupsIcon from '@mui/icons-material/Groups';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PodcastsIcon from '@mui/icons-material/Podcasts';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // console.log(location)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);

  // console.log(location)
  const handleMenu1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleAuth = () => {
    if (isLoggedIn()) {
      localStorage.clear();
      window.location.href = '/login';
    } else {
      navigate('/login');
    }
    handleClose();
  };

  return (
    <AppBar elevation={1} sx={{ background: color.headerBg, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
      <Toolbar sx={{ height: '55px', justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: 'Poppins, Arial, sans-serif',
            fontWeight: 'bold',
            color: '#3cacae',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
          }}
        >
          MEETWAVE
        </Typography>

        {isMobile ? (
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><VideoCallIcon /></MenuItem>
              {/* <MenuItem onClick={() => handleNavigation('/join-meeting')}>Join</MenuItem>
              <MenuItem onClick={() => handleNavigation('/host-meeting')}>Host</MenuItem> */}
              <MenuItem onClick={handleAuth}>{isLoggedIn() ? 'Logout' : 'Login'}</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {location.pathname === '/meeting' ? (
              <>
                <Button
                  onClick={() => navigate('/join-meeting')}
                  // variant={location.pathname === '/join-meeting' ? 'contained' : 'outlined'}
                  variant="contained"
                  sx={{
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: '20px',
                    px: 3,
                    backgroundColor: '#ffffff',
                    color: '#3cacae',
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      textDecoration: 'underline'
                    },
                  }}
                >
                  Join
                </Button>

                <Button
                  onClick={handleMenu1}
                  // variant={location.pathname === '/host-meeting' ? 'contained' : 'outlined'}
                  variant="contained"
                  sx={{
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: '20px',
                    px: 3,
                    backgroundColor: '#ffffff',
                    color: '#3cacae',
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      textDecoration: 'underline'
                    },
                  }}
                >
                  New Meeting
                </Button>
                <Menu
                  anchorEl={anchorEl1}
                  open={Boolean(anchorEl1)}
                  onClose={handleClose1}
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
              </>
            ) : (<></>)}
            {/* <Button
              onClick={() => navigate('/join-meeting')}
              variant={location.pathname === '/join-meeting' ? 'contained' : 'outlined'}
              sx={{
                fontWeight: 500,
                textTransform: 'none',
                borderRadius: '20px',
                px: 3,
                color: location.pathname === '/join-meeting' ? 'white' : '#3cacae',
                borderColor: '#3cacae',
                '&:hover': {
                  backgroundColor: location.pathname === '/join-meeting' ? '#2b9698' : 'rgba(60, 172, 174, 0.1)',
                },
              }}
            >
              Join
            </Button>
            <Button
              onClick={() => navigate('/host-meeting')}
              variant={location.pathname === '/host-meeting' ? 'contained' : 'outlined'}
              sx={{
                fontWeight: 500,
                textTransform: 'none',
                borderRadius: '20px',
                px: 3,
                color: location.pathname === '/host-meeting' ? 'white' : '#3cacae',
                borderColor: '#3cacae',
                '&:hover': {
                  backgroundColor: location.pathname === '/host-meeting' ? '#2b9698' : 'rgba(60, 172, 174, 0.1)',
                },
              }}
            >
              Host
            </Button> */}

            <Button
              onClick={handleAuth}
              variant="contained"
              sx={{
                fontWeight: 500,
                textTransform: 'none',
                borderRadius: '20px',
                px: 3,
                backgroundColor: '#3cacae',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#2b9698',
                },
              }}
            >
              {isLoggedIn() ? 'Logout' : 'Login'}
            </Button>
            {
              isLoggedIn() ? (<>
                <Button
                  onClick={handleMenu}
                  // variant={location.pathname === '/host-meeting' ? 'contained' : 'outlined'}
                  sx={{
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: '20px',
                    px: 3,
                    color: location.pathname === '/host-meeting' ? 'white' : '#3cacae',
                    borderColor: '#3cacae',
                    '&:hover': {
                      backgroundColor: location.pathname === '/host-meeting' ? '#2b9698' : 'rgba(60, 172, 174, 0.1)',
                    },
                  }}
                >
                  <VideoCallIcon />
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
                  <MenuItem onClick={handleClose}>
                    <GroupsIcon />  Go For Meetings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <LiveTvIcon /> Go For Live Stream
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <PodcastsIcon /> Upload You Podcast
                  </MenuItem>
                </Menu>
              </>) : (<></>)
            }

          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;