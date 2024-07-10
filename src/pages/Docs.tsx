import * as React from "react";
import ExampleComponent from "../components/ExampleComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createRoot } from "react-dom/client";

const Docs = () => {
  return (
    <>
      <Navbar />
      <div
        className="container text-left min-vh-100"
        style={{ fontFamily: "Arimo" }}
      >
        <div className="py-5">
          This is the documentation page
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
const root = document.getElementById("root");
createRoot(root).render(<Docs />);
