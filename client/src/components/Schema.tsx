import * as Yup from 'yup';

const registerValidationSchema = Yup.object({
    userName: Yup.string().required('First Name is Required'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    phoneNumber: Yup.string()
    .matches(/^[+91][0-9]+$/, 'Phone Number must be digits only and start with +91')
    .min(13, 'Must be 10 numbers after +91')
    .required('Phone Number is Required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot be more than 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
  
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is Required'),
});

const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot be more than 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
  
});

const joinMeetingSchema = Yup.object({
    meetingId: Yup.string().required('Meeting ID is required'),
    userName: Yup.string().required('Your Name is required'),
});

const HostMeetingSchema = Yup.object({
    meetingId: Yup.string().required('Meeting ID is required'),
    userName: Yup.string().required('Your Name is required'),
});

const scheduleValidationSchema =Yup.object({
    meetingId: Yup.string().required('Meeting ID is required'),
    // userName: yup.string().required('Your Name is required'),
    dateTime: Yup.date().required('Date and Time is required'),
});


export {
    registerValidationSchema,
    loginValidationSchema,
    HostMeetingSchema,
    joinMeetingSchema,
    scheduleValidationSchema
}