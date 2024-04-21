import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },
  reducers: {
    addUserInfo: (state, action) => {
      console.log(action.payload, "action payload");
      state.userInfo = action.payload;
    },

    removeUserInfo: (state) => {
      state.userInfo = null;
    },
  },
});

export const { addUserInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;
