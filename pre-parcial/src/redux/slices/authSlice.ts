import { createSlice } from "@reduxjs/toolkit";

const initialState = { userType: "admin" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleUserType(state) {
      state.userType = state.userType === "admin" ? "user" : "admin";
    },
  },
});

export const { toggleUserType } = authSlice.actions;
export default authSlice.reducer;
