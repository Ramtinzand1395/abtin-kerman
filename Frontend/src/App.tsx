import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/Products/SingleProductPage";

const App: React.FC = () => {
  return (
    <div className="">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:product" element={<ProductsPage />} />
          <Route
            path="/product/:productName"
            element={<SingleProductPage />}
          />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;
