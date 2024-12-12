import React from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  ThemeProvider, 
  createTheme 
} from '@mui/material'

// Define the theme
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

// Define the Podcast interface
interface Podcast {
  id: number
  title: string
  creator: string
  imageUrl: string
}

// Sample podcast data
const podcasts: Podcast[] = [
  {
    id: 1,
    title: "The Ranveer Show हिंदी",
    creator: "BeerBiceps",
    imageUrl: "/images/podacast1.jpeg",
  },
  {
    id: 2,
    title: "Vedicscience",
    creator: "Vedicscience",
    imageUrl: "/images/podacast1.jpeg",
  },
  {
    id: 3,
    title: "Hustle Science",
    creator: "IVM Podcasts",
    imageUrl: "/images/podacast1.jpeg",
  },
  {
    id: 4,
    title: "Let's revise MBBS",
    creator: "Ayush Dhoka",
    imageUrl: "/images/podacast1.jpeg",
  },
]

// eslint-disable-next-line @typescript-eslint/no-redeclare
const YourLiveStreame: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{  py: 4 }}>
        <Typography variant="h2" component="h1" sx={{ color: 'primary.main',mt:4, mb: 4, fontWeight: 'bold' }}>
          Your Live Streame
        </Typography>
        <Grid container spacing={3}>
          {podcasts.map((podcast) => (
            <Grid item key={podcast.id} xs={12} sm={6} md={3}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                bgcolor: 'primary.default',
                color: 'primary.main',
                '&:hover': {
                  transform: 'scale(1.03)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={podcast.imageUrl}
                  alt={podcast.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {podcast.title}
                  </Typography>
                  <Typography variant="body2">
                    {podcast.creator}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default YourLiveStreame;