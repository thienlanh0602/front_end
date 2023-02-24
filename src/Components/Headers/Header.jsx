import * as React from 'react';

import logo1 from './logo-ctv.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const toolbar_bg = {
  backgroundColor: 'white'
}

const mylogo = {
  flexGrow: 1,
  align: 'left'
}

const myText = {
  fontWeight: 'bold',
  paddingRight: '24px',
  paadingLeft: '24px',
  fontSize: '12px'
}

const myVerticalLine = {
  backgroundColor: '#B8B8B8',
  height: '30px',
  width: '1.5px',
  marginLeft: '10px',
  marginRight: '10px',
  marginTop: '0px',
  marginBottom: '0px'
}

const myIconButton = {
  backgroundColor: "white",
  color: "black"

}

const MyStyleBox = {
  paddingRight: '14px',
  paddingLeft: '14px'
}

const myFontSize = {
  fontSize: '18px'
}

const mySizeImg = {
  maxWidth: '100%',
  height: '28px'
}

export default function Header() {
  return (
    <Toolbar sx={toolbar_bg} >
      <Box
        component="img"
        src={logo1}
        sx={mySizeImg}
      />

      <Typography sx={mylogo}> </Typography>

      <Typography sx={myText}>Tìm vị trí ngay...</Typography>

      <Box sx={myVerticalLine}></Box>

      <Box sx={MyStyleBox} title='Thông báo'>
        <IconButton sx={myIconButton} >
          <NotificationsIcon sx={myFontSize}></NotificationsIcon>
        </IconButton>
      </Box>

      <Box sx={MyStyleBox} title="Cài Đặt Tài Khoản">
        <Tooltip>
          <IconButton sx={myIconButton}>
            <PersonIcon sx={myFontSize}></PersonIcon>
          </IconButton>
        </Tooltip>
      </Box>

    </Toolbar >
  )

}