import React, { useState } from "react";
import lala from "../assets/lala.png";
import women from "../assets/women.png";
import aijiz from "../assets/aijiz.png";
import boy from "../assets/boy.png";
import Footer from "./Footer";
import girl1 from "../assets/girl1.png";



const Team = () => {
  const [activeTeamSlide, setActiveTeamSlide] = useState(0);
  const [activeTestimonialSlide, setActiveTestimonialSlide] = useState(0);

  const teamMembers = [
    {
      name: "Irshad Huligol",
      title: "Assistant Professor",
      qualifications: "MA, B.Ed, PGDBA",
      image: lala,
    },
    {
      name: "Neelufar Gadiwan",
      title: "Assistant Professor",
      qualifications: "MBA",
      image: women,
    },
    {
      name: "Aijaz Kittur",
      title: "Assistant Professor",
      qualifications: "MCA, PGDCA",
      image: aijiz,
    },
    {
      name: "Dr. Sajjad Parry",
      title: "Assistant Professor",
      qualifications: "MBA, Ph.D, KSET",
      image: boy,
    },
  ];

  const testimonials = [
    {
      quote:
        "This College was a learning and transforming academy in all perspective be it studies, co-curricular activities, always supporting lectures. I wish many more batches grow up from Anjuta and make Anjuta proud for sharing knowledge and transforming students.",
      name: "Prachen Ghale",
      title: "Senior Software Engineer, HE Nepal",
      image: girl1,
    },
  ];

  const handlePrevTeam = () => {
    setActiveTeamSlide((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  const handleNextTeam = () => {
    setActiveTeamSlide((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 mt-24">
        {/* Instructors Section */}
        <div className="mb-16">
          <div className="text-teal-600 font-medium mb-2">Our Instructors</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Meet The Team
          </h2>

          <div className="relative">
            {/* Team Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ${
                    index === activeTeamSlide
                      ? "scale-105 shadow-xl"
                      : "scale-100"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">{member.title}</p>
                    <p className="text-gray-500 text-xs">
                      {member.qualifications}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevTeam}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNextTeam}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTeamSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeTeamSlide ? "bg-teal-500 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="md:col-span-1">
            <div className="text-teal-600 font-medium mb-2">
              Stories that Speak
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Truth</h2>
            <p className="text-gray-600 text-sm">
              What our students and parents say about our Institute
            </p>

            {/* Navigation Buttons */}
            <div className="flex space-x-2 mt-6">
              <button
                onClick={handlePrevTestimonial}
                className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNextTestimonial}
                className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="md:col-span-2 bg-white rounded-lg border p-8 relative shadow-lg">
            <div className="text-6xl font-serif text-teal-500 absolute top-4 left-4">
              "
            </div>
            <div className="pt-8">
              <p className="text-gray-700 text-lg mb-6">
                {testimonials[activeTestimonialSlide].quote}
              </p>

              <div className="flex items-center">
                <img
                  src={testimonials[activeTestimonialSlide].image}
                  alt={testimonials[activeTestimonialSlide].name}
                  className="h-14 w-14 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-gray-800">
                    {testimonials[activeTestimonialSlide].name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeTestimonialSlide].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonialSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === activeTestimonialSlide
                  ? "bg-teal-500 w-6"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Team;
