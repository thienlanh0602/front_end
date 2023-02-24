import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Rating, Toolbar, Typography } from '@mui/material';
import { ArrowRight, Favorite, MoreVert } from '@mui/icons-material';
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
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  backgroundColor: 'none',
}

const myCard = {
  justifyContent: 'center',
  width: '500px',
  height: '500px',
  borderRadius: '12px',
  margin: 'auto'
}

const myMedia = {
  height: 0, 
  paddingTop: '56.25%', // 16:9,
  marginTop: '30'
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
                  <Typography sx={{textAlign: 'left', fontSize: '14px'}}>
                    Đây là nội dung bài viết
                  </Typography>
                </CardContent >




                <CardActions>
                  <IconButton >
                    <Favorite />
                  </IconButton>

                  <IconButton >
                    <Rating />
                  </IconButton>
                  
                  
                  <IconButton >
                    <ArrowRight />
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