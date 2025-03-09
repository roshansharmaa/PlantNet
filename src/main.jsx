import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Usercontext from "./Compnent/Context/Usercontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Usercontext>
        <App />
      </Usercontext>
    </BrowserRouter>
  </StrictMode>
);
