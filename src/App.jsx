import React from "react";
import Myhome from "./components/Myhome";
import Section from "./components/Section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Contact from "./components/Pages/Contact";
import Galary from "./components/Pages/Galary";
import Home from "./components/Pages/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Myhome />} />
        <Route path="/section" element={<Section />} />
        <Route path="/button" element={<Button />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/galary" element={<Galary/>} />  
        <Route path="/home" element={<Home/>} />  
      </Routes>
    </Router>
  );
};

export default App;