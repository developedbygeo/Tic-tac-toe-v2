import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { notification: null },
  reducers: {
    showNotification: (state, action) => {
      state.notification = action.payload;
    }
  }
});

export const { showNotification } = uiSlice.actions;
export default uiSlice.reducer;
