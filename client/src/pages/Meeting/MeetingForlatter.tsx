import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Drawer, IconButton, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFnsV3';
import { useFormik } from 'formik';
// import { createMeeting, generateMeetingId, getMeeting } from '../../services/services';
import { scheduleValidationSchema } from '../../components/Schema';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import color from '../../components/utils/Colors';
// import UpCommingMeet from './UpCommingMeet';
import { getUserId } from '../../services/axiosClient';

const MeetingForlatter: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const [meetings, setMeetings] = useState<any>([]);
    const isMobile = useMediaQuery('(max-width:600px)');

    const formik = useFormik({
        initialValues: {
            meetingId: '',
            dateTime: null,
        },
        validationSchema: scheduleValidationSchema,
        onSubmit: (values) => {
            // fetch('https://api.ipify.org/?format=json')
            //     .then(response => response.json())
            //     .then(data => {
            //         createMeeting({
            //             "meetingId": values.meetingId,
            //             "hostIp": data.ip,
            //             "scheduleTime": values.dateTime,
            //             'userId': getUserId(),
            //             "duration": 0,
            //             "status": "CREATED",
            //         }).then(() => {
            //             navigate(`/host-meeting`);
            //         }).catch(error => console.log(error))
            //     })
            //     .catch(error => console.log(error))
            console.log(values)
        },
    });

    const handleCopyLink = async () => {
        navigator.clipboard.writeText(window.location.origin + '/join-meeting?meetingId=' + formik.values.meetingId);
    };

    const handleCreateMeeting = async () => {
        try {
            // const response = await generateMeetingId();
            // const data = response?.data?.data;
            // formik.setFieldValue('meetingId', data.roomId);
        } catch (error) {
            console.error('Error creating meeting:', error);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    useEffect(() => {
        // getMeeting({
        //     fieldName: "scheduleTime",
        //     "fieldValue": new Date()
        // }).then((result) => {
        //     setMeetings(result.data.data)
        // }).catch(error => console.log(error))
    }, [])


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: "url('/images/voiceworldbg.svg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                marginTop:'50px'
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="80vh"
                width={isMobile ? '100%' : "70%"}
                padding={2}
                component="form"
                onSubmit={formik.handleSubmit}
            >
                <Typography variant="h4" component="h1" gutterBottom style={{ color: '#002a1e' }}>
                    Schedule Meetings
                </Typography>

                <TextField
                    className="input-root"
                    placeholder="Meeting ID"
                    fullWidth
                    margin="normal"
                    name="meetingId"
                    value={formik.values.meetingId}
                    onChange={formik.handleChange}
                    error={formik.touched.meetingId && Boolean(formik.errors.meetingId)}
                    helperText={formik.touched.meetingId && formik.errors.meetingId}
                    InputProps={{
                        endAdornment: (
                            <IconButton edge="end" sx={{color:'#3cacae'}} onClick={handleCopyLink}>
                                <ContentCopyIcon />
                            </IconButton>
                        ),
                    }}
                />

               

                <Button
                    type="submit"
                    variant="contained"
                    style={{
                        background: color.firstColor,
                        fontWeight: 'bold',
                        width: '30%',
                        borderRadius: '8px',
                        marginTop: '16px',
                        marginBottom: '16px',
                    }}
                >
                    Save
                </Button>
                <Button
                    onClick={handleCreateMeeting}
                    variant="contained"
                    style={{
                        background: color.firstColor,
                        fontWeight: 'bold',
                        width: isMobile ? '60%' : '40%',
                        borderRadius: '8px',
                        marginTop: '16px',
                        marginBottom: '16px',
                    }}
                >
                    Generate Meeting Id
                </Button>
            </Box>
            {/*  */}
        </div>
    );
};

export default MeetingForlatter;