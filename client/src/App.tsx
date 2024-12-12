import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Login from './pages/Account/Login';
import Signup from './pages/Account/Signup';
import HomePage from './pages/HomePage';
import MeetingPage from './pages/Meeting/Meeting';
import LiveStreamingPage from './pages/Streaming/Streaming';
import UpcomingEvents from './pages/UpcomingEvent/UpcomingEvent';
import Podcast from './pages/podcast/Podcast';
import UserProfile from './pages/Account/profile/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import InstantMeeting from './pages/Meeting/InstantMeeting';
import MeetingForlatter from './pages/Meeting/MeetingForlatter';
import JoinMeeting from './pages/Meeting/JoinMeeting';
import MeetingRoom from './pages/Meeting/MeetingRoom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/meeting" element={<MeetingPage />} />
            {/* <Route path="/live" element={<LiveStreamingPage />} /> */}
            {/* <Route path="/upcoming" element={<UpcomingEvents />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/profile" element={<UserProfile />} /> */}

            <Route path='/join-meeting' element={<JoinMeeting />} />
          </Route>
          <Route path='/room/:meetingId' element={<MeetingRoom />} />
        </Routes>
        {/* <PrivateRoute path="/meeting" component={MeetingPage} /> */}
        <PrivateRoute path="/live" component={LiveStreamingPage} />
        <PrivateRoute path="/upcoming" component={UpcomingEvents} />
        <PrivateRoute path="/podcast" component={Podcast} />
        <PrivateRoute path="/profile" component={UserProfile} />
        <PrivateRoute path='/instant-meeting' component={InstantMeeting} />
        <PrivateRoute path='/meeting-later' component={MeetingForlatter} />

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
