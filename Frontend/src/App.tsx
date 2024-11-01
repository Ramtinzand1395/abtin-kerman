import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import UserInformation from "./components/dashboard/pages/UserInformation";
import Tags from "./components/dashboard/pages/Tags";
import ShopingCardPage from "./components/shopping card/ShopingCardPage";
import CommentManneger from "./components/dashboard/pages/CommentManneger";
import Ckeditor from "./components/utils/editor/Ckeditor";
import ProductPage from "./components/pages/Products/product/ProductPage";
import AllProducts from "./components/pages/Products/product/AllProducts";
import AccountGame from "./components/pages/Products/AccountGame";
import AllAcountGames from "./components/pages/Products/AllAcountGames";
import ShopingInfo from "./components/shopping card/ShopingInfo";
import Orders from "./components/dashboard/pages/orderTable/Orders";
import ProductsManneger from "./components/dashboard/pages/productManneger/ProductsManneger";
import Users from "./components/dashboard/pages/Users";
import Gallery from "./components/dashboard/pages/gallery/Gallery";
import Pishkhan from "./components/dashboard/pages/user/Pishkhan";
import EditeUserInfo from "./components/dashboard/pages/user/EditeUserInfo";

const App: React.FC = () => {
  return (
    <div className="">
      <Routes>
        {/* Routes that use MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/games/:category"
          element={
            <MainLayout>
              <AllAcountGames />
            </MainLayout>
          }
        />
        <Route
          path="/accountgame/:gameId"
          element={
            <MainLayout>
              <AccountGame />
            </MainLayout>
          }
        />
        <Route
          path="/checkout/cart"
          element={
            <MainLayout>
              <ShopingCardPage />
            </MainLayout>
          }
        />
        <Route
          path="/checkout/cart/info"
          element={
            <MainLayout>
              <ShopingInfo />
            </MainLayout>
          }
        />
        {/* PRODUCT & PRODUCTS RPUTES */}
        <Route
          path="/products/:category"
          element={
            <MainLayout>
              <AllProducts />
            </MainLayout>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <MainLayout>
              <ProductPage />
            </MainLayout>
          }
        />
        {/* Route that doesn't use MainLayout */}
        <Route
          path="/dashboard/:userId"
          element={
            <DashboardLayout>
              <UserInformation />
            </DashboardLayout>
          }
        />
        <Route
          path="/user-manneger/:userId"
          element={
            <DashboardLayout>
              <Users />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/product-management/:userId"
          element={
            <DashboardLayout>
              <ProductsManneger />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/gallery/:userId"
          element={
            <DashboardLayout>
              <Gallery />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/tags/:userId"
          element={
            <DashboardLayout>
              <Tags />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/comment-manegment/:userId"
          element={
            <DashboardLayout>
              <CommentManneger />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/weblog/:userId"
          element={
            <DashboardLayout>
              <Ckeditor />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/orders/:userId"
          element={
            <DashboardLayout>
              <Orders />
            </DashboardLayout>
          }
        />
        {/* UsSER */}
        <Route
          path="/dashboard/userInfo/:userId"
          element={
            <DashboardLayout>
              <Pishkhan />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/editeUserInfo/:userId"
          element={
            <DashboardLayout>
              <EditeUserInfo />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
