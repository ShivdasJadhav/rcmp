import React from "react";
import {
  Camera,
  Megaphone,
  ShieldAlert,
  Zap,
  Building,
  PenTool,
  FlaskConical,
  ShieldCheck,
  AlertCircle,
  Volleyball,
  Footprints,
  Flame,
  BatteryPlus,
} from "lucide-react";

const Infrastructure = () => {
  const facilities = [
    {
      title: "Classrooms",
      description:
        "Modern, well-equipped classrooms designed for optimal learning experiences",
      icon: <Building size={24} className="text-sky-600" />,
    },
    {
      title: "Activity Rooms",
      description:
        "Dedicated spaces for therapeutic and developmental activities",
      icon: <PenTool size={24} className="text-sky-600" />,
    },
    {
      title: "State-of-the-Art Labs",
      description:
        "Advanced laboratories equipped with the latest educational technology",
      icon: <FlaskConical size={24} className="text-sky-600" />,
    },
  ];

  const securityFeatures = [
    {
      title: "CCTV Surveillance",
      description: "24/7 monitoring throughout the campus",
      icon: <Camera size={22} className="text-orange-500" />,
    },
    {
      title: "PA System",
      description:
        "Campus-wide announcement system for emergencies and communications",
      icon: <Megaphone size={22} className="text-orange-500" />,
    },
    {
      title: "Corridor Cameras",
      description:
        "Strategic placement of cameras in all corridors for enhanced security",
      icon: <ShieldCheck size={22} className="text-orange-500" />,
    },
    {
      title: "Fire-fighting & Alarm Systems",
      description: "Comprehensive fire safety protocols and equipment",
      icon: <Flame size={22} className="text-orange-500" />,
    },
    {
      title: "Power Backup",
      description: "Uninterrupted power supply for all critical systems",
      icon: <Zap size={22} className="text-orange-500" />,
    },
  ];

  const sportsFacilities = [
    {
      name: "Cricket",
      icon: <Volleyball size={16} className="text-sky-500" />,
    },
    {
      name: "Basketball",
      icon: <Volleyball size={16} className="text-sky-500" />,
    },
    {
      name: "Football",
      icon: <Volleyball size={16} className="text-sky-500" />,
    },
    {
      name: "Kho-Kho",
      icon: <Footprints size={16} className="text-sky-500" />,
    },
    { name: "Kabaddi", icon: <Volleyball size={16} className="text-sky-500" /> },
    {
      name: "Taekwondo",
      icon: <ShieldAlert size={16} className="text-sky-500" />,
    },
    {
      name: "Cycling",
      icon: <BatteryPlus size={16} className="text-sky-500" />,
    },
  ];

  return (
    <div className="max-w-6xl  mx-auto bg-white">
      {/* Header */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">Our</span>
          <span className="text-sky-600"> Infrastructure</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Designed to provide a safe, supportive and enriching learning
          environment
        </p>
      </div>

      {/* Main Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-sky-50 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              {facility.icon}
              <h3 className="text-xl font-semibold text-sky-700 ml-2">
                {facility.title}
              </h3>
            </div>
            <p className="text-gray-600">{facility.description}</p>
          </div>
        ))}
      </div>

      {/* Security Features */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <AlertCircle className="text-orange-500 mr-2" size={24} />
          <h3 className="text-xl font-semibold text-orange-600">
            Safety & Security Features
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-sky-100 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-2">
                {feature.icon}
                <h4 className="font-medium text-gray-800 ml-2">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Facilities */}
      <div className="bg-orange-50 rounded-lg p-6 shadow-md">
        <div className="flex items-center mb-4">
          <Volleyball className="text-orange-500 mr-2" size={24} />
          <h3 className="text-xl font-semibold text-orange-600">
            Sports Facilities
          </h3>
        </div>

        <p className="text-gray-700 mb-4">
          We believe physical activity is essential for holistic development.
          Our campus offers facilities for various sports activities:
        </p>

        <div className="flex flex-wrap gap-3">
          {sportsFacilities.map((sport, index) => (
            <div
              key={index}
              className="bg-white px-4 py-2 rounded-full flex items-center shadow-sm"
            >
              {sport.icon}
              <span className="ml-2 text-gray-700">{sport.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-sky-50 rounded-lg border-l-4 border-sky-500">
          <p className="text-gray-700">
            <span className="font-medium">Our Philosophy:</span> We integrate
            physical education into our curriculum to enhance motor skills,
            coordination, and social development while promoting teamwork and
            confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
