import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { styled } from '@mui/material/styles';

import './NavigatePost.css'
import { Tabs, Toolbar } from '@mui/material';

export default function NavigatitonsPost() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div>
      <Toolbar className='toolbarTitle'>
        <Box className='box'>
          <TabContext value={value} >
            <Box>
              <TabList onChange={handleChange}
                TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
                textColor='black'
                sx={{
                  '& .MuiTabs-indicator': {
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                  },
                  '& .MuiTabs-indicatorSpan': {
                    maxWidth: 60,
                    width: '100%',
                    backgroundColor: '#F8D6A4',
                    borderRadius: 4
                  },
                }}
              >
                <Tab label="Bảng tin"
                  sx={{ textTransform: 'none', fontFamily: '', fontSize: '18px', borderRadius: 2 }}
                  value="1"
                />
              </TabList>
            </Box>
          </TabContext>
        </Box>
      </Toolbar>

      {/* thanh cua content */}
      <Toolbar className='toolbarContent'>
        <Box >
          <TabContext value={value} >
            <TabPanel
              value="1"
              sx={{
                fontSize: 14
              }}
            >
              Đây là bài viết
            </TabPanel>
          </TabContext>
        </Box>
      </Toolbar>
    </div>
  );
}