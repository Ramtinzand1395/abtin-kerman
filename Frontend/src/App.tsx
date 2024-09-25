import React  from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/Products/SingleProductPage";
import DashboardLayout from "./layouts/DashboardLayout";
import UserInformation from "./components/dashboard/pages/UserInformation";
import Products from "./components/dashboard/pages/Products";
import AddGame from "./components/dashboard/pages/AddGame";
import Gallery from "./components/dashboard/pages/Gallery";
import Tags from "./components/dashboard/pages/Tags";
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
          path="/products/:product"
          element={
            <MainLayout>
              <ProductsPage />
            </MainLayout>
          }
        />
        <Route
          path="/product/:productName"
          element={
            <MainLayout>
              <SingleProductPage />
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
      </Routes>
    </div>
  );
};

export default App;
