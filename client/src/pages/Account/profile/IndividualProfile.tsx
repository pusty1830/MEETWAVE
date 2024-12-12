import { Grid, Paper, Box, Typography, Button, Avatar, Tabs, Tab, Divider } from '@mui/material'
import React from 'react'
import { Edit as EditIcon, Shield as ShieldIcon } from '@mui/icons-material'
import { getUserName } from '../../../services/axiosClient'
const IndividualProfile = () => {
    // const [tabValue, setTabValue] = React.useState(0)

    // const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    //   setTabValue(newValue)
    // }
    return (
        <>
            <Grid item xs={12} md={8}>
                <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" color="primary">
                            Individual Profile
                        </Typography>
                        <Button startIcon={<EditIcon />} color="primary">
                            Edit your profile
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ width: 100, height: 100, mr: 2 }}>U</Avatar>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <ShieldIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="body2">Joined 27-10-2024</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Typography variant="body2">followers 0</Typography>
                                <Typography variant="body2">following 0</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <div>
                        <Typography
                            variant="h3"
                            className="widget_title"
                            sx={{
                                color: "#38223D",
                                fontSize: "25px",
                                padding: "15px 0px",
                                paddingTop: '25px',
                                textTransform: "capitalize",

                            }}
                        >
                            Details
                        </Typography>
                        <Divider
                            sx={{
                                borderColor: "#A3A5A9",
                                borderWidth: "1px",
                                opacity: "0.4",
                                marginBottom: "15px",
                            }}
                        />

                        <Grid container spacing={2}>
                            <Grid item xs={5} md={3} sx={{ height: "fit-content" }}>

                                <Grid container spacing={1} alignItems="center">
                                    <Grid item sx={{ padding: "20px" }}>
                                        <Typography

                                            sx={{ color: "rgba(24, 37, 46, 1)", fontSize: { xs: '13px', md: "16px" } }}
                                        >
                                            userName
                                        </Typography>
                                    </Grid>
                                </Grid>

                                {/* Second Row */}



                                <Grid container spacing={1} alignItems="center">
                                    <Grid item sx={{ padding: "20px" }}>
                                        <Typography

                                            sx={{ color: "rgba(24, 37, 46, 1)", fontSize: { xs: '13px', md: "16px" } }}
                                        >
                                            Email
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={7}>
                                {/* First Row */}
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item sx={{ padding: "20px" }}>
                                        <Typography

                                            sx={{ color: "rgba(24, 37, 46, 1)", minHeight: { xs: '19.5px', md: "24px" }, fontSize: { xs: '13px', md: "16px" } }}
                                        >
                                            {/* {data.userName} */}
                                            {getUserName()}
                                            {/* Amitav Pusty */}
                                        </Typography>
                                    </Grid>
                                </Grid>


                                {/* Third Row */}
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item sx={{ padding: "20px" }}>
                                        <Typography

                                            sx={{ color: "rgba(24, 37, 46, 1)", minHeight: { xs: '19.5px', md: "24px" }, fontSize: { xs: '13px', md: "16px" } }}
                                        >
                                            <a href={`mailto:hjgyhgjh`} style={{ textDecoration: 'none', color: '#3cacae' }}>
                                                {/* {data.email} */}
                                                amitav.prusty089@gmail.com
                                            </a>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    {/* <Tabs value={tabValue} onChange={handleTabChange} aria-label="profile tabs">
                <Tab label="About Me" />
                <Tab label="Timeline" />
                <Tab label="Connections" />
                <Tab label="Groups" />
                <Tab label="Photos" />
                <Tab label="Videos" />
              </Tabs> */}
                </Paper>
            </Grid>

        </>
    )
}

export default IndividualProfile
