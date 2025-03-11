import React from "react";
import ground from "../assets/ground.jpg";
import Section from "./Section";
import { useNavigate } from "react-router-dom";
import spark from"../assets/spark.jpg"
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Lorem from "./Pages/Lorem";


const Myhome = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/Button");
  };

  const click = () =>{
    navigate("/Contact");
  }

  const tick = () =>{
    navigate("/lorem");
  }

  const homeclick = () =>{
    navigate("/home")
  }

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-4">
            <img
              src={spark}
              alt="Araniko College Logo"
              className="h-22 w-80"
            />
          </div>

          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex gap-6 font-bold">
                <li >Home</li>
                <li onClick={homeclick} className="cursor-pointer">About Us</li>
                <li>Faculty</li>
                <li onClick={tick} className="cursor-pointer">Gallery</li>
                <li onClick={click} className="cursor-pointer">Contact Us</li>
              </ul>
            </nav>
          </div>
          <button
            onClick={handelClick}
            className="px-4 py-2 rounded bg-[rgb(21,50,67)] text-white cursor-pointer hover:bg-[rgb(20,40,57)]"
          >
            Login
          </button>
        </div>

        <div className="relative w-full h-[70vh]">
          <img
            src={ground}
            alt="Araniko College Campus"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>

        <div className="flex justify-around items-center py-8 bg-[#B5FFE1]">
          <div>
            <span className="font-bold mr-4 bg-primary-color">
              Announcements:
            </span>
            <span>Admissions Open for 2025 | Scholarship 2025</span>
          </div>
          <button className="px-4 py-2 rounded bg-teal-600 text-white">
            Prospectus
          </button>
        </div>
      </div>
      <Section />
    </>
  );
};

export default Myhome;
