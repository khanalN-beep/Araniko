import React from "react";
import Team from "./Team";

const Journey = () => {
  return (
    <>
      <div className="flex h-100 mt-30 font-serif">
        <div className="w-1/2 bg-teal-600 p-8 flex flex-col justify-center ">
          <h2 className="text-white ml-20 text-3xl font-bold mb-2">
            Start your Learning
          </h2>
          <h2 className="text-white ml-20 text-2xl font-bold mb-6">
            Journey Today!
          </h2>

          <div className="flex gap-4 mt-4 ml-20 ">
            <button className="bg-gray-800 w-30 text-white py-2 px-6 rounded font-medium h-12 cursor-pointer hover:bg-gray-700">
              BBA
            </button>
            <button className="bg-white w-30 text-gray-800 py-2 px-6 rounded font-medium ml-2 cursor-pointer ">
              BCA
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-gray-900 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="bg-white w-120 rounded-lg p-4 text-gray-800 ml-20">
              <div className="flex items-start">
                <div className="bg-green-100 ml-5 mt-2 rounded-full p-3 mr-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 ml-8 text-3xl">
                    BBA @ Araniko
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 ml-8">
                    Bachelor of Business Administration deals with
                    <br /> Business Management.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white w-120  rounded-lg ml-20 p-4 text-gray-800">
              <div className="flex items-start">
                <div className="bg-green-100 ml-5 mt-2 rounded-full p-3 mr-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-3xl ml-8">
                    BCA @ Araniko
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 ml-8">
                    BCA is a new age degree course in the field of <br />
                    computer applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Team />
      </div>
    </>
  );
};

export default Journey;
