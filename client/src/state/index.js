import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  services: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setServices: (state, action) => {
      state.services = action.payload.services
    },
    setService: (state, action) => {
      const updatedServices = state.services.map((service) => {
        if (service._id === action.payload.service_id) return action.payload.service;
        return service;
      });
      state.services = updatedServices
    }
  }
})

export const { setMode, setLogin, setLogout, setServices, setService} = authSlice.actions;
export default authSlice.reducer;