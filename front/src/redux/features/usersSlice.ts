import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { loginSuccess, logout } = usersSlice.actions;
export default usersSlice.reducer;