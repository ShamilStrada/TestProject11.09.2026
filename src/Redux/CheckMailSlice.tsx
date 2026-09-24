import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserProp {
  name?: string;
  login?: boolean;
  isLoggedMail?: boolean;
  isLoggedIn?: boolean;
  parol?: string;
}
export const InitialProps: UserProp = {
  name: '',
  login: false,
  isLoggedMail: false,
  isLoggedIn: false,
  parol: '1111',
};

const CheckMail = createSlice({
  
  name: 'user',
  initialState: InitialProps,
  reducers: {
    loginParol: (state, action: PayloadAction<string>) => {
      action.payload === state.parol ? (state.isLoggedIn = true) : (state.isLoggedIn = false);
      state.login = false;
      console.log(state.isLoggedIn)
      alert(`Успешный логин под: ${state.name}!`);
    },
    loginMail: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isLoggedMail = true;
    }, //action - объект-действие отправленный через dispatch

    logout: (state) => {
      state.name = '';
      state.isLoggedIn = false;
      state.isLoggedMail = false;
    },
    loginButton: (state) => {
      state.login = !state.login;
      console.log(state.login);
    },
  },
});
export default CheckMail.reducer;
export const { loginMail, loginParol, logout, loginButton } = CheckMail.actions;
