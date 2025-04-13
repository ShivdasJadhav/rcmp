import React from "react";
import {
  Users,
  Brain,
  Compass,
  Star,
  Award,
  Heart,
  BookOpen,
  Target,
  HelpCircle,
} from "lucide-react";

import guide1Img from "../../assets/img/guide_1.jpg";
import guide2Img from "../../assets/img/guide_2.jpg";
import guide3Img from "../../assets/img/guide_3.jpg";
import guide4Img from "../../assets/img/guide_4.jpg";

const GuidanceAndCounseling = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">Guidance</span>
          <span className="text-sky-600"> & Counseling</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          A personalized approach to better learning and development
        </p>
      </div>

      {/* Primary Content (60% - white background) */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center gap-3 mb-5">
          <Users className="text-sky-700" size={28} />
          <h2 className="text-2xl font-semibold">
            Personalized Approach to Better Learning
          </h2>
        </div>

        <p className="mb-6">
          Amity Career Counseling & Guidance Cell aims to offer guidance and
          support to students both on the academic as well as personal front. It
          follows a two tier approach that ensures a comprehensive support
          system for the child, which in turn ensures better learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-sky-600" size={24} />
              <h3 className="text-xl font-medium">Day to Day Counselling</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-sky-100 rounded-full p-1 mt-1">
                  <HelpCircle className="text-sky-700" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Behavior Issues</h4>
                  <p className="text-gray-600">
                    Support for children facing challenges with conduct, social
                    interactions, and emotional regulation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-sky-100 rounded-full p-1 mt-1">
                  <Brain className="text-sky-700" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Stress Management
                  </h4>
                  <p className="text-gray-600">
                    Techniques and strategies to help students cope with
                    academic pressure and personal challenges.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="text-sky-600" size={24} />
              <h3 className="text-xl font-medium">Career Counselling</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-sky-100 rounded-full p-1 mt-1">
                  <Star className="text-sky-700" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Paving the Path for a Luminous Future
                  </h4>
                  <p className="text-gray-600">
                    Structured guidance to help students discover their
                    strengths and align them with potential career paths.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-sky-100 rounded-full p-1 mt-1">
                  <Target className="text-sky-700" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Career Assessment
                  </h4>
                  <p className="text-gray-600">
                    Scientific testing to identify aptitudes, interests, and
                    personality traits for informed career decisions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secondary Content (30% - sky blue background) */}
      <section className="bg-sky-50 p-6 rounded-lg shadow-md mb-8 border border-sky-100">
        <h2 className="text-2xl font-semibold mb-4 text-sky-800">
          Comprehensive Support System
        </h2>
        <p className="mb-6 text-sky-900">
          School years for a child are often accompanied with numerous
          psychological and personal challenges. Peer pressure, inferiority
          complex, relationships with parents, stress…these are some of the
          challenges that confront a child during his growing years. It is here
          that our counselors step in. The counselor takes into account the
          situation, personality and needs of a child and helps him/her overcome
          the challenges through a series of meticulously planned counseling
          sessions.
        </p>

        <div className="bg-sky-100 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-sky-800 mb-3 flex items-center gap-2">
            <Award className="text-sky-700" size={20} />
            Our Counseling Philosophy
          </h3>
          <ul className="space-y-2 text-sky-800">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sky-700 text-xs font-bold">1</span>
              </div>
              <p>
                Creating a safe, confidential environment for students to
                express themselves
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sky-700 text-xs font-bold">2</span>
              </div>
              <p>
                Adopting an empathetic, non-judgmental approach to student
                concerns
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sky-700 text-xs font-bold">3</span>
              </div>
              <p>
                Collaborating with parents and teachers to provide comprehensive
                support
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sky-700 text-xs font-bold">4</span>
              </div>
              <p>
                Equipping students with practical coping strategies and life
                skills
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Tertiary Content (10% - orange accent) */}
      <section className="bg-orange-50 p-6 rounded-lg shadow-md mb-8 border border-orange-100">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 flex items-center gap-2">
          <BookOpen className="text-orange-600" size={24} />
          Career Development Activities
        </h2>
        <p className="text-orange-800 mb-6">
          To help students with their academic requirements, career testing &
          counseling, career fairs, university campus visits, workshops for
          students, parents, teachers and many other activities are organized to
          encourage and motivate the students to pursue the career of their
          choice. Specialized career counseling workshops are organized to help
          students better understand their academic potential, attributes,
          personality, talent, interest, expectations, strengths and weaknesses,
          which in turn helps them choose the right career path.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src={guide1Img}
            alt="One-on-one counseling session"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={guide2Img}
            alt="Career fair with universities"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={guide3Img}
            alt="Group counseling workshop"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={guide4Img}
            alt="Aptitude testing session"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
        </div>
      </section>
    </div>
  );
};

export default GuidanceAndCounseling;
