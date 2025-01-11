"use client";
import { Provider } from "react-redux";
import store from "@/app/store/store";
import { ToastContainer } from "react-toastify";

export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <><ToastContainer />
    <Provider store={store}>
      {children}
    </Provider></>
    
  );
}
