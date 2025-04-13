import React from "react";
import {
  Trophy,
  Users,
  Medal,
  Calendar,
  Activity,
  Target,
  Award,
  Shield,
} from "lucide-react";

import sport1Img from "../../assets/img/sport_1.jpg";
import sport2Img from "../../assets/img/sport_2.jpg";
import sport3Img from "../../assets/img/sport_3.jpg";
import sport4Img from "../../assets/img/sport_4.jpg";

const SportsFacility = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">Sports & Physical</span>
          <span className="text-sky-600"> Education</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          "A healthy mind resides in a healthy body"
        </p>
      </div>
      {/* Primary Content (60% - white background) */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center gap-3 mb-5">
          <Activity className="text-sky-700" size={28} />
          <h2 className="text-2xl font-semibold">
            Comprehensive Sports Program
          </h2>
        </div>

        <p className="mb-6">
          Amity places utmost stress on sports and physical training. Sports
          help inculcate discipline, self confidence, team spirit and self
          esteem. The sports curriculum at Amity lays emphasis on physical
          fitness, stretching physical abilities to an optimum level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-sky-600" size={24} />
              <h3 className="text-xl font-medium">World-Class Facilities</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500 mt-2"></div>
                <span>Sprawling playground with modern infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500 mt-2"></div>
                <span>Special areas earmarked for different games</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500 mt-2"></div>
                <span>
                  Outdoor courts for basketball, and badminton
                </span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-sky-600" size={24} />
              <h3 className="text-xl font-medium">Sports Offerings</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Facilities for various sports including:
            </p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Cricket</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Basketball</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Football</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Chess</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Taekwondo</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Kabaddi</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Badminton</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span>Volleyball</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-sky-600" size={24} />
              <h3 className="text-xl font-medium">Expert Coaching</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500 mt-2"></div>
                <span>Professional coaches with extensive experience</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500 mt-2"></div>
                <span>Regular fitness assessments and improvement plans</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-500 mt-2"></div>
                <span>Focus on technique, strategy, and sportsmanship</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secondary Content (30% - sky blue background) */}
      <section className="bg-sky-50 p-6 rounded-lg shadow-md mb-8 border border-sky-100">
        <h2 className="text-2xl font-semibold mb-4 text-sky-800 flex items-center gap-2">
          <Trophy className="text-sky-700" size={24} />
          Competitive Excellence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-sky-800 mb-3">
              Sports Achievement Program
            </h3>
            <p className="text-sky-900 mb-4">
              Our students regularly participate in competitions at the
              district, state, national, and international levels, bringing
              laurels to the school and developing their competitive spirit.
            </p>
            <ul className="space-y-2 text-sky-800">
              <li className="flex items-start gap-2">
                <Medal className="text-sky-600 flex-shrink-0 mt-1" size={16} />
                <span>
                  Students participate in national and international tournaments
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Medal className="text-sky-600 flex-shrink-0 mt-1" size={16} />
                <span>Regular inter-house and inter-school competitions</span>
              </li>
              <li className="flex items-start gap-2">
                <Medal className="text-sky-600 flex-shrink-0 mt-1" size={16} />
                <span>Sports scholarships for exceptional athletes</span>
              </li>
              <li className="flex items-start gap-2">
                <Medal className="text-sky-600 flex-shrink-0 mt-1" size={16} />
                <span>Special training camps during vacations</span>
              </li>
            </ul>
          </div>

          <div className="bg-sky-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-sky-800 mb-3 flex items-center gap-2">
              <Calendar className="text-sky-700" size={20} />
              Annual Sports Events
            </h3>
            <ul className="space-y-3 text-sky-800">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium">Junior Sports Day</p>
                  <p className="text-sm text-sky-600">
                    Celebrated annually for students in grades 1-5
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium">Senior Sports Day</p>
                  <p className="text-sm text-sky-600">
                    Celebrated annually for students in grades 6-12
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium">Inter-School Sports Tournament</p>
                  <p className="text-sm text-sky-600">
                    Annual competition hosting schools from the region
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sky-700 text-xs font-bold">4</span>
                </div>
                <div>
                  <p className="font-medium">Sports Achievement Ceremony</p>
                  <p className="text-sm text-sky-600">
                    Recognition of outstanding athletes and teams
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tertiary Content (10% - orange accent) */}
      <section className="bg-orange-50 p-6 rounded-lg shadow-md mb-8 border border-orange-100">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 flex items-center gap-2">
          <Award className="text-orange-600" size={24} />
          Benefits of Our Sports Program
        </h2>
        <p className="text-orange-800 mb-6">
          Our comprehensive sports program goes beyond physical fitness to
          develop character, resilience, and important life skills. Students
          learn teamwork, leadership, and discipline through regular
          participation in sports activities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src={sport1Img}
            alt="Cricket match on school grounds"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={sport2Img}
            alt="Basketball court during practice"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={sport3Img}
            alt="pool with coaching session"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={sport4Img}
            alt="Annual sports day celebration"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
        </div>
      </section>
    </div>
  );
};

export default SportsFacility;
