import React from "react";
import firstpic from "../../assets/firstpi.png";
import Secondpic from "../../assets/second.png";
import thirdpic from "../../assets/third.png";
import spark from "../../assets/spark.jpg";
import { useNavigate } from "react-router-dom";

const TeamPage = () => {
  const navigate = useNavigate();

  // Navigation functions
  const handelClick = () => {
    navigate("/Button");
  };

  const click = () => {
    navigate("/Contact");
  };

  const tick = () => {
    navigate("/Lorem");
  };

  const homeclick = () => {
    navigate("/home");
  };

  // Team data
  const adminTeam = [
    {
      name: "YAVNIKA GARG",
      title: "Project Associate, 3 year",
      image: firstpic,
      stars: 3,
    },
    {
      name: "GOURANSHI CHOUDHARY",
      title: "Chief of Design, 12 year",
      image: Secondpic,
      stars: 3,
    },
    {
      name: "KIMAYA PATIL",
      title: "Project Lead, 11 year",
      image: thirdpic,
      stars: 3,
    },
  ];

  const professorTeam = [
    {
      name: "YAVNIKA GARG",
      title: "Project Associate, 3 year",
      image: firstpic,
      stars: 3,
    },
    {
      name: "GOURANSHI CHOUDHARY",
      title: "Chief of Design, 12 year",
      image: Secondpic,
      stars: 3,
    },
    {
      name: "KIMAYA PATIL",
      title: "Project Lead, 11 year",
      image: thirdpic,
      stars: 3,
    },
    {
      name: "YAVNIKA GARG",
      title: "Project Associate, 3 year",
      image: firstpic,
      stars: 3,
    },
    {
      name: "GOURANSHI CHOUDHARY",
      title: "Chief of Design, 12 year",
      image: Secondpic,
      stars: 3,
    },
    {
      name: "KIMAYA PATIL",
      title: "Project Lead, 11 year",
      image: thirdpic,
      stars: 3,
    },
  ];

  const TeamMemberCard = ({ member }) => (
    <div className="flex flex-col items-center">
      <div className="w-full h-40 bg-teal-600 flex justify-center relative mb-2">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-sm text-center">{member.name}</h3>
      <p className="text-xs text-gray-600 text-center">{member.title}</p>
      <div className="flex mt-1 justify-center">
        {[...Array(member.stars)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current mx-1"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    </div>
  );

  const TeamSection = ({ title, members }) => (
    <div className="mb-10">
      <h2 className="text-lg font-medium mb-6">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-4">
            <img src={spark} alt="Araniko College Logo" className="h-18 w-80" />
          </div>

          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex gap-6 font-bold">
                <li>Home</li>
                <li onClick={homeclick} className="cursor-pointer">
                  About Us
                </li>
                <li>Faculty</li>
                <li onClick={tick} className="cursor-pointer">
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

        {/* Banner Section */}
        <div className="w-full bg-teal-600 text-white p-8">
          <h1 className="text-2xl font-bold ml-4">MEET THE TEAM</h1>
          <p className="ml-4 mt-2 text-sm">
            Get to know the developers who designed behind the website!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto py-8 px-4">
          <p className="text-gray-700 leading-relaxed mb-8">
            It is a general belief that a french change is a big task and a very
            difficult thing to achieve. However with a little hard work and
            focus it is possible. The makes opportunity for changing your future
            is to get a good CGPA. For this, think about vision regularly.
            Though the night seems tedious and boring, it has its benefits. It
            helps prevent a last-minute rush when exams are near. Severely
            making proper notes is also important.
          </p>

          <TeamSection title="Admin" members={adminTeam} />
          <TeamSection title="Professor" members={professorTeam} />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div>
          <div className="bg-teal-600 text-white py-10">
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Quick Access</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        BBA Course
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        BCA Course
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        Our Alumni
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        Photo Gallery
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        Visitors
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Student Corner</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        Youtube Channel
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        Online Resources
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        Results - KUD
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-200">
                        Notifications
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
                  <ul className="space-y-2">
                    <li>+977-01-5522007</li>
                    <li>araniko@gmail.com</li>
                    <li>Bhanimandal-4 Lalitpur</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Social Media</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center hover:text-gray-200"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.3,10.2h-4.2V7.1c0-1,0.7-1.3,1.2-1.3h2.9V2.1L13.8,2c-4.4,0-5.3,3.2-5.3,5.3v2.9H5.7v4.4h2.9V22h5.5v-7.4h3.7L18.3,10.2z" />
                        </svg>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center hover:text-gray-200"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.6,4.8c-0.9,0.4-1.8,0.6-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.3,4.1,6.3,1.7,3.2C1.2,4,1,4.9,1,5.9c0,1.7,0.9,3.2,2.2,4c-0.8,0-1.6-0.2-2.2-0.6v0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.1,6.6,22.9,5.7,23.6,4.8z" />
                        </svg>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center hover:text-gray-200"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2c-2.7,0-3,0-4.1,0.1c-1.1,0-1.8,0.2-2.4,0.5C4.8,2.8,4.3,3.2,3.8,3.7C3.3,4.2,2.9,4.8,2.6,5.4C2.4,6,2.2,6.8,2.1,7.9C2.1,9,2,9.3,2,12s0,3,0.1,4.1c0,1.1,0.2,1.8,0.5,2.4C2.8,19.2,3.2,19.7,3.7,20.2c0.5,0.5,1.1,0.9,1.7,1.2c0.6,0.2,1.4,0.4,2.4,0.5C9,21.9,9.3,22,12,22s3,0,4.1-0.1c1.1,0,1.8-0.2,2.4-0.5c0.6-0.2,1.2-0.7,1.7-1.2c0.5-0.5,0.9-1.1,1.2-1.7c0.2-0.6,0.4-1.4,0.5-2.4C21.9,15,22,14.7,22,12s0-3-0.1-4.1c0-1.1-0.2-1.8-0.5-2.4c-0.2-0.6-0.7-1.2-1.2-1.7c-0.5-0.5-1.1-0.9-1.7-1.2c-0.6-0.2-1.4-0.4-2.4-0.5C15,2.1,14.7,2,12,2zM12,3.8c2.7,0,3,0,4,0.1c1,0,1.5,0.2,1.8,0.3c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,1c0.2,0.3,0.3,0.8,0.3,1.8c0,1,0.1,1.3,0.1,4s0,3-0.1,4c0,1-0.2,1.5-0.3,1.8c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.6,0.5-1,0.7c-0.3,0.2-0.8,0.3-1.8,0.3c-1,0-1.3,0.1-4,0.1s-3,0-4-0.1c-1,0-1.5-0.2-1.8-0.3c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.3-0.3-0.8-0.3-1.8c0-1-0.1-1.3-0.1-4s0-3,0.1-4c0-1,0.2-1.5,0.3-1.8c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.6-0.5,1-0.7c0.3-0.2,0.8-0.3,1.8-0.3C9,3.8,9.3,3.8,12,3.8zM12,6.9c-2.8,0-5.1,2.3-5.1,5.1s2.3,5.1,5.1,5.1s5.1-2.3,5.1-5.1S14.8,6.9,12,6.9zM12,15.3c-1.8,0-3.3-1.5-3.3-3.3S10.2,8.7,12,8.7s3.3,1.5,3.3,3.3S13.8,15.3,12,15.3zM17.3,6.7c0,0.7-0.5,1.2-1.2,1.2c-0.7,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2C16.8,5.5,17.3,6,17.3,6.7z" />
                        </svg>
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center hover:text-gray-200"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.7,5.3c-0.2-0.8-0.8-1.4-1.6-1.6C16.5,3.3,12,3.3,12,3.3s-4.5,0-6.1,0.4C5.1,3.9,4.5,4.5,4.3,5.3C3.9,6.9,3.9,10,3.9,10s0,3.1,0.4,4.7c0.2,0.8,0.8,1.4,1.6,1.6C7.5,16.7,12,16.7,12,16.7s4.5,0,6.1-0.4c0.8-0.2,1.4-0.8,1.6-1.6c0.4-1.6,0.4-4.7,0.4-4.7S20.1,6.9,19.7,5.3z M10,12.5V7.5l4.1,2.5L10,12.5z" />
                        </svg>
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TeamPage;
