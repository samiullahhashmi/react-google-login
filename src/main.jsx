import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import Demo from "./Demo.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="314183206731-jgftll2ova7c8btukpeujugp8j6p13q3.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/demo" element={<Demo />} />{" "}
          {/* Define the route for Demo */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
    ;
  </StrictMode>
);
