import React from "react";
import Navbar from "./Compnent/Navbar/Navbar";
import Card from "./Compnent/Card/Card";
import Home from "./Compnent/Home/Home";
import Singup from "./Compnent/Loginpages/Singup";
import Singin from "./Compnent/Loginpages/Singin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Compnent/Loginpages/Add";
import Category2 from "./Compnent/Pages/Category2";
import Category1 from "./Compnent/Pages/Category1";
import Footer from "./Compnent/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="singin" element={<Singin />} />
        <Route path="singup" element={<Singup />} />
        <Route path="card" element={<Card />} />
        <Route path="add" element={<Add />} />
        <Route path="PlantCare" element={<Category1 />} />
        <Route path="Houseplants" element={<Category2 />} />
      </Routes>
      <Footer/>
      {/* <Add/> */}
    </>
  );
}
export default App;
