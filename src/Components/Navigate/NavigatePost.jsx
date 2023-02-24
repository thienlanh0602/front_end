import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Rating, Toolbar, Typography } from '@mui/material';
import { ArrowRight, Favorite, ImportContacts, MoreVert } from '@mui/icons-material';
import imgPost from './Rectangle50.svg'


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
  justifyContent: 'center',
  backgroundColor: 'none',
  flexDirection: 'column',
  marginBottom: 'auto'
}

const myCard = {
  borderRadius: '12px',
  margin: 'auto',
  justifyContent: 'center',
  maxWidth: '100%',
  maxHeight: '100%',
  width: '500px',
  height: '480px',
}

const myCard_hold = {
  justifyContent: 'center',
  maxWidth: '100%',
  maxHeight: '100%',
  width: '500px',
  height: '800px',
  borderRadius: '12px',
}

const myMedia = {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop: '30'
}

const myButton_timKiem = {
  backgroundColor: '#CBB7F5',
  color: '#434343',
  height: '40px',
  width: '100px',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'none',
  margin: '7px 0px 0px 10px',
  borderRadius: '10px',
  border: '1px solid',
  borderColor: '#808080',
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
            <Box sx={{}}>
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
      <Toolbar sx={{ dislay: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={myToolbarContent}>
          <TabContext value={value} >
            <TabPanel value="1" >
              {/* de rieng ra 1 component */}
              <Card sx={myCard}>
                <CardHeader
                  // avatar={
                  //   <Avatar>R</Avatar>
                  // }
                  action={
                    <IconButton aria-label='settings'>
                      <MoreVert />
                    </IconButton>
                  }
                  title='Đây là tên bài viết'
                  titleTypographyProps={{ align: 'left', fontSize: '16px', fontWeight: 'bold', paddingBottom: '2px' }}
                  subheader='Đây là ngày đăng bài'
                  subheaderTypographyProps={{ align: 'left', fontSize: '12px' }}
                  sx={{
                    //   '& .MuiTypography-root': {
                    //     color: 'black', fontSize: '14px', fontWeight: 'bold'
                    // },
                  }}
                >
                </CardHeader>

                <CardMedia
                  sx={myMedia}
                  image={imgPost}
                >
                </CardMedia>


                <CardContent>
                  <Typography sx={{ textAlign: 'left', fontSize: '14px' }}>
                    Đây là nội dung bài viết
                  </Typography>
                </CardContent >


                <CardActions disableSpacing >

                  <IconButton sx={{ border: '0px solid black', backgroundColor: '#D9D9D9', borderRadius: '4px' }} >
                    <Favorite sx={{ fontSize: '24px', color: 'black' }} />
                  </IconButton>

                  <IconButton>
                    <Rating />
                  </IconButton>

                  <IconButton sx={{ ml: 'auto' }}>
                    <ArrowRight />
                  </IconButton>

                </CardActions>

                <Collapse>
                </Collapse>


              </Card>
            </TabPanel>
          </TabContext>


          <TabContext value={value} >
            <TabPanel value="1" >
              {/* de rieng ra 1 component */}
              <Card sx={myCard}>
                <CardHeader
                  // avatar={
                  //   <Avatar>R</Avatar>
                  // }
                  action={
                    <IconButton aria-label='settings'>
                      <MoreVert />
                    </IconButton>
                  }
                  title='Đây là tên bài viết'
                  titleTypographyProps={{ align: 'left', fontSize: '16px', fontWeight: 'bold', paddingBottom: '2px' }}
                  subheader='Đây là ngày đăng bài'
                  subheaderTypographyProps={{ align: 'left', fontSize: '12px' }}
                  sx={{
                    //   '& .MuiTypography-root': {
                    //     color: 'black', fontSize: '14px', fontWeight: 'bold'
                    // },
                  }}
                >
                </CardHeader>

                <CardMedia
                  sx={myMedia}
                  image={imgPost}
                >

                </CardMedia>

                <CardContent>
                  <Typography sx={{ textAlign: 'left', fontSize: '14px' }}>
                    Đây là nội dung bài viết
                  </Typography>
                </CardContent >

                <CardActions disableSpacing >



                  <IconButton >
                    <Favorite />
                  </IconButton>

                  <IconButton>
                    <Rating />
                  </IconButton>


                  <IconButton sx={{ ml: 'auto' }}>
                    <ArrowRight />
                  </IconButton>

                </CardActions>

                <Collapse>
                </Collapse>

              </Card>
            </TabPanel>
          </TabContext>

        </Box>


        {/* trang nay la trang can giu lai position={'fixed'} overflow='hidden'*/}
        <Box sx={{ marginBottom: 'auto', zIndex: '1'}} >
         
            <TabContext value={value}>
              
            <TabPanel value="1" sx={{ margin: '0' }}>
              {/* de rieng ra 1 component */}
              <Card sx={myCard_hold}>
                
                <CardHeader 
                title='Đây là tên bài viết chi tiết'
                titleTypographyProps={{align: 'left'}}
                
                >

                </CardHeader>

                {/* day la thanh ngach ngang phan cach */}
                <Box  sx={{maxWidth: '100%', height: '1px', width: '100%', backgroundColor: '#E8E8E8'}}>

                </Box>

                <Box> </Box>
                
                <CardActions>

                  <Button sx={myButton_timKiem} > Ứng tuyển </Button>

                </CardActions>
              
              </Card>
            </TabPanel>
          </TabContext>
          </Box>
          
      </Toolbar>

    </div>
  );
}