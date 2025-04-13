import React from "react";
import chairpersonImag from "../../assets/img/founders/chairperson.jpg";
const ChairpersonMessage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Message Text Column (Left) */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-sky-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                <span className="text-sky-400 px-2 py-1 rounded">
                  Chairperson's Message
                </span>
              </h2>

              <div className="mb-6">
                <div className="w-16 h-1 bg-orange-400 rounded mb-4"></div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Education is not the learning of facts, but the training of
                  the mind to think."
                </p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Dear Parents and Students,
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                It is an honor to welcome you to{" "}
                <span className="font-semibold text-sky-700">
                  Rajendra Mohan Chandrika Prasad Academy
                </span>
                . Our academy is built on the foundation of excellence,
                integrity, and a deep commitment to shaping future leaders.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe that education is more than just academic
                achievement—it is the key to unlocking a child's true potential.
                At RMCP Academy, we nurture curiosity, resilience, and
                character, ensuring that our students grow into confident
                individuals who contribute meaningfully to society.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                As we continue our journey of empowering young minds, I extend
                my heartfelt gratitude to our dedicated educators, supportive
                parents, and, most importantly, our students, whose aspirations
                inspire us every day.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Let us work together to create an environment where knowledge
                flourishes, values are upheld, and dreams take flight.
              </p>

              <div className="mt-6 text-right">
                <p className="font-semibold text-sky-700">With Warm Regards,</p>
                <p className="text-gray-800 text-lg font-bold">
                  Mr. Narendra Mohan Saxena
                </p>
                <p className="text-gray-600">Chairperson, RMCP ACADEMY</p>
              </div>
            </div>
          </div>

          {/* Chairperson Image Column (Right) */}
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-sky-400 opacity-20 rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-orange-400 opacity-20 rounded-full"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-white p-4">
                  <img
                    src={chairpersonImag}
                    alt="Founder Narendra Mohan Saxena"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-md -mt-10 w-4/5 border-t-2 border-sky-500 z-20">
                <h3 className="text-xl font-bold text-gray-800">
                  Mr. Vijender Mohan Saxena
                </h3>
                <p className="text-sky-700 font-medium mb-2">Chairperson</p>
                <div className="w-12 h-1 bg-orange-400 mx-auto my-3 rounded"></div>
                <p className="text-gray-600 text-sm italic">
                  Visionary Educator, Philanthropist & Community Leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairpersonMessage;
