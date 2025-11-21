import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  role: "manager" | "customer" | null;
}

const initialState: UserState = {
  name: "",
  role: null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ name: string; role: "manager" | "customer" }>
    ) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
    }
  },
});

export const { login } = userAuthSlice.actions;
export default userAuthSlice.reducer;
