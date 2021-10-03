import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
    roomName: null,
  },
  reducers: {
    setRoomInfo: (state, action) => {
      state.roomId = action.payload.roomId;
      state.roomName = action.payload.roomName;
    },
  },
});

export const { setRoomInfo } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;
export const selectRoomName = (state) => state.app.roomName;

export default appSlice.reducer;
