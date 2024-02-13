import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const passwordsSlice = createSlice({
  name: "passwords",
  initialState,
  reducers: {
    // Action and reducer
    addPassword: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addPassword } = passwordsSlice.actions;
export default passwordsSlice.reducer;
