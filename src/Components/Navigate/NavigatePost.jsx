import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Rating, Toolbar, Typography } from '@mui/material';
import { Favorite, MoreVert } from '@mui/icons-material';


const myColor = {
  backgroundColor: 'none',
  justifyContent: 'center',
  textAlign: 'center'
}

const myToolbarTitle = {
  justifyContent: 'center',
  paddingTop: '11px',
  backgroundColor: 'white',
  maxWidth: '100%'
}

const myBox = {
  justifyContent: 'center',
  textAlign: 'center'
}

const myTabIndicatorProps = {
  children: <span className="MuiTabs-indicatorSpan" />
}

const myTabList = {
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 50,
    width: '100%',
    backgroundColor: '#F8D6A4',
    borderRadius: 4
  },
  "& .MuiTab-root.Mui-selected": {
    color: 'black'
  }
}

const myTab = {
  textTransform: 'none',
  fontFamily: '',
  fontSize: '16px',
  borderRadius: 2,
  fontWeight: 'bold',
}

const myToolbarContent = {
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  backgroundColor: 'none',
}

const myCard = {
  justifyContent: 'center',
  width: '500px',
  height: '500px',
  borderRadius: '14px'
}

export default function NavigatitonsPost() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={myColor}>
      <Toolbar sx={myToolbarTitle}>
        <Box sx={myBox}>
          <TabContext value={value} >
            <Box>
              <TabList onChange={handleChange}
                TabIndicatorProps={myTabIndicatorProps}
                sx={myTabList}
              >
                <Tab label="Bảng tin"
                  sx={myTab}
                  value="1"
                />
              </TabList>
            </Box>
          </TabContext>
        </Box>
      </Toolbar>

      {/* thanh cua content - dang bai viet */}
      <Toolbar>
      <Box sx={myToolbarContent}>
        <TabContext value={value} >
        <TabPanel value="1" sx={{}}>
          {/* de rieng ra 1 component */}
          <Card sx={myCard}>
            <CardHeader
              avatar={
                <Avatar>R</Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVert />
                </IconButton>
              }
              title='Đây là tên bài viết'
              subheader='Đây là ngày đăng bài'
            >
            </CardHeader>


            <CardMedia
              image=''
            >
              đây là hình ảnh
            </CardMedia>


            <CardContent>
              <Typography>
                Đây là nội dung bài viết
              </Typography>
            </CardContent>




            <CardActions>
              <IconButton >
                <Favorite />
              </IconButton>

              <IconButton >
                <Rating />
              </IconButton>
            </CardActions>



            <Collapse>
            </Collapse>
          </Card>
        </TabPanel>
      </TabContext>

    </Box>
      
      </Toolbar>
   

    </div>
  );
}