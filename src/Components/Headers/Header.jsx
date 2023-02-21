import * as React from 'react';
import './Header.css'

import logo1 from './logo-ctv.svg';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'

import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';



import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default function Header() {
  return (
    <Toolbar className='header'>
      <Box
        component="img"
        src={logo1}
      />
      <Typography align='left' sx={{ flexGrow: 1 }}></Typography>
      <Typography pr={3} pl={3} fontWeight='bold'>Tìm vị trí ngay...</Typography>

      <div className="verticalLine">
      </div>

      <Box>
        <Button type='submit' href='' style={{ backgroundColor: "white", color: "black" }}>
          <NotificationsIcon></NotificationsIcon>
        </Button>
      </Box>
      <Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Cài Đặt Tài Khoản">
          <IconButton
            size="small"
            sx={{ ml: 2 }}
            style={{ backgroundColor: "white", color: "black" }}
          >
            <PersonIcon ></PersonIcon>
          </IconButton>
        </Tooltip>
      </Box>
    </Toolbar >
  )

}