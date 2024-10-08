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
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShopingcardProvider>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="776628364639-ldnc8nnj8t0mfgrqldcijddfeaip3se8.apps.googleusercontent.com">
          <App />
          <ToastContainer />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ShopingcardProvider>
  </React.StrictMode>
);
