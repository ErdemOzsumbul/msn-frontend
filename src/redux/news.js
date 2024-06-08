import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "news",
  initialState: {
    items: [],
  },
  reducers: {
    update(state, action) {
      state.items = action.payload;
    },
  },
});

export { actions as newsActions };
export { reducer as newsReducer };
