import React, { useState } from "react";
import {
  Newspaper,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Award,
  ExternalLink,
} from "lucide-react";

import press1Img from "../../assets/img/press_1.jpg";
import press2Img from "../../assets/img/press_2.jpg";
import press3Img from "../../assets/img/press_3.jpg";
import press4Img from "../../assets/img/press_4.jpg";
import press5Img from "../../assets/img/press_5.jpg";
import press6Img from "../../assets/img/press_6.jpg";

const CutOuts = () => {
  // State for the lightbox/modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample press coverage data
  // In a real implementation, you would replace placeholder images with actual press clippings
  const pressItems = [
    {
      id: 1,
      source: "Education Today",
      title: "Learning Center Recognized for Excellence in Special Education",
      date: "March 15, 2025",
      thumbnail: press1Img,
      fullImage: "/api/placeholder/800/600",
      alt: "Article about learning center's excellence award",
    },
    {
      id: 2,
      source: "The Daily Chronicle",
      title: "Innovative Methods Help Students Overcome Learning Challenges",
      date: "February 8, 2025",
      thumbnail: press2Img,
      fullImage: "/api/placeholder/800/600",
      alt: "Feature article on innovative teaching methods",
    },
    {
      id: 3,
      source: "Education Weekly",
      title: "Local Learning Center Sets New Standards for Inclusive Education",
      date: "January 22, 2025",
      thumbnail: press3Img,
      fullImage: "/api/placeholder/800/600",
      alt: "Article about inclusive education standards",
    },
    {
      id: 4,
      source: "City News",
      title:
        "Students with Learning Difficulties Thrive in Specialized Program",
      date: "December 10, 2024",
      thumbnail: press4Img,
      fullImage: "/api/placeholder/800/600",
      alt: "News feature about student success stories",
    },
    {
      id: 5,
      source: "Education Times",
      title: "Learning Center Celebrates 10 Years of Transforming Lives",
      date: "November 5, 2024",
      thumbnail: press5Img,
      fullImage: "/api/placeholder/800/600",
      alt: "Anniversary coverage article",
    },
    {
      id: 6,
      source: "School Spotlight Magazine",
      title: "Special Feature: A Day in the Life at the Learning Center",
      date: "October 18, 2024",
      thumbnail: press6Img,
      fullImage: "/api/placeholder/800/600",
      alt: "Magazine feature about daily activities",
    },
  ];

  // Handle opening the lightbox/modal
  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  // Handle closing the lightbox/modal
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 ">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">Press </span>
          <span className="text-sky-600"> Coverage</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Our learning center in the news and media
        </p>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-sky-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="relative cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-sky-900 bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink
                    className="text-white opacity-0 hover:opacity-100"
                    size={24}
                  />
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <Award className="text-orange-500 mr-2" size={16} />
                  <span className="text-orange-600 text-sm font-medium">
                    {item.source}
                  </span>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">{item.title}</h4>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="mr-1" size={14} />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox/Modal */}
      {/* {selectedImage && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative max-w-4xl mx-auto">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            <div className="bg-white p-4 rounded-lg">
              <img
                src={selectedImage.fullImage}
                alt={selectedImage.alt}
                className="max-h-screen object-contain"
              />

              <div className="mt-4">
                <h4 className="font-medium text-gray-800">
                  {selectedImage.title}
                </h4>
                <div className="flex justify-between mt-2">
                  <span className="text-orange-600 font-medium">
                    {selectedImage.source}
                  </span>
                  <span className="text-gray-500">{selectedImage.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CutOuts;
