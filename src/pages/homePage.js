import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return(
    <>
      <Navbar />

      <div className="container"></div>

      <Footer />
    </>
  );
};
