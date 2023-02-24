import React from 'react'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';

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

const myButton_timKiem = {
    backgroundColor: '#B7F5D7',
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
    '&:hover': {
        backgroundColor: '#CBB7F5',
        borderColor: 'none',
        boxShadow: 'none',
    }
}

const myTextField = {
    '& .MuiSelect-select': {
        color: 'black', fontSize: '12px'
    },
    '& .MuiSvgIcon-root': {
        fontSize: '20px', paddingRight: '2px'
    },
    // '& .MuiStack-root': {
    //     alignContent: 'start'
    // }
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: '10px'
        },
        '&.Mui-focused fieldset': {
            border: "1px solid black",
            
        }
    },
    '& label.Mui-focused': {
        color: 'black',
      
    }
}

const myInputAdornment = {
    '& .MuiTypography-root': {
        fontWeight: 'bold',
        color: 'black',
        fontSize: '12px',
        paddingLeft: '4px'
    }
}

const myFontSize = {
    fontSize: '12px'
}

const myStack = {
    '& .MuiTextField-root': {
        margin: 1,
        width: '220px',
        maxHeight: '100%'
    },
   
}

const myInputProps_Khoa = {
    startAdornment: <InputAdornment position="start"
        sx={myInputAdornment}
    > Khoa </InputAdornment>,
    style: {
        height: '40px'
    }
}

const myInputProps_Vitri = {
    startAdornment: <InputAdornment position="start"
        sx={myInputAdornment}
    > Vị trí </InputAdornment>,
    style: {
        height: '40px'
    }
}

const myToolbar = {
    justifyContent: 'center',
    border: '1px solid ',
    borderLeft: 'none',
    borderRight: 'none',
    borderColor: '#E8E8E8',
    backgroundColor: 'white'
}

export default function Navigations() {
    const [currency1, setCurrency1] = React.useState(' ');

    const handleChange1 = (event) => {
        setCurrency1(event.target.value);
    };
    const [currency2, setCurrency2] = React.useState(' ');

    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
    };

    return (
        <Toolbar sx={myToolbar}>
            <Stack
                textAlign='center'
                component="form"
                noValidate
                autoComplete="off"
                sx={myStack}
            >
                <Box pt={3} pb={2}>
                    <TextField
                        id="filled-select-currency"
                        select
                        value={currency1}
                        onChange={handleChange1}
                        variant="outlined"
                        InputProps={myInputProps_Khoa}
                        subhead
                        sx={myTextField}
                    >
                        {currencies1.map((option) => (
                            <MenuItem key={option.value}
                                value={option.value}
                                sx={myFontSize}
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
                        InputProps={myInputProps_Vitri}
                        sx={myTextField}
                    >
                        {currencies2.map((option) => (
                            <MenuItem key={option.value}
                                value={option.value}
                                sx={myFontSize}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button sx={myButton_timKiem} > Tìm kiếm </Button>
                </Box>

                {/* button sap xep hien ra tai day */}

                <Box pb={3}>
                    <Typography variant='h6' fontSize={13} gutterBottom align='center'>
                    </Typography>
                </Box>
            </Stack>
        </Toolbar>
    )
}
