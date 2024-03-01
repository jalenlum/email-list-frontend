import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const DashboardPage = () => {
  return(
    <>
      <Navbar />

      <div className="container"></div>

      <Footer />
    </>
  );
};
