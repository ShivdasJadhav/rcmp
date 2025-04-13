import React from 'react';
import { BookOpen, Users, Map, Film, Award, Lightbulb, Mic, Globe, PenTool, Puzzle, Beaker, Users2, Clock, Briefcase, Brain } from 'lucide-react';
import middleWingImg from "../../../assets/img/middle_wing.jpg";

const MiddleWing = () => {
  const methodologies = [
    {
      id: 1,
      title: "Experiential Learning",
      description: "Students engage in hands-on activities that transform theoretical concepts into practical understanding, following Aristotle's principle of 'learning by doing'.",
      icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50"
    },
    {
      id: 2,
      title: "Value-Based Education",
      description: "We integrate ethical principles and character development across all subjects, nurturing responsible, compassionate, and principled individuals.",
      icon: <Award className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50"
    },
    {
      id: 3,
      title: "Research & Analysis",
      description: "Students develop critical thinking through research projects that encourage questioning, investigation, and application of knowledge.",
      icon: <PenTool className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50"
    },
    {
      id: 4,
      title: "Laboratory-Based Learning",
      description: "Our well-equipped science and computer labs facilitate experimental learning, helping students discover concepts through guided exploration.",
      icon: <Beaker className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50"
    },
    {
      id: 5,
      title: "Educational Field Trips",
      description: "Regular excursions to historical sites, natural environments, and institutions bridge classroom learning with real-world contexts.",
      icon: <Map className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50"
    },
    {
      id: 6,
      title: "Collaborative Learning",
      description: "Group projects and peer teaching develop teamwork, leadership, and communication skills essential for success in the modern world.",
      icon: <Users2 className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50"
    },
    {
      id: 7,
      title: "Sports & Co-curricular",
      description: "Balanced development through athletics, arts, and clubs strengthens physical fitness, creativity, and essential life skills.",
      icon: <Users className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50"
    },
    {
      id: 8,
      title: "Library-Based Learning",
      description: "Our extensive library resources cultivate research skills, literary appreciation, and a lifelong love for independent learning.",
      icon: <BookOpen className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50"
    },
    {
      id: 9,
      title: "Project Work",
      description: "Cross-disciplinary projects encourage students to apply knowledge from multiple subjects to solve complex, real-world problems.",
      icon: <Puzzle className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50"
    },
    {
      id: 10,
      title: "Audio-Visual Teaching",
      description: "Modern multimedia resources enhance learning experiences, catering to diverse learning styles and deepening conceptual understanding.",
      icon: <Film className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50"
    }
  ];


  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-800">Middle</span>
            <span className="text-sky-600"> Wing</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            The formative years at RMCP Academy's Middle Wing bridge childhood curiosity with 
            adolescent analytical thinking, providing a structured environment where students 
            develop academic excellence, emotional intelligence, and social responsibility.
          </p>
        </div>

        {/* Aristotle Quote Banner */}
        <div className="bg-sky-50 rounded-xl p-8 shadow-md mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 pr-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Educational Philosophy</h3>
              <blockquote className="italic text-lg text-gray-700 border-l-4 border-orange-400 pl-4 mb-4">
                "For the Things we have to learn before we can do them, we learn by doing them."
                <footer className="text-right font-semibold">– Aristotle</footer>
              </blockquote>
              <p className="text-gray-700">
                At RMCP Academy's Middle Wing, we embrace Aristotle's timeless wisdom by creating 
                learning environments where students actively engage with knowledge. Our approach balances 
                academic rigor with practical application, preparing students for higher education while 
                nurturing critical thinking and character development.
              </p>
            </div>
            <div className="md:w-1/4 mt-6 md:mt-0 flex justify-center">
              <img 
                src={middleWingImg}
                alt="Middle school students in laboratory" 
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
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h4>
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Middle Years</h3>
                  <p className="text-orange-600 font-medium mb-4">Classes I to V</p>
                  <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                    <p className="text-lg font-bold text-sky-600">Ages 6-11</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Curriculum Highlights</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-3">Academic Disciplines</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">English Language & Literature</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Hindi, Sanskrit & Panjabi Language</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Mathematics & Advanced Problem Solving</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Science (Physics, Chemistry, Biology)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Social Studies & Civics</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Computer Science & Digital Projects</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-3">Skill Development Programs</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Fine Arts & Creative Expression</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Music & Performing Arts</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Debate, MUN & Public Speaking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Sports & Physical Education</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Entrepreneurship & Innovation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-2">•</div>
                        <span className="text-gray-600">Community Service & Leadership</span>
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">A Day in Middle Wing</h3>
          
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
                  Day begins with student-led assemblies featuring presentations on current affairs, mindfulness exercises, and inspiring messages.
                </p>
              </div>
              
              <div className="bg-sky-50 p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center mr-2 shadow-sm">
                    <span className="text-sky-600 font-bold">2</span>
                  </span>
                  Academic Sessions
                </h4>
                <p className="text-gray-600 text-sm">
                  Interactive subject-specific classes with specialized teachers include discussions, debates, and project work with technology integration.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center mr-2 shadow-sm">
                    <span className="text-orange-500 font-bold">3</span>
                  </span>
                  Clubs & Activities
                </h4>
                <p className="text-gray-600 text-sm">
                  Scheduled time for sports, arts, STEM clubs, literary activities, and student-led initiatives that develop specific talents and interests.
                </p>
              </div>
              
              <div className="bg-sky-50 p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center mr-2 shadow-sm">
                    <span className="text-sky-600 font-bold">4</span>
                  </span>
                  Synthesis & Planning
                </h4>
                <p className="text-gray-600 text-sm">
                  The day concludes with mentoring sessions for assignment planning, goal-setting, and reflection on learning achievements.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MiddleWing;