import React from "react";
import Team from "./Team";

const Journey = () => {
  return (
    <>
      <div className="flex h-64 mt-30">
        <div className="w-1/2 bg-teal-600 p-8 flex flex-col justify-center">
          <h2 className="text-white text-2xl font-bold mb-2">
            Start your Learning
          </h2>
          <h2 className="text-white text-2xl font-bold mb-6">Journey Today!</h2>

          <div className="flex gap-4 mt-4">
            <button className="bg-gray-800 text-white py-2 px-6 rounded font-medium">
              BBA
            </button>
            <button className="bg-white text-gray-800 py-2 px-6 rounded font-medium">
              BCA
            </button>
          </div>
        </div>

        {/* Right panel - dark blue background */}
        <div className="w-1/2 bg-gray-900 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-4 text-gray-800">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                  <h3 className="font-bold text-gray-800">BBA @ Araniko</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Bachelor of Business Administration deals with Business
                    Management.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-4 text-gray-800">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                  <h3 className="font-bold text-gray-800">BCA @ Araniko</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    BCA is a new age degree course in the field of computer
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Team/>
      </div>
    </>
  );
};

export default Journey;
