import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import rmcp_campus from "../assets/img/rmcp_campus.png";
import rmcp_logo from "../assets/img/rmcp_logo.png";

// import stud_add from "../assets/img/stud_add.";
const Hero = () => {
  const [years, setYears] = useState(0);

  useEffect(() => {
    const startYear = 2012;
    const currentYear = new Date().getFullYear();
    setYears(currentYear - startYear);
  }, []);
  return (
    <div className="relative">
      {/* Background Image with Filter */}
      <div className="absolute inset-0 z-0">
        <img
          src={rmcp_campus}
          alt="School Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-600/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex justify-center items-center text-center ">
        <div className="">
          <div className="flex flex-col col-reverse md:flex-row justify-between">
            <div className="flex-1 pl-4 flex flex-col justify-center">
              {/* Punch Line */}
              <h1 className="text-3xl md:text-4xl text-left font-bold text-gray-800 mb-6 mt-6 relative pl-4">
                <AcademicCapIcon className="absolute -top-12 -left-8 h-16 w-16 mx-auto text-orange-400 mb-6 -rotate-45" />
                Empowering Young <span className="text-orange-500">Minds,</span>{" "}
                for a Bright <span className="text-orange-500">Future.</span>
              </h1>

              {/* Context Paragraph */}
              <p className="text-md font-semibold md:text-lg text-left text-gray-900 mb-8">
                Welcome to our network of excellence, where we nurture young
                minds through innovation, character development, and academic
                rigor.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-left mt-8">
                <Link
                  to="/admissions/apply/primary"
                  className="bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg px-6 py-3 transition duration-300 flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  to="/infrastructure/overview"
                  className="bg-orange-400 text-white hover:bg-orange-500 font-medium rounded-lg px-6 py-3 transition duration-300"
                >
                  Virtual Tour
                </Link>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center mt-12 md:mt-auto">
              <img
                src={rmcp_logo}
                alt="3D Effect Image"
                className="transition duration-300 hover:scale-105 w-2/4 h-auto drop-shadow-[3px_6px_4px_theme(colors.orange.300)] hover:drop-shadow-[3px_6px_4px_theme(colors.blue.300)]"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-orange-600">
                {years}+
              </p>
              <p className="text-gray-900 text-sm md:text-base">
                Years of Excellence
              </p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-orange-600">
                98%
              </p>
              <p className="text-gray-900 text-sm md:text-base">
                Admission Acceptance
              </p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-orange-600">
                15:1
              </p>
              <p className="text-gray-900 text-sm md:text-base">
                Student-Teacher Ratio
              </p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-orange-600">
                20+
              </p>
              <p className="text-gray-900 text-sm md:text-base">
                Extracurricular Activities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="border-2 border-orange-400 rounded-full p-2 drop-shadow-md shadow-md">
          <svg
            className="w-6 h-6 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
