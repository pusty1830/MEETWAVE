import { Grid, Paper, Typography, Box, CircularProgress } from '@mui/material'
import React from 'react'
interface ProfileTask {
    name: string
    completed: number
    total: number
  }
  
  const profileTasks: ProfileTask[] = [
    { name: 'Details', completed: 3, total: 12 },
    { name: 'Profile', completed: 0, total: 1 },
    { name: 'CoverPhoto', completed: 0, total: 1 },
  ]

const CompleteYourProfile = () => {
    const totalCompleted = profileTasks.reduce((sum, task) => sum + task.completed, 0)
    const totalTasks = profileTasks.reduce((sum, task) => sum + task.total, 0)
    const completionPercentage = Math.round((totalCompleted / totalTasks) * 100)
  return (
    <>
       <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Complete Your Profile
              </Typography>
              <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                <CircularProgress variant="determinate" value={completionPercentage} size={80} />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="caption" component="div" color="text.secondary">
                    {`${completionPercentage}%`}
                  </Typography>
                </Box>
              </Box>
              {profileTasks.map((task) => (
                <Box key={task.name} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">{task.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${task.completed}/${task.total}`}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
    </>
  )
}

export default CompleteYourProfile
