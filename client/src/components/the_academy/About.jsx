import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <span className="text-sky-400 px-3 py-1 rounded">About</span>
            <span className="text-sky-400">RMCP Academy</span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-orange-400 rounded"></div>
            <p className="text-gray-600 font-medium">Est. 2012</p>
            <div className="w-12 h-1 bg-orange-400 rounded"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A premier educational academy dedicated to excellence, innovation,
            and holistic development
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Key Information */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-sky-500 py-4 px-6">
              <h3 className="text-white text-xl font-semibold">At a Glance</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Affiliated Board
                    </h4>
                    <p className="text-gray-600">
                      CBSE with modern curriculum approach
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Campus</h4>
                    <p className="text-gray-600">
                      10-acre green campus with modern facilities
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Student-Teacher Ratio
                    </h4>
                    <p className="text-gray-600">
                      15:1 ensuring personalized attention
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Faculty</h4>
                    <p className="text-gray-600">
                      50+ highly qualified educators
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Column - Main About Text */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg h-full p-6 border-t-4 border-sky-500">
              <p className="text-gray-700 mb-4 leading-relaxed">
                <span className="font-semibold text-sky-700">
                  Rajendra Mohan Chandrika Prasad Academy (RMCP Academy)
                </span>{" "}
                in Bilsanda was established with a vision to provide world-class
                education that balances academic excellence with character
                development.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Our academy offers a comprehensive educational journey from
                pre-primary to senior secondary levels, fostering an environment
                where students can discover and develop their unique talents and
                abilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sky-700 mb-2">
                    Learning Environment
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our technology-equipped classrooms, advanced science
                    laboratories, computer labs, and well-stocked library
                    provide a stimulating environment for intellectual growth
                    and exploration.
                  </p>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sky-700 mb-2">
                    Co-Curricular Focus
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We offer comprehensive programs in music, arts, dance, and
                    sports including Taekwondo, ensuring the holistic
                    development of every student beyond academics.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                At RMCP Academy, we believe that education should inspire
                curiosity, foster critical thinking, and instill a lifelong love
                for learning. Our teaching methodology encourages students to
                question, explore, and innovate.
              </p>

              <div className="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50 rounded-r-lg my-6">
                <p className="text-gray-800 italic">
                  "Our educational philosophy integrates modern teaching
                  approaches with traditional values, preparing students who
                  excel academically while maintaining strong ethical
                  foundations."
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                We take pride in our alumni who have gone on to prestigious
                institutions and successful careers across various fields,
                carrying forward the values and knowledge imparted at RMCP
                Academy.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Link to={"/infrastructure/learning-centre"} className="bg-white p-5 rounded-lg shadow-md text-center border-b-4 border-sky-500 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <div className="w-8 h-8 bg-sky-500 rounded-full relative">
                <span className="absolute inset-0 w-full h-full bg-sky-500 rounded-full animate-ping"></span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Academic Excellence
            </h3>
            <p className="text-gray-600 text-sm">
              Rigorous curriculum focused on conceptual understanding and
              critical thinking
            </p>
          </Link>

          <Link to={"/infrastructure/auditorium"} className="bg-white p-5 rounded-lg shadow-md text-center border-b-4 border-orange-400 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <div className="w-8 h-8 bg-orange-500 rounded-full relative">
                <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full animate-ping"></span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Value-Based Education
            </h3>
            <p className="text-gray-600 text-sm">
              Character development through integration of cultural values and
              ethics
            </p>
          </Link>

          <Link to={"/academics/technology"} className="bg-white p-5 rounded-lg shadow-md text-center border-b-4 border-sky-500 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <div className="w-8 h-8 bg-sky-500 rounded-full relative">
                <span className="absolute inset-0 w-full h-full bg-sky-500 rounded-full animate-ping"></span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Modern Facilities
            </h3>
            <p className="text-gray-600 text-sm">
              State-of-the-art infrastructure supporting diverse learning needs
            </p>
          </Link>

          <Link to={"/academics/holistic-development"} className="bg-white p-5 rounded-lg shadow-md text-center border-b-4 border-orange-400 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <div className="w-8 h-8 bg-orange-500 rounded-full relative">
                <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full animate-ping"></span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Holistic Development
            </h3>
            <p className="text-gray-600 text-sm">
              All-round growth through sports, arts, cultural activities and
              leadership programs
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
