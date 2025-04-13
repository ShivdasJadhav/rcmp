import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  ChevronDown,
  Download,
  Eye,
  FileText,
  Search,
} from "lucide-react";

import mag_cover1 from "../../assets/img/mag_cover1.jpg";
import mag_cover2 from "../../assets/img/mag_cover2.jpg";
import mag_cover3 from "../../assets/img/mag_cover3.jpg";
import mag_cover4 from "../../assets/img/mag_cover4.jpg";
import mag_cover5 from "../../assets/img/mag_cover5.jpg";
import mag_cover6 from "../../assets/img/mag_cover6.jpg";

const Magazines = () => {
  // Sample magazine data (replace with actual data in production)
  const currentMagazines = [
    {
      id: 1,
      title: "Spring Edition",
      coverImage: mag_cover1,
      pdfUrl: "/magazines/magazine (1).pdf",
      month: "March",
      description: "Focus on literacy skills development",
    },
    {
      id: 2,
      title: "Winter Special",
      coverImage: mag_cover2,
      pdfUrl: "/magazines/magazine (2).pdf",
      month: "January",
      description: "New year learning strategies",
    },
    {
      id: 3,
      title: "Fall Edition",
      coverImage: mag_cover3,
      pdfUrl: "/magazines/magazine (3).pdf",
      month: "October",
      description: "STEM activities for diverse learners",
    },
    {
      id: 4,
      title: "Summer Edition",
      coverImage: mag_cover4,
      pdfUrl: "/magazines/magazine (4).pdf",
      month: "July",
      description: "Outdoor learning approaches",
    },
    {
      id: 5,
      title: "Summer Edition",
      coverImage: mag_cover5,
      pdfUrl: "/magazines/magazine (5).pdf",
      month: "July",
      description: "Outdoor learning approaches",
    },
    {
      id: 6,
      title: "Summer Edition",
      coverImage: mag_cover6,
      pdfUrl: "/magazines/magazine (6).pdf",
      month: "July",
      description: "Outdoor learning approaches",
    },
  ];

  // Get magazines for the selected year

  // Function to handle opening the PDF
  const openMagazinePdf = (magazine) => {
    // In a real implementation, this would open the PDF in a new tab or viewer
    console.log(`Opening PDF for: ${magazine.title}`);
    window.open(magazine.pdfUrl, "_blank");
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">E-</span>
          <span className="text-sky-600"> Magazine</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore our quarterly publications
        </p>
      </div>

      {/* Magazine Grid */}
      {currentMagazines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentMagazines.map((magazine) => (
            <div
              key={magazine.id}
              className="bg-white border border-sky-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                {/* Magazine Cover */}
                <img
                  src={magazine.coverImage}
                  alt={`${magazine.title} cover`}
                  className="w-full h-64 object-cover"
                />

                {/* Overlay for hover effects */}
                <div className="absolute inset-0 bg-sky-900 bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                  <button
                    onClick={() => openMagazinePdf(magazine)}
                    className="bg-white text-sky-700 hover:bg-sky-50 font-medium py-2 px-4 rounded-lg flex items-center mb-2"
                  >
                    <Eye size={16} className="mr-2" />
                    View
                  </button>

                  <button
                    onClick={() => openMagazinePdf(magazine)}
                    className="bg-orange-500 text-white hover:bg-orange-600 font-medium py-2 px-4 rounded-lg flex items-center"
                  >
                    <Download size={16} className="mr-2" />
                    Download
                  </button>
                </div>

                {/* Month indicator */}
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {magazine.month}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <BookOpen className="text-sky-600 mr-2" size={16} />
                  <h4 className="font-medium text-gray-800">
                    {magazine.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">{magazine.description}</p>

                <div className="mt-3 flex items-center text-sky-600 text-sm font-medium">
                  <FileText size={14} className="mr-1" />
                  <span>PDF Magazine</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-sky-50 p-8 rounded-lg text-center mb-8">
          <FileText className="text-sky-400 mx-auto mb-3" size={32} />
          <h3 className="text-lg font-medium text-gray-800 mb-1">
            No Magazines Available
          </h3>
          <p className="text-gray-600">
            There are no magazines available for the selected year.
          </p>
        </div>
      )}

      {/* Archive Information */}
      <div className="bg-orange-50 rounded-lg p-6 shadow-md">
        <div className="flex items-center mb-4">
          <Calendar className="text-orange-500 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-orange-600">
            Magazine Archive
          </h3>
        </div>

        <p className="text-gray-700 mb-4">
          Our magazine archive contains{" "}
          {currentMagazines.length} issues dating back from
          2012. Each issue highlights student achievements, teaching
          methodologies, and insights into specialized learning approaches.
        </p>

        <div className="bg-white p-4 rounded-lg border-l-4 border-sky-500">
          <p className="text-gray-700">
            <span className="font-medium">Need Earlier Editions?</span> For
            magazine editions prior to 2012 or for special print copies, please
            contact our administration office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
