import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet  } from "react-router-dom";
import { Translate } from '@mui/icons-material';
import { Box, useMediaQuery } from '@mui/material';
import Sidebar from './Sidebar';

const Layout = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={{ position: 'relative' }}>
    <div style={{
      position: 'fixed', overflow: 'hidden',
      bottom: isMobile ? 60 : 0, right: 0, width: 'fit-content', height: '20px', zIndex: 100000
    }}>
      <Translate />
    </div>

    <Header />

    <Box sx={{ display: 'flex', position: 'relative', minHeight: '90vh', }}>
      {/* {isLoggedIn() ?  */}
      <Sidebar />
       {/* : <></>} */}
      
      <Box sx={{
        flexGrow: 1, position: 'relative', zIndex: 1, marginBottom: '0px',
        '@media (max-width: 600px)': {
          marginBottom: '50px',
        },
      }}>
        <Box sx={{
          pl: 1, pr: 1, overflow: 'hidden',
          maxWidth: '100vw'
        }}>
          <Outlet />
        </Box>
        <Footer></Footer>

      </Box>
    </Box>

  </Box>
  )
}

export default Layout
