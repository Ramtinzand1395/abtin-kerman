import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MainLayout from "./layouts/MainLayout";
// import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/Products/SingleProductPage";
import DashboardLayout from "./layouts/DashboardLayout";
import UserInformation from "./components/dashboard/pages/UserInformation";
import Products from "./components/dashboard/pages/EditeAcountGame";
import AddGame from "./components/dashboard/pages/AddGame";
import Gallery from "./components/dashboard/pages/Gallery";
import Tags from "./components/dashboard/pages/Tags";
import ShopingCardPage from "./components/shopping card/ShopingCardPage";
import CreateProduct from "./components/dashboard/pages/CreateProduct";
import ProductPage from "./components/pages/ProductPage";
import CommentManneger from "./components/dashboard/pages/CommentManneger";
// import axios from "axios";

const App: React.FC = () => {
  // const [user, setuser] = useState(null);
  // const getUser = async () => {
  //   try {
  //     const url = " http://localhost:5000/auth/login/success";
  //     const { data } = await axios.get(url, { withCredentials: true });
  //     setuser(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(()=>{
  //   getUser();
  // },[])
  // console.log(user,"user")
  useEffect(() => {
    const card = localStorage.getItem("cardItems");

    console.log(card, "card");
  }, []);
  // localStorage.setItem("cardItems" , CardItems)

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
        {/* ! بعدل اسم مسیر ها و اسم کامپوننت ها به بازی تغغی بده */}
        {/* <Route
          path="/products/:product"
          element={
            <MainLayout>
              <ProductsPage />
            </MainLayout>
          }
        /> */}
        {/* <Route
          path="/product/:productName"
          element={
            <MainLayout>
              <SingleProductPage />
            </MainLayout>
          }
        /> */}
        <Route
          path="/accountgame/:gameId"
          element={
            <MainLayout>
              <SingleProductPage />
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
          path="/dashboard/product-management/:userId"
          element={
            <DashboardLayout>
              <Products />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/account-game-manneger/:userId"
          element={
            <DashboardLayout>
              <AddGame />
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
          path="/dashboard/create-product/:userId"
          element={
            <DashboardLayout>
              <CreateProduct />
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
      </Routes>
    </div>
  );
};

export default App;
