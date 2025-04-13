import React from "react";
import {
  BookOpen,
  Search,
  BookMarked,
  GraduationCap,
  Clock,
  Users,
  Bookmark,
  PencilRuler,
  Computer,
  HeadphonesIcon,
  BookText,
  CalendarDays,
  ListChecks,
} from "lucide-react";

const LibraryComponent = () => {
  const libraryFeatures = [
    {
      title: "Extensive Collection",
      description:
        "Diverse range of books, resources, and learning materials for different learning needs",
      icon: <BookText size={22} className="text-sky-600" />,
    },
    {
      title: "Adaptive Materials",
      description:
        "Specialized resources for students with various learning difficulties",
      icon: <PencilRuler size={22} className="text-sky-600" />,
    },
    {
      title: "Digital Resources",
      description: "E-books, audiobooks, and interactive learning software",
      icon: <Computer size={22} className="text-sky-600" />,
    },
    {
      title: "Audio Learning Station",
      description:
        "Dedicated stations for listening to educational audio content",
      icon: <HeadphonesIcon size={22} className="text-sky-600" />,
    },
  ];

  const libraryServices = [
    {
      title: "Guided Reading Sessions",
      description: "Personalized reading assistance with trained staff",
      icon: <BookOpen size={20} className="text-orange-500" />,
    },
    {
      title: "Research Support",
      description: "Help with finding and using appropriate research materials",
      icon: <Search size={20} className="text-orange-500" />,
    },
    {
      title: "Study Groups",
      description: "Facilitated group learning in a supportive environment",
      icon: <Users size={20} className="text-orange-500" />,
    },
    {
      title: "Borrowing Privileges",
      description:
        "Take home books and resources with extended borrowing periods",
      icon: <Bookmark size={20} className="text-orange-500" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 ">
      {/* Header */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">Learning Center</span>
          <span className="text-sky-600"> Library</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          A supportive space designed for diverse learning styles and needs
        </p>
      </div>

      {/* Library Overview */}
      <div className="bg-sky-50 rounded-lg p-6 mb-8 shadow-md">
        <div className="flex items-center mb-4">
          <BookMarked className="text-sky-600 mr-3" size={28} />
          <h3 className="text-2xl font-semibold text-sky-800">
            Library Overview
          </h3>
        </div>

        <p className="text-gray-700 mb-4">
          Our specialized library serves as a central resource hub for students
          with diverse learning needs. The environment is designed to be
          calming, accessible, and conducive to learning with adjustable
          lighting, comfortable seating, and quiet zones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start">
            <Clock className="text-sky-600 mt-1 mr-3" size={20} />
            <div>
              <h4 className="font-medium text-sky-800">Flexible Hours</h4>
              <p className="text-gray-600">
                Open throughout school hours with extended access during exam
                periods
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <GraduationCap className="text-sky-600 mt-1 mr-3" size={20} />
            <div>
              <h4 className="font-medium text-sky-800">Trained Staff</h4>
              <p className="text-gray-600">
                Librarians specialized in supporting diverse learning needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Library Features */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <ListChecks className="text-sky-600 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-sky-700">
            Library Features
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {libraryFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-sky-100 shadow-sm"
            >
              <div className="flex items-center mb-2">
                {feature.icon}
                <h4 className="font-medium text-sky-700 ml-2">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Library Services */}
      <div className="bg-orange-50 rounded-lg p-6 shadow-md mb-8">
        <div className="flex items-center mb-4">
          <BookOpen className="text-orange-500 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-orange-600">
            Library Services
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {libraryServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm flex items-start"
            >
              <div className="mr-3 mt-1">{service.icon}</div>
              <div>
                <h4 className="font-medium text-gray-800">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Library Schedule */}
      <div className="border border-sky-100 rounded-lg p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <CalendarDays className="text-sky-600 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-sky-700">
            Library Schedule
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-sky-700 mb-2">Regular Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-700">Monday - Friday:</span>
                <span className="text-gray-600">8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Saturday:</span>
                <span className="text-gray-600">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Sunday:</span>
                <span className="text-gray-600">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sky-700 mb-2">Special Services</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-700">Reading Groups:</span>
                <span className="text-gray-600">Tue & Thu, 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Research Help:</span>
                <span className="text-gray-600">
                  Mon-Fri, 10:00 AM - 2:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Digital Resources Help:</span>
                <span className="text-gray-600">Wed, 1:00 PM - 3:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryComponent;
