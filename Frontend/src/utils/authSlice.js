// src/utils/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tempUser: null,
  tempStatus: null
};

const authSlice = createSlice({
  name: 'temp_auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.tempUser = action.payload.tempUser;
      state.tempStatus = action.payload.tempStatus;
    },
    clearAuthState: (state) => {
      state.tempUser = null;
      state.tempStatus = null;
    }
  }
});

export const { setAuthState, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
