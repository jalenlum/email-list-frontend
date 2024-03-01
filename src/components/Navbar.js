import React from "react";
import ReactDOM from "react-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark mb-4" style={{ backgroundColor: "#dc405c" }}>
      <div className="container">
        <a href="/" className="navbar-brand" style={{ fontSize: 30, fontWeight: 600 }}>Email List</a>
        <button className="navbar-toggler" data-bs-toggle="collapse"
          data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/index.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/docs.html" className="nav-link">Docs</a>
            </li>
            <li className="nav-item">
              <a href="/dashboard.html" className="nav-link">Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="/contact.html" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="justify-content-right">
        
      </div>
    </nav>
  );
};
