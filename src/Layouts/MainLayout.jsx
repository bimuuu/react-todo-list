import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="px-4 md:px-4 pt-12 pb-24 w-full xl:w-[45%] space-y-6">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ToastContainer transition={Slide} />
    </>
  );
};

export default MainLayout;
