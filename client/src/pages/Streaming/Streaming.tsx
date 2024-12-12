import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Home as HomeIcon,
  Videocam as VideocamIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
} from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 240;

interface Stream {
  id: number;
  title: string;
  channel: string;
  viewers: number;
  thumbnail: string;
  avatar: string;
}

const streams: Stream[] = [
  {
    id: 1,
    title: "CONQUEROR TOP 100 LIVE🔥 15 KD + CHICKEN ONLY🔥 💥 BGMI LIVE",
    channel: "KAUR OP LIVE",
    viewers: 738,
    thumbnail: "/images/livestreaming.webp",
    avatar: "/placeholder.svg?height=40&width=40&text=K",
  },
  {
    id: 2,
    title: "CONQUEROR TOP 100 LIVE🔥 15 KD + CHICKEN ONLY🔥 💥 BGMI LIVE",
    channel: "KAUR OP LIVE",
    viewers: 738,
    thumbnail: "/images/livestreaming.webp",
    avatar: "/placeholder.svg?height=40&width=40&text=K",
  },
  {
    id: 3,
    title: "CONQUEROR TOP 100 LIVE🔥 15 KD + CHICKEN ONLY🔥 💥 BGMI LIVE",
    channel: "KAUR OP LIVE",
    viewers: 738,
    thumbnail: "/images/livestreaming.webp",
    avatar: "/placeholder.svg?height=40&width=40&text=K",
  },
  {
    id: 4,
    title: "Israel Iran War LIVE | Israel Pounds Military Targets In Iran In Revenge Strikes",
    channel: "CNN-News18",
    viewers: 673,
    thumbnail: "/images/livestreaming.webp",
    avatar: "/placeholder.svg?height=40&width=40&text=CNN",
  },
];

const LiveStreamingPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>
      

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
         <Typography variant="h2" component="h1" sx={{ color: '#3cacae',mt:6, mb: 1, fontWeight: 'bold' }}>
          Live Streaming
        </Typography>
        <Grid container spacing={2}>
          {streams.map((stream) => (
            <Grid item xs={12} sm={6} md={4} key={stream.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={stream.thumbnail}
                  alt={stream.title}
                />
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1} sx={{color:'#3cacae'}}>
                    <Avatar src={stream.avatar} sx={{ marginRight: 1 }} />
                    <Typography variant="subtitle1" component="div">
                      {stream.channel}
                    </Typography>
                  </Box>
                  <Typography gutterBottom variant="h6" component="div" sx={{color:'#3cacae'}}>
                    {stream.title}
                  </Typography>
                  <Typography variant="body2" color="#Ff0000" >
                    {stream.viewers} watching
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LiveStreamingPage;