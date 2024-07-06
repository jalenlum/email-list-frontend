import * as React from "react";
import ExampleComponent from "../components/ExampleComponent";
import Navbar from "../components/Navbar";
import { createRoot } from "react-dom/client";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="container text-left">
        This is the index page.
        <ExampleComponent />
      </div>
    </>
  );
};

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);