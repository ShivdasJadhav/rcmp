import React from "react";
import missionImg from "../../assets/img/mission.jpg";

const Mission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative border border-white border-4 rounded-md p-4">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky-400 opacity-20 rounded-full p-4 md:p-6"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400 opacity-20 rounded-full"></div>
              <img
                src={missionImg}
                alt="Students in learning environment"
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 px-6 py-3 rounded-lg shadow-md z-20">
                <h3 className="text-sky-700 font-semibold text-lg">
                  Nurturing Tomorrow's Leaders
                </h3>
              </div>
            </div>
          </div>

          {/* Mission Text Column */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                <span className="text-sky-400 px-2 py-1 rounded">
                  Our Mission
                </span>
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                At{" "}
                <span className="font-semibold text-sky-700">
                  Rajendra Mohan Chandrika Prasad Academy
                </span>
                , we are committed to providing{" "}
                <span className="font-semibold">holistic education</span> that
                nurtures young minds with{" "}
                <span className="font-semibold">
                  knowledge, values, and life skills
                </span>{" "}
                essential for personal growth and global success.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Our mission is to cultivate{" "}
                <span className="font-semibold">
                  compassionate, responsible, and intellectually curious
                  individuals
                </span>{" "}
                by integrating{" "}
                <span className="font-semibold">
                  modern education with traditional wisdom
                </span>
                .
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe in fostering a{" "}
                <span className="font-semibold">
                  scientific temper, ethical leadership, entrepreneurship, and
                  humanitarian values
                </span>{" "}
                that empower students to become{" "}
                <span className="font-semibold">global citizens</span> who
                contribute to society with integrity and innovation.
              </p>

              <div className="border-l-4 border-sky-400 pl-4 py-2 bg-sky-50 rounded-r-lg mb-6">
                <p className="text-gray-800 italic">
                  "With a deep-rooted belief in{" "}
                  <span className="font-semibold">'Abhivandan Shilayasa'</span>,
                  our education system is built on{" "}
                  <span className="font-semibold">
                    respect, discipline, and cultural values
                  </span>
                  ."
                </p>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="w-12 h-1 bg-sky-500 rounded"></div>
                <p className="text-sky-700 font-semibold">
                  Inspiring Potential, Creating Futures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
