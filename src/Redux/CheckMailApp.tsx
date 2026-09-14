import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './Store';
import { loginMail, loginParol, logout } from './CheckMailSlice';
import { Box, Button, IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { FormControl } from '@mui/material';
import { Label } from '@mui/icons-material';

export const CheckMailApp = () => {
  const { name, isLoggedIn, isLoggedMail } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [parolIn, setparol] = useState('');
  const [mail, setmail] = useState('');

  return !isLoggedIn ? (
    !isLoggedMail ? (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Box
          component='form'
          sx={{ display: 'flex', flexDirection: 'row' }}
          onSubmit={(e: any) => {
            e.preventDefault();
            dispatch(loginMail(mail));
            console.log(name);
          }}
        >
          <TextField
            value={mail}
            onChange={(e) => {
              setmail(e.target.value);
              console.log(mail);
            }}
            placeholder='Введите логин'
          ></TextField>
          <IconButton onClick={() => dispatch(logout())}>
            <LogoutIcon></LogoutIcon>
          </IconButton>
        </Box>
      </Box>
    ) : (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Box
          component='form'
          sx={{ display: 'flex', flexDirection: 'row' }}
          onSubmit={() => dispatch(loginParol(parolIn))}
        >
          <TextField
            value={parolIn}
            onChange={(e) => setparol(e.target.value)}
            placeholder='Введите пароль'
          ></TextField>
          <IconButton onClick={() => dispatch(logout())}>
            <LogoutIcon></LogoutIcon>
          </IconButton>
        </Box>
      </Box>
    )
  ) : null;
};
