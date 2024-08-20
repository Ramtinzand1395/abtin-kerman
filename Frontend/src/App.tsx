import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MainLayout from "./layouts/MainLayout";
import Login_register from "./components/login/Login_register";

const App: React.FC = () => {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login_register />} />
      </Routes>
    </div>
  );
};

export default App;
