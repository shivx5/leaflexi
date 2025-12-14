import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Body from "../../Components/Body/Body";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../Routes/ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
