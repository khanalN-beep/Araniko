import React from "react";
import { useNavigate } from "react-router-dom";
import spark from "../../assets/spark.jpg";
import coffee from "../../assets/coffee.png";
import man from "../../assets/man.png";
import laptop from "../../assets/laptop.png";
import people from  "../../assets/manwomen.png";
import table from  "../../assets/table.png";

const Lorem = () => {
  const articles = [
    {
      id: 1,
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      image: laptop,
    },
    {
      id: 2,
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      image: laptop,
    },
    {
      id: 3,
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      image: people,
    },
    {
      id: 4,
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      image: table,
    },
  ];

  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/Button");
  };

  const click = () => {
    navigate("/Contact");
  };

  const tick = () => {
    navigate("/galary");
  };

  const homeclick = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-4">
          <img src={spark} alt="Araniko College Logo" className="h-18 w-80" />
        </div>

        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex gap-6 font-bold">
              <li >
                Home
              </li>
              <li onClick={homeclick} className="cursor-pointer">About Us</li>
              <li>Faculty</li>
              <li className="cursor-pointer">
                Gallery
              </li>
              <li onClick={click} className="cursor-pointer">
                Contact Us
              </li>
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
      <div className="max-w-6xl mx-auto p-4">
        <div className="w-full bg-purple-100 rounded-lg mb-8 overflow-hidden">
          <div className="flex flex-col md:flex-row p-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-2">Make better coffee ☕</h1>
              <p className="text-gray-500">why learn how to make coffee?</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={coffee}
                alt="People discussing coffee"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Featured Article */}

        <div className="w-full bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                {articles[0].title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {articles[0].description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-xs">
                  {articles[0].date}
                </span>
                <a href="#" className="text-sm text-gray-800 hover:underline">
                  Read more
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src={man}
                alt="Person on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {articles.slice(1, 4).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={article.image}
                alt="Blog thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-xs mb-4">
                  {article.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">{article.date}</span>
                  <a href="#" className="text-xs text-gray-800 hover:underline">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lorem Ipsum Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-teal-500 rounded-lg overflow-hidden p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">What is Lorem Ipsum?</h2>
            <p className="text-sm mb-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-white text-xs">May 20</span>
              <a href="#" className="text-sm text-white hover:underline">
                Read more
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={laptop}
              alt="Laptop on desk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 text-right">
          <button onClick={tick}  className="bg-teal-600 text-white py-2 px-4 rounded cursor-pointer">
            Load more
          </button>
        </div>
      </div>
    </>
  );
};

export default Lorem;
