import React from "react";
import {
  BookOpen,
  Users,
  Map,
  Film,
  Award,
  Lightbulb,
  Mic,
  Globe,
  PenTool,
  Puzzle,
} from "lucide-react";
import primaryWingImg from "../../../assets/img/primary_wing.jpg";
const PrimaryWing = () => {

  const methodologies = [
    {
      id: 1,
      title: "Experiential Learning",
      description:
        "Our 'learning by doing' approach encourages students to actively participate in hands-on activities that reinforce theoretical concepts through practical application.",
      icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 2,
      title: "Character Education",
      description:
        "We integrate value-based teaching in every subject, nurturing ethical thinking, compassion, respect, and integrity as foundations for lifelong success.",
      icon: <Award className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
    {
      id: 3,
      title: "Immersive Thematic Approach",
      description:
        "Our curriculum follows integrated themes that connect multiple subjects, helping students understand relationships between different areas of knowledge.",
      icon: <BookOpen className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 4,
      title: "Multimedia Learning",
      description:
        "Advanced audio-visual aids and digital resources enhance comprehension, retention, and engagement through multisensory learning experiences.",
      icon: <Film className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
    {
      id: 5,
      title: "Exploratory Field Trips",
      description:
        "Regular educational excursions connect classroom knowledge with real-world contexts, providing authentic learning experiences beyond school walls.",
      icon: <Map className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 6,
      title: "Theatrical Expression",
      description:
        "Through role play and dramatization, students develop confidence, creativity, emotional intelligence, and effective communication skills.",
      icon: <Users className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
    {
      id: 7,
      title: "Research & Presentation",
      description:
        "Project-based learning cultivates research skills, critical thinking, teamwork, and the ability to articulate ideas clearly and confidently.",
      icon: <PenTool className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 8,
      title: "Analytical Thinking",
      description:
        "Engaging problem-solving activities develop logical reasoning, creativity, perseverance, and the ability to approach challenges methodically.",
      icon: <Puzzle className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
    {
      id: 9,
      title: "Language Enrichment",
      description:
        "Our specialized vocabulary building program and language labs help students develop strong communication foundations across multiple languages.",
      icon: <Globe className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 10,
      title: "Public Speaking Excellence",
      description:
        "Regular opportunities for recitation, debate, and presentations help students build confidence, articulation, and powerful oratorical abilities.",
      icon: <Mic className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-800">Primary</span>
            <span className="text-sky-600"> Wing</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            The foundation years at RMCP Academy are designed to nurture curious
            minds through a perfect blend of play-based and structured learning,
            establishing strong academic and character foundations for lifelong
            success.
          </p>
        </div>

        {/* Teaching Methodology Banner */}
        <div className="bg-sky-50 rounded-xl p-8 shadow-md mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Teaching Methodology
              </h3>
              <p className="text-gray-700">
                At RMCP Academy's Primary Wing, we believe that young learners
                thrive in an environment that engages their natural curiosity
                and imagination. Our innovative teaching methodologies are
                carefully designed to make learning joyful, meaningful, and
                effective, creating a strong foundation for advanced learning in
                higher classes.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <img
                src={primaryWingImg}
                alt="Primary students engaged in learning"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Teaching Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {methodologies.map((method) => (
            <div
              key={method.id}
              className={`${method.color} rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Highlights */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/3 bg-orange-50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Primary Years
                  </h3>
                  <p className="text-orange-600 font-medium mb-4">
                    Classes P.N.C, N.C & K.G
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                    <p className="text-lg font-bold text-sky-600">Ages 2-6</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Curriculum Highlights
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-3">
                      Core Subjects
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          English Language & Literature
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Hindi, Sanskrit & Panjabi Language</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Mathematics & Mental Arithmetic
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Environmental Studies
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Computer Science & Digital Literacy
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-3">
                      Co-Curricular Activities
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Visual Arts & Crafts
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Music (Vocal & Instrumental)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Dance (Classical & Contemporary)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Yoga & Physical Education
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Taekwondo & Self-Defense
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Life */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            A Day in Primary Wing
          </h3>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-orange-50 p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center mr-2 shadow-sm">
                    <span className="text-orange-500 font-bold">1</span>
                  </span>
                  Morning Assembly
                </h4>
                <p className="text-gray-600 text-sm">
                  The day begins with prayers, meditation, and inspiring
                  thoughts that center students and prepare them for learning.
                </p>
              </div>

              <div className="bg-sky-50 p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center mr-2 shadow-sm">
                    <span className="text-sky-600 font-bold">2</span>
                  </span>
                  Learning Sessions
                </h4>
                <p className="text-gray-600 text-sm">
                  Engaging classroom sessions blend theoretical knowledge with
                  practical activities and technology-enhanced learning.
                </p>
              </div>

              <div className="bg-orange-50 p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center mr-2 shadow-sm">
                    <span className="text-orange-500 font-bold">3</span>
                  </span>
                  Activity Period
                </h4>
                <p className="text-gray-600 text-sm">
                  Dedicated time for arts, music, dance, and sports to ensure
                  balanced physical, creative, and cognitive development.
                </p>
              </div>

              <div className="bg-sky-50 p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center mr-2 shadow-sm">
                    <span className="text-sky-600 font-bold">4</span>
                  </span>
                  Reflection Time
                </h4>
                <p className="text-gray-600 text-sm">
                  The day concludes with guided reflection, reinforcement of
                  learning, and preparation for the next day's journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryWing;
