import React from "react";
import principleImag from "../../assets/img/founders/principle.jpg";
const PrincipleMessage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Message Text Column (Left) */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-sky-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                <span className="text-sky-400 px-2 py-1 rounded">
                  Principal's Message
                </span>
              </h2>

              <div className="mb-6">
                <div className="w-16 h-1 bg-orange-400 rounded mb-4"></div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "The function of education is to teach one to think
                  intensively and to think critically. Intelligence plus
                  character — that is the goal of true education."
                </p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Dear Parents and Students,
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Welcome to{" "}
                <span className="font-semibold text-sky-700">
                  Rajendra Mohan Chandrika Prasad Academy
                </span>
                , a place where learning is a journey, not just a destination.
                It is our mission to provide an education that fosters both
                intellectual growth and personal development.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                At RMCP Academy, we are committed to excellence in academics,
                innovation in teaching, and the holistic development of our
                students. We believe in cultivating critical thinking,
                creativity, and leadership skills to prepare our students for a
                dynamic future.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Our passionate educators, state-of-the-art facilities, and
                enriching extracurricular programs ensure that every child
                receives the best possible learning experience. We encourage
                students to dream big, challenge themselves, and embrace
                learning with enthusiasm.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                I invite parents and guardians to be active partners in this
                journey. Together, we can create a vibrant, nurturing
                environment where our students thrive and become responsible,
                compassionate individuals.
              </p>

              <div className="mt-6 text-right">
                <p className="font-semibold text-sky-700">With Warm Regards,</p>
                <p className="text-gray-800 text-lg font-bold">
                  Mr. Gurjant Khaira
                </p>
                <p className="text-gray-600">Principal, RMCP ACADEMY</p>
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
                    src={principleImag}
                    alt="Principle Gurjant Khaira"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-md -mt-10 w-4/5 border-t-2 border-sky-500 z-20">
                <h3 className="text-xl font-bold text-gray-800">
                  Mr. Gurjant Khaira
                </h3>
                <p className="text-sky-700 font-medium mb-2">Principal</p>
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

export default PrincipleMessage;
