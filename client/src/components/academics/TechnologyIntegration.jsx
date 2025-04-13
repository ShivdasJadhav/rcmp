import React from "react";
import {
  Monitor,
  Laptop,
  Headphones,
  LayoutGrid,
  Code,
  Globe,
  Server,
  Presentation,
} from "lucide-react";

import tech1Img from "../../assets/img/tech_1.jpg";
import tech2Img from "../../assets/img/tech_2.jpg";
import tech3Img from "../../assets/img/tech_3.jpg";
import tech4Img from "../../assets/img/tech_4.jpeg";

const TechnologyIntegration = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800"> Technology</span>
          <span className="text-sky-600"> Integration</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Empowering education through innovative digital solutions
        </p>
      </div>

      {/* Primary Content (60% - white background) */}

      <p className="mb-6">
        At Amity, we integrate cutting-edge technology across our curriculum to
        prepare students for the digital world. Our technology infrastructure
        supports immersive learning experiences, fosters digital literacy, and
        enables students to become confident creators and critical thinkers in a
        technology-driven global society.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <Headphones className="text-sky-600" size={24} />
            <h3 className="text-xl font-medium">Digital Language Lab</h3>
          </div>
          <p className="text-gray-700">
            A sophisticated digital language lab enhancing language skills
            through interactive audio-visual tools, pronunciation practice, and
            immersive language learning experiences.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <Presentation className="text-sky-600" size={24} />
            <h3 className="text-xl font-medium">Smart Classrooms</h3>
          </div>
          <p className="text-gray-700">
            Smart boards in classrooms serve as versatile teaching tools,
            enabling interactive lessons, multimedia presentations, and
            real-time collaborative learning activities.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <LayoutGrid className="text-sky-600" size={24} />
            <h3 className="text-xl font-medium">Modern Computer Labs</h3>
          </div>
          <p className="text-gray-700">
            Updated computer labs designed for different age groups
            (Junior/Middle/Senior) with age-appropriate software, hardware, and
            learning resources tailored to each level's needs.
          </p>
        </div>
      </div>

      {/* Secondary Content (30% - sky blue background) */}
      <section className="bg-sky-50 p-6 rounded-lg shadow-md mb-8 border border-sky-100">
        <h2 className="text-2xl font-semibold mb-4 text-sky-800 flex items-center gap-2">
          <Code className="text-sky-700" size={24} />
          Technology Skills Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4 text-sky-900">
              Our technology curriculum develops essential digital skills
              through hands-on experience with industry-standard tools and
              platforms. Students learn everything from basic computer literacy
              to advanced programming and digital content creation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Server className="text-sky-700 mt-1 flex-shrink-0" size={18} />
                <span className="text-sky-800">
                  STEM integration through robotics, coding, and digital
                  fabrication
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="text-sky-700 mt-1 flex-shrink-0" size={18} />
                <span className="text-sky-800">
                  Digital citizenship and online safety education
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Monitor
                  className="text-sky-700 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-sky-800">
                  Media literacy and digital content creation
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-sky-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-sky-800 mb-3">
              Technology Progression Path
            </h3>
            <div className="space-y-2">
              <div className="bg-sky-200 p-2 rounded">
                <p className="font-medium text-sky-900">
                  Junior Level (Grades 1-5)
                </p>
                <p className="text-sky-800 text-sm">
                  Basic computer skills, educational games, introduction to
                  coding concepts
                </p>
              </div>
              <div className="bg-sky-300 p-2 rounded">
                <p className="font-medium text-sky-900">
                  Middle Level (Grades 6-8)
                </p>
                <p className="text-sky-800 text-sm">
                  Office applications, intermediate programming, digital
                  presentations
                </p>
              </div>
              <div className="bg-sky-400 p-2 rounded">
                <p className="font-medium text-sky-900">
                  Senior Level (Grades 9-12)
                </p>
                <p className="text-sky-800 text-sm">
                  Advanced programming, multimedia production, data analysis,
                  web development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tertiary Content (10% - orange accent) */}
      <section className="bg-orange-50 p-6 rounded-lg shadow-md mb-8 border border-orange-100">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700">
          Technology in Action
        </h2>
        <p className="text-orange-800 mb-6">
          Our students actively engage with technology across disciplines,
          developing crucial skills for the digital age.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src={tech1Img}
            alt="Students in digital language lab"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={tech2Img}
            alt="Interactive smart board lesson"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={tech3Img}
            alt="Computer programming class"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={tech4Img}
            alt="Robotics and technology projects"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
        </div>
      </section>
    </div>
  );
};

export default TechnologyIntegration;
