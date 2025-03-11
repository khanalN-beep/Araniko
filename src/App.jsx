import React from "react";
import Myhome from "./components/Myhome";
import Section from "./components/Section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Contact from "./components/Pages/Contact";
import Galary from "./components/Pages/Galary";  {/* Using Galary.jsx here */}
import Home from "./components/Pages/Home";
import Lorem from "./components/Pages/Lorem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Myhome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/button" element={<Button />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lorem" element={<Lorem />} />
        <Route path="/galary" element={<Galary />} />
      </Routes>
    </Router>
  );
};

export default App;
