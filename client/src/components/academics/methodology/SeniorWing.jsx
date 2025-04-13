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
  Beaker,
  Users2,
  Clock,
  Briefcase,
  Brain,
  Microscope,
  Code,
  GraduationCap,
  Trophy,
  Monitor,
  Headphones,
} from "lucide-react";
import SeniorWingImg from "../../../assets/img/senior_wing.jpg";
const SeniorWing = () => {
  const methodologies = [
    {
      id: 1,
      title: "Experiential Learning",
      description:
        "Advanced hands-on activities transform theoretical knowledge into practical competencies, following Aristotle's principle of 'learning by doing'.",
      icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 2,
      title: "Value-Based Education",
      description:
        "Ethical principles are integrated into academic pursuits, preparing students to make responsible choices as they enter higher education and careers.",
      icon: <Award className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
    {
      id: 3,
      title: "Research & Application",
      description:
        "Students conduct in-depth research projects with real-world applications, developing critical analysis and innovative problem-solving skills.",
      icon: <PenTool className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 4,
      title: "Field Studies",
      description:
        "Educational visits to industries, universities, and research centers connect academic learning with professional environments and career insights.",
      icon: <Map className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
    {
      id: 5,
      title: "Laboratory Excellence",
      description:
        "State-of-the-art science and computer labs enable advanced experimentation and technical skill development for future STEM careers.",
      icon: <Microscope className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 6,
      title: "Collaborative Projects",
      description:
        "Team-based assignments simulate professional environments, building leadership, delegation, and complex problem-solving capabilities.",
      icon: <Users2 className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
    {
      id: 7,
      title: "Sports & Co-curricular",
      description:
        "Competitive sports and specialized clubs develop discipline, teamwork, and balanced mental and physical well-being essential for academic success.",
      icon: <Users className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 8,
      title: "Digital Technology Integration",
      description:
        "Advanced digital resources and multimedia learning platforms prepare students for technology-driven higher education and workplace environments.",
      icon: <Monitor className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
    {
      id: 9,
      title: "Career Guidance",
      description:
        "Personalized counseling, industry exposure, and university preparation support students in making informed decisions about their future.",
      icon: <GraduationCap className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: 10,
      title: "Language Proficiency",
      description:
        "Our digital language lab enhances communication skills across multiple languages, preparing students for global academic and professional opportunities.",
      icon: <Headphones className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
    },
  ];

  const streams = [
    {
      name: "Science",
      subjects: [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "Biotechnology",
        "Computer Science",
        "Informatics Practices",
      ],
      icon: <Beaker className="h-12 w-12 text-sky-600" />,
    },
    {
      name: "Commerce",
      subjects: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "Entrepreneurship",
        "Informatics Practices",
        "Financial Markets",
      ],
      icon: <Briefcase className="h-12 w-12 text-orange-500" />,
    },
    {
      name: "Humanities",
      subjects: [
        "History",
        "Political Science",
        "Geography",
        "Psychology",
        "Sociology",
        "Economics",
        "Languages (English, Hindi, Sanskrit)",
      ],
      icon: <BookOpen className="h-12 w-12 text-sky-600" />,
    },
  ];

  const highlights = [
    "Modern labs for Biotechnology and IT specializations",
    "Career counseling and university application support",
    "National and international competition participation",
    "Student-led research and innovation projects",
    "Industry partnerships and internship opportunities",
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-800">Senior</span>
            <span className="text-sky-600"> Wing</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            The Senior Wing at RMCP Academy prepares students for university
            success and future careers through specialized academic streams,
            advanced research opportunities, and personalized guidance that
            nurtures excellence, innovation, and ethical leadership.
          </p>
        </div>

        {/* Aristotle Quote Banner */}
        <div className="bg-sky-50 rounded-xl p-8 shadow-md mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 pr-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Educational Philosophy
              </h3>
              <blockquote className="italic text-lg text-gray-700 border-l-4 border-orange-400 pl-4 mb-4">
              “Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.”
                <footer className="text-right font-semibold">
                  – A.P.J. Abdul Kalam
                </footer>
              </blockquote>
              <p className="text-gray-700">
                The Senior Wing embodies this timeless wisdom through
                specialized academic streams that balance theoretical knowledge
                with practical application. Our students don't just study
                subjects; they engage with them through research,
                experimentation, and real-world projects that prepare them for
                university excellence and future careers.
              </p>
            </div>
            <div className="md:w-1/4 mt-6 md:mt-0 flex justify-center">
              <img
                src={SeniorWingImg}
                alt="Senior students in advanced laboratory"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Academic Streams Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Academic Streams
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {streams.map((stream, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-sky-50 p-6 flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    {stream.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">
                    {stream.name}
                  </h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Subject Offerings:</p>
                  <ul className="space-y-2">
                    {stream.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-700">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Methodology Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Our Teaching Approach
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Framework */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/3 bg-orange-50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Senior Years
                  </h3>
                  <p className="text-orange-600 font-medium mb-4">
                    Classes VI to XII
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                    <p className="text-lg font-bold text-sky-600">Ages 12-18</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Specialized Education Framework
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-3">
                      Classes IX-X
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Foundation years that prepare students for stream
                      selection through:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Comprehensive core curriculum
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Aptitude assessment and guidance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Subject sampling opportunities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Career exploration workshops
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Board examination preparation
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-3">
                      Classes XI-XII
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Specialized stream-based education featuring:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          In-depth subject specialization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Advanced research projects
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          University entrance exam coaching
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Internship opportunities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">
                          Leadership development programs
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorWing;
