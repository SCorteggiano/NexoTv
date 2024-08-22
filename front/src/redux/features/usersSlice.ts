import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/interfaces/index";

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

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLogged = false;
      localStorage.removeItem("token");
    },
    setSubscription: (state, action: PayloadAction<boolean>) => {
      if (state.user) {
        state.user.subscription = action.payload;
      }
    },
  },
});

export const { loginSuccess, logout, setSubscription } = usersSlice.actions;
export default usersSlice.reducer;
