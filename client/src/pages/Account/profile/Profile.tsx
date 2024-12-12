import React from 'react'
import {
  Box,
  Typography,
  CircularProgress,
  Avatar,
  Button,
  Tabs,
  Tab,
  Paper,
  Grid,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import CompleteYourProfile from './CompleteYourProfile'
import IndividualProfile from './IndividualProfile'
import YourLiveStreame from './YourLiveStreame'
import YourPodcast from './YourPodCast'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3cacae',
    },
    background: {
      default: '#ffffff',
    },
  },
})



const UserProfile: React.FC = () => {
 



  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1,m:7, p: 3, bgcolor: 'background.default' }}>
        <Grid container spacing={3}>
          <CompleteYourProfile/>
          <IndividualProfile/>
          
          {/* <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Activity Feed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                No recent activity
              </Typography>
            </Paper>
          </Grid> */}
          <YourLiveStreame/>
          <YourPodcast/>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default UserProfile;