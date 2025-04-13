import React from "react";
import founderImag from "../../assets/img/founders/founder.jpg";
const FounderMessage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Message Text Column (Left) */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-sky-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                <span className="text-sky-400 px-2 py-1 rounded">
                  Founder's Message
                </span>
              </h2>

              <div className="mb-6">
                <div className="w-16 h-1 bg-orange-400 rounded mb-4"></div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Education is the most powerful weapon which you can use to
                  change the world."
                </p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Dear Parents and Students,
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                It is with great pleasure that I welcome you to{" "}
                <span className="font-semibold text-sky-700">
                  Rajendra Mohan Chandrika Prasad Academy
                </span>
                . Our institution stands as a beacon of educational excellence,
                where we believe in nurturing not just academic brilliance but
                the holistic development of each child.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                At RMCP Academy, we understand that education goes beyond
                textbooks and classrooms. We are committed to providing an
                environment where students discover their unique talents,
                develop critical thinking skills, and cultivate values that will
                guide them throughout their lives.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Our dedicated faculty works tirelessly to ensure that every
                student receives personalized attention and guidance. We have
                invested in state-of-the-art facilities and innovative teaching
                methodologies to prepare our students for the challenges of the
                21st century while remaining rooted in our rich cultural
                heritage.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                As we journey together in this educational endeavor, I invite
                parents to be active participants in their child's growth.
                Together, we can create an ecosystem where young minds flourish
                and emerge as responsible global citizens who lead with
                integrity and compassion.
              </p>

              <div className="mt-6 text-right">
                <p className="font-semibold text-sky-700">With Warm Regards,</p>
                <p className="text-gray-800 text-lg font-bold">
                  Mr. Narendra Mohan Saxena
                </p>
                <p className="text-gray-600">Founder, RMCP ACADEMY</p>
              </div>
            </div>
          </div>

          {/* Chairperson Image Column (Right) */}
          <div className="flex-1">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-sky-400 opacity-20 rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-orange-400 opacity-20 rounded-full"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={founderImag}
                    alt="Founder Narendra Mohan Saxena"
                    className="w-3/4 h-auto mx-auto"
                  />
                </div>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-md -mt-10 w-4/5 border-t-2 border-sky-500 z-20">
                <h3 className="text-xl font-bold text-gray-800">
                  Mr. Narendra Mohan Saxena
                </h3>
                <p className="text-sky-700 font-medium mb-2">Founder</p>
                <div className="w-12 h-1 bg-orange-400 mx-auto my-3 rounded"></div>
                <p className="text-gray-600 text-sm italic">
                  Visionary Educator & Community Leader
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
