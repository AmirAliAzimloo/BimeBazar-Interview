import { configureStore } from "@reduxjs/toolkit";

import reducer from "./rootReducer";
import rootMiddleWare from "./rootMiddleWare";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(rootMiddleWare),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
