/*
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegisterUser, ILoginUser, IUser } from '../interfaces';

interface AuthState {
  user: IUser | null;
  token: string | null;
  isLogged: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLogged: false,
};

/*
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess(state, action: PayloadAction<{ user: IUser; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
      localStorage.setItem('token', action.payload.token);
    },
    loginSuccess(state, action: PayloadAction<{ user: IUser; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
      localStorage.setItem('token', action.payload.token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLogged = false;
      localStorage.removeItem('token');
    },
    setSubscription(state, action: PayloadAction<boolean>) {
      if (state.user) {
        state.user.subscription = action.payload;
      }
    },
    checkIsLogged(state) {
      const token = localStorage.getItem('token');
      state.isLogged = !!token;
      state.token = token;
    },
  },
});

export const { registerSuccess, loginSuccess, logout, setSubscription, checkIsLogged } = authSlice.actions;
export default authSlice.reducer;
*/