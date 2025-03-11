import React from "react";
import Footer from "./Footer";
import second from "../assets/students.png";
import second2 from "../assets/students2.png";
import second3 from "../assets/second3.png";
import stage from "../assets/stage.png";
import yoga from "../assets/yoga.png";
import tree from "../assets/tree.png";





const Images = () => {
  return (
    <>
       <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h3 className="text-teal-600 font-medium mb-1">Our Gallery</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Every Photo has a Story</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative rounded-lg overflow-hidden border-2 border-blue-100 shadow-md lg:col-span-1 row-span-2 h-full">
            <img 
              src= {tree}
              alt="Students playing sports on a track" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-xl font-medium">Afforestation</p>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden border-2 border-blue-100 shadow-md">
            <img 
              src= {second2}
              alt="Students in library" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="relative rounded-lg overflow-hidden border-2 border-blue-100 shadow-md">
            <img 
               src= {second} 
              alt="Students in conference" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="relative rounded-lg overflow-hidden border-2 border-blue-100 shadow-md">
            <img 
                src= {second3} 
              alt="Inauguration ceremony" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden border-2 border-blue-100 shadow-md">
            <img 
              src= {second3}  
              alt="Award ceremony" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-teal-600 font-medium mb-1">Our Extra Curriculum</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Events & Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="relative rounded-lg overflow-hidden border-2 border-blue-100 shadow-md">
            <img 
              src={stage}  
              alt="National conference" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-xl font-medium text-center">One Day National Conference</p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden border-2 border-blue-100 shadow-md">
            <img 
              src={yoga} 
              alt="International yoga day" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-xl font-medium text-center">International Yoga Day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default Images;
