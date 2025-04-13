import React from "react";
import {
  Brain,
  Heart,
  Dumbbell,
  Music,
  BookOpen,
  Users,
  Camera,
} from "lucide-react";
import sport_holisticImg from "../../assets/img/sport_holistic.jpg";
import activity_holisticImg from "../../assets/img/activity_holistic.jpg";
import art_holisticImg from "../../assets/img/art_holistic.jpg";
import labclass_holisticImg from "../../assets/img/labclass_holistic.jpg";
const HolisticDevelopment = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">Holistic Development</span>
          <span className="text-sky-600"> at RMCP</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Nurturing minds, bodies, and spirits for complete student growth
        </p>
      </div>

      <p className="mb-4">
        RMCP believes in holistic development of its students and leaves no
        stone unturned to nurture talent. An Integrated approach to education is
        adopted at each level. A broad and comprehensive education should aim at
        enabling each individual to discover, unearth and enrich his or her
        creative potential.
      </p>
      <p className="mb-4">
        The holistic curriculum encourages students to be active learners who
        explore, understand and participate in the world around them. By
        exposing students to a wide variety of disciplines we fine-tune both
        cognitive and non-cognitive skills so as to prepare them for a
        well-balanced life outside of Academy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="text-sky-600" size={24} />
            <h3 className="text-xl font-medium">Intellectual Growth</h3>
          </div>
          <p className="text-gray-700">
            Stimulating critical thinking, creativity, and problem-solving
            skills through academic excellence and intellectual challenges.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="text-sky-600" size={24} />
            <h3 className="text-xl font-medium">Emotional Balance</h3>
          </div>
          <p className="text-gray-700">
            Nurturing emotional intelligence, resilience, and self-awareness
            through mentorship and character education.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <Dumbbell className="text-sky-600" size={24} />
            <h3 className="text-xl font-medium">Physical Wellness</h3>
          </div>
          <p className="text-gray-700">
            Developing strength, coordination, and healthy habits through
            sports, fitness activities, and nutrition education.
          </p>
        </div>
      </div>

      {/* Secondary Content (30% - sky blue background) */}
      <section className="bg-sky-50 p-6 rounded-lg shadow-md mb-8 border border-sky-100">
        <h2 className="text-2xl font-semibold mb-4 text-sky-800 flex items-center gap-2">
          <BookOpen className="text-sky-700" size={24} />
          Our Educational Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4 text-sky-900">
              At RMCP, we believe that education goes beyond textbooks and
              classrooms. Our approach integrates academics with experiential
              learning, encouraging students to discover their unique talents
              and interests.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-sky-700" size={20} />
              <p className="text-sky-800 font-medium">
                Collaborative Learning Environments
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Music className="text-sky-700" size={20} />
              <p className="text-sky-800 font-medium">
                Arts & Cultural Immersion
              </p>
            </div>
          </div>
          <div className="bg-sky-100 p-4 rounded-lg">
            <blockquote className="italic text-sky-800 border-l-4 border-sky-300 pl-4">
            “The highest education is that which does not merely give us information but makes our life in harmony with all existence.”
              <footer className="text-sky-600 mt-2">— Rabindranath Tagore</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Tertiary Content (10% - orange accent) */}
      <section className="bg-orange-50 p-6 rounded-lg shadow-md mb-8 border border-orange-100">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700 flex items-center gap-2">
          <Camera className="text-orange-600" size={24} />
          Glimpses of Holistic Learning
        </h2>
        <p className="text-orange-800 mb-6">
          Our students engage in a variety of activities that promote their
          overall development and prepare them for future success.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src={labclass_holisticImg}
            alt="Students in science lab"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={art_holisticImg}
            alt="Art and creativity workshop"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={sport_holisticImg}
            alt="Sports and physical activities"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
          <img
            src={activity_holisticImg}
            alt="Community service projects"
            className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
        </div>
      </section>
    </div>
  );
};

export default HolisticDevelopment;
