"use client";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { ToastProvider } from "./react-hot-toast";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <ToastProvider />
    </Provider>
  );
}
