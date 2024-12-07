import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ShopingcardProvider } from "./components/context/ShopingCard.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShopingcardProvider>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="65301995612-4np5jk542657v47pj3n0kgma1o0h2o4p.apps.googleusercontent.com">
          <Provider store={store}>
            <App />
          </Provider>
          <ToastContainer />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ShopingcardProvider>
  </React.StrictMode>
);
