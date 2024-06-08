import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "user",
  initialState: {
    name: null,
    surname: null,
    email: null,
    picture: null,
  },
  reducers: {
    login(state, action) {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
    },
    logout(state) {
      state.name = null;
      state.surname = null;
      state.email = null;
      state.picture = null;
    },
  },
});

export { actions as userActions };
export { reducer as userReducer };
