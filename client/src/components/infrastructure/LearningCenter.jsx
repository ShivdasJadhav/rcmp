import React from "react";
import {
  BookOpen,
  Users,
  Clock,
  Calculator,
  BookMarked,
  BrainCircuit,
  School,
  PenTool,
  Calendar,
} from "lucide-react";

const LearningCenter = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-6">
      {/* Header Section */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">Specialized Learning</span>
          <span className="text-sky-600"> Centre</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Supporting students with mild to moderate learning difficulties
        </p>
      </div>

      {/* Main Info Card */}
      <div className="bg-sky-50 rounded-lg p-6 mb-8 shadow-md">
        <div className="flex items-center mb-4">
          <School className="text-sky-600 mr-3" size={28} />
          <h2 className="text-2xl font-semibold text-sky-800">
            About Our Centre
          </h2>
        </div>
        <p className="text-gray-700 mb-4">
          Our specialized learning center provides dedicated support for
          students with learning difficulties from classes I to XII. We operate
          during regular school hours, providing a seamless educational
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start">
            <Users className="text-sky-600 mt-1 mr-3" size={20} />
            <div>
              <h3 className="font-medium text-sky-800">
                Collaborative Approach
              </h3>
              <p className="text-gray-600">
                Special educators, teachers, counsellors, parents & peers
                working together
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="text-sky-600 mt-1 mr-3" size={20} />
            <div>
              <h3 className="font-medium text-sky-800">
                School Hour Integration
              </h3>
              <p className="text-gray-600">
                Operates within regular school timings for minimal disruption
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Areas Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <BookMarked className="text-orange-500 mr-3" size={24} />
          <h2 className="text-xl font-semibold text-orange-600">
            Individual Remedial Support Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-sky-100 shadow-sm">
            <div className="flex items-center mb-2">
              <BookOpen className="text-sky-500 mr-2" size={18} />
              <h3 className="font-medium text-sky-700">
                Reading & Comprehension
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Personalized strategies to improve reading fluency and
              understanding
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-sky-100 shadow-sm">
            <div className="flex items-center mb-2">
              <PenTool className="text-sky-500 mr-2" size={18} />
              <h3 className="font-medium text-sky-700">Spelling & Writing</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Techniques to enhance written expression and spelling accuracy
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-sky-100 shadow-sm">
            <div className="flex items-center mb-2">
              <Calculator className="text-sky-500 mr-2" size={18} />
              <h3 className="font-medium text-sky-700">Mathematics</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Practical approaches to build mathematical concept understanding
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-sky-100 shadow-sm">
            <div className="flex items-center mb-2">
              <BrainCircuit className="text-sky-500 mr-2" size={18} />
              <h3 className="font-medium text-sky-700">Thinking Skills</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Activities to develop critical and creative thinking abilities
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-sky-100 shadow-sm">
            <div className="flex items-center mb-2">
              <Calendar className="text-sky-500 mr-2" size={18} />
              <h3 className="font-medium text-sky-700">Study Skills</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Organization, planning and effective learning techniques
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;
