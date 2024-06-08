import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userReducer as user } from "./user";
import { newsReducer as news } from "./news";

const reducer = combineReducers({
  user,
  news,
});

export { userActions } from "./user";
export { newsActions } from "./news";

export default configureStore({
  reducer,
});
