import * as React from "react";
import ExampleComponent from "../components/ExampleComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createRoot } from "react-dom/client";

const Index = () => {
  return (
    <>
      <Navbar />
      <div
        className="container text-left min-vh-100"
        style={{ fontFamily: "Arimo" }}
      >
        <div
          className="row justify-content-center pt-5"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div className="col-5 text-center pt-5 fw-bold">
            Streamline your email management with Email List API, an all-in-one
            solution for collecting and organizing email data. Start your
            project with robust features.
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-5 text-center">
            <button
              className="btn btn-success border mx-1 fw-bold shadow"
              data-aos="fade-up"
              data-aos-delay="1600"
              data-aos-duration="1500"
              style={{ fontSize: 14, width: 160 }}
            >
              Get Started
            </button>
            <button
              className="btn btn-light border mx-1 fw-bold shadow"
              data-aos="fade-up"
              data-aos-delay="1650"
              data-aos-duration="1500"
              style={{ fontSize: 14, width: 160 }}
            >
              <i className="bi bi-book"></i> Documentation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);
