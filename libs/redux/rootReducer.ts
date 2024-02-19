import { combineReducers } from "redux";
import { apiSlice } from "./features/services/api";

export default combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer
});
