import * as React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createRoot } from "react-dom/client";

const SignIn: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://email-list-0187bfa72de5.herokuapp.com/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputName,
            password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sign in. Please check your credentials.");
      }

      const data = await response.json();
      console.log("Sign in successful:", data);
      localStorage.setItem("authToken", data.token); // Store the token in localStorage
      window.location.href = "./index.html";
    } catch (error: any) {
      setError(error.message);
      console.error("Sign in error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="container text-left min-vh-100"
        style={{ fontFamily: "Arimo" }}
      >
        <form onSubmit={handleSignIn}>
          <h2>Sign In</h2>
          <label>
            Username or Email:
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign In</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
const root = document.getElementById("root");
createRoot(root).render(<SignIn />);
