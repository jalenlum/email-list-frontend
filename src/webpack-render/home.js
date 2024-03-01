import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { HomePage } from "../pages/homePage";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<HomePage />);
