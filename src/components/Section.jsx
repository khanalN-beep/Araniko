import React from "react";
import { IoBookmark } from "react-icons/io5";
import About from "../components/About";

const Section = () => {
  const stats = [
    { value: 2000, label: "Alumni", highlighted: false },
    { value: 25, label: "Years of Excellence", highlighted: true },
    { value: 3000, label: "Books", highlighted: false },
    { value: 70, label: "Computers", highlighted: false },
  ];

  return (
    <>
      <div className="container mx-auto px-4 mt-40 ">
        <div className="mb-8">
          <h1 className="text-center text-2xl font-bold">
            A Culture of Collaboration that Drives <br /> Innovative Discoveries
          </h1>
        </div>

        <div className="flex justify-center space-x-4 border-none text ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
              text-center 
              p-4 
              rounded-lg 
              shadow-md
              w-70
              h-60 
              flex 
              flex-col 
              justify-center 
              items-center
              cursor-pointer
              transition duration-300
              mt-12
              hover:text-white

              ${
                stat.highlighted
                  ? "bg-teal-600 text-white"
                  : "bg-white hover:bg-teal-600 hover:text-white"
              }
            `}
            >
              <div className="mb-2">
                <IoBookmark size={60} />
              </div>
              <div>
                <h2
                  className={`text-3xl font-bold ${
                    stat.highlighted ? "text-white"  : "text-black hover:text-white"
                  }`}
                >
                  {stat.value}
                </h2>
                <p
                  className={`text-sm ${
                    stat.highlighted ? "text-white opacity-80" : "text-black hover:text-white"
                  }`}   
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-30">
        {" "}
        <About />
      </div>
    </>
  );
};

export default Section;
