import * as React from "react";
const { useState } = React;

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [username, setUsername] = useState("jalenlum");

  const signIn = () => {
    setIsSignedIn(true);
    setUsername("JalenLum");
  };

  const logOut = () => {
    setIsSignedIn(false);
    setUsername("");
    // Implement actual logout logic here
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom"
        style={{ fontFamily: "Arimo", fontSize: 14, fontWeight: 700 }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="../../project/index.html" style={{ fontSize: 18 }}>
            Email List
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link mx-2" href="../../project/index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="../../project/docs.html">
                  Docs
                </a>
              </li>
              {isSignedIn && (
                <>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#!">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#!">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {username}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                      style={{ fontSize: 14 }}
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          Settings
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!" onClick={logOut}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              {!isSignedIn && (
                <>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#!">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item ms-3">
                    <button
                      className="btn btn-success shadow"
                      onClick={signIn}
                      style={{ fontSize: 12, fontWeight: 700 }}
                    >
                      Sign in
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
