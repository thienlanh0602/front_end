import React from 'react'
import './Navigate.css'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';

import MenuItem from '@mui/material/MenuItem';

import { styled } from '@mui/material'

const currencies1 = [
    {
        value: 'CNTT',
        label: 'Công Nghệ Thông Tin',
    },
    {
        value: 'QTKD',
        label: 'Quản Trị Kinh Doanh',
    },
    {
        value: 'KTOT',
        label: 'Kỹ Thuật Ô Tô',
    },
];
const currencies2 = [
    {
        value: 'PGSK',
        label: 'Phụ Giúp Sự Kiện',
    },
    {
        value: 'SCKT',
        label: 'Sửa Chữa Kỹ Thuật',
    },
];



export default function Navigations() {
    const [currency1, setCurrency1] = React.useState(' ');

    const handleChange1 = (event) => {
        setCurrency1(event.target.value);
    };
    const [currency2, setCurrency2] = React.useState(' ');

    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
    };

    const MyButton = styled(Button)({
        backgroundColor: '#B7F5D7',
        color: 'black',
        height: '50px',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'none',
        width: '120px',
        margin: '7px 0px 0px 10px',
        borderRadius: '15px',
        border: '1px solid',
        borderColor: '#808080',
        '&:hover': {
            backgroundColor: '#CBB7F5',
            borderColor: 'none',
            boxShadow: 'none',
        },
        // letterSpacing: 1 
    })

    return (
        <Toolbar className='toolbar'>
            <Stack
                textAlign='center'
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '220px', maxHeight: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <Box pt={3} pb={2}>
                    <TextField
                        id="filled-select-currency"
                        select
                        value={currency1}
                        onChange={handleChange1}
                        variant="outlined" 
                        InputProps={{
                            startAdornment: <InputAdornment position="start"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontWeight: 'bold', color: 'black', fontSize: '14px'
                                    }
                                }}
                            >Khoa</InputAdornment>,
                            style: {
                                height: '50px'
                            },
                            
                        }}
                        sx={{
                            '& .MuiSelect-select': {
                                color: 'black', fontSize: '13px'
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: '20px'
                            },
                            // '& .MuiStack-root': {
                            //     alignContent: 'start'
                            // }
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderRadius: '15px'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'black',
                                }
                            },
                            '& label.Mui-focused': {
                                color: 'black'
                              },
                        }}
                    >
                        {currencies1.map((option) => (
                            <MenuItem key={option.value}
                                value={option.value}
                                sx={{
                                    fontSize: '13px',

                                }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="filled-select-currency"
                        select
                        value={currency2}
                        onChange={handleChange2}
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontWeight: 'bold', color: 'black', fontSize: '14px'
                                    }
                                }}
                            >Vị trí</InputAdornment>,
                            style: {
                                height: '50px'
                            }

                        }}
                        sx={{
                            '& .MuiSelect-select': {
                                color: 'black', fontSize: '13px'
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: '20px'
                            },
                            // '& .MuiStack-root': {
                            //     alignContent: 'start'
                            // }
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderRadius: '15px'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'black',
                                }
                            },
                            '& label.Mui-focused': {
                                color: 'black'
                              },
                        }}
                    >
                        {currencies2.map((option) => (
                            <MenuItem key={option.value}
                                value={option.value}
                                sx={{ fontSize: '13px',
                                
                            }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <MyButton>Tìm kiếm</MyButton>
                </Box>
                <Box pb={3}>
                    <Typography variant='h6' fontSize={13} gutterBottom align='center'>
                    </Typography>
                </Box>
            </Stack>
        </Toolbar>
    )
}
