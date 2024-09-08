/*
import { createSlice, PayloadAction, createAsyncThunk  } from "@reduxjs/toolkit";
import { IUser } from "@/interfaces/index";

interface AuthState {
  user: IUser | null;
  token: string | null;
  isLogged: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLogged: false,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData: Omit<IUser, "id">) => {
    const response = await fetch("TU_URL_DE_GRAPHQL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation RegisterUser($input: RegisterInput!) {
            registerUser(input: $input) {
              id
              email
              firstName
              lastName
              token
            }
          }
        `,
        variables: {
          input: userData,
        },
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return result.data.registerUser;
    } else {
      throw new Error(result.errors[0]?.message || "Failed to register user");
    }
  }
);

// Asynchronous thunk para el login de usuarios
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (loginData: { email: string; password: string }) => {
    const response = await fetch("TU_URL_DE_GRAPHQL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation LoginUser($input: LoginInput!) {
            loginUser(input: $input) {
              token
              user {
                id
                password
                email
              }
            }
          }
        `,
        variables: {
          input: loginData,
        },
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return result.data.loginUser;
    } else {
      throw new Error(result.errors[0]?.message || "Failed to login");
    }
  }
);

/*
// Slice para el manejo del estado de autenticación
export const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      // Register user cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLogged = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to register user";
      })
      // Login user cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to login";
      });
  },
});

export const { logout, setSubscription } = userReducer.actions;
export default userReducer.reducer;*/