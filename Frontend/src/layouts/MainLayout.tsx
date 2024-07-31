import React from "react";
import HeaderContainer from "../components/header/HeaderContainer";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
