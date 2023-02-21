import React from 'react'
import './Navigate.css'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

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
    const [currency1, setCurrency1] = React.useState('CNTT');

    const handleChange1 = (event) => {
        setCurrency1(event.target.value);
    };
    const [currency2, setCurrency2] = React.useState('PGSK');

    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
    };

    const MyButton = styled(Button)({
        backgroundColor: '#B7F5D7',
        color: 'black',
        height: '50px',
        fontSize: '15px',
        fontWeight: 'bold',
        textTransform: 'none',
        width: '120px',
        margin: '7px 0px 0px 10px',
        borderRadius: '10px',
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
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Box pt={3} pb={2}>
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Khoa"
                        value={currency1}
                        onChange={handleChange1}
                        variant="outlined"
                    >
                        {currencies1.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Vị Trí"
                        value={currency2}
                        onChange={handleChange2}
                        variant="outlined"
                    >
                        {currencies2.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
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
