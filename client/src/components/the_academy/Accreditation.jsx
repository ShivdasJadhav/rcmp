import React from "react";
import cbse_bord from "../../assets/img/cbse_bord.png";
const Accreditation = () => {
  // Sample accreditation data - replace with actual accreditations
  const accreditation = {
    name: "CBSE Affiliation",
    logo: cbse_bord,
    issuedBy: "Central Board of Secondary Education",
    description:
      "Full recognition as a Senior Secondary School meeting all CBSE quality standards and curriculum requirements.",
    category: "Educational Board",
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="px-3 py-1 rounded">Accreditations</span>
            <span className="text-sky-600"> & Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            RMCP Academy holds prestigious accreditations that validate our
            commitment to educational excellence, quality assurance, and
            continuous improvement
          </p>
        </div>

        {/* Quality Standards Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="mb-6 md:mb-0 md:w-2/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                {/* Logo Section */}
                <div className="bg-sky-50 p-2 flex items-center justify-center md:w-1/3">
                  <img
                    src={accreditation.logo}
                    alt={`${accreditation.name} logo`}
                    className="w-48 h-48 object-contain rounded-full"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-gray-800">
                      {accreditation.name}
                    </h4>
                    <span className="bg-orange-100 text-orange-600 text-xs font-semibold py-1 px-2 rounded-full">
                      {accreditation.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {accreditation.description}
                  </p>

                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500">Issued By:</p>
                        <p className="font-medium text-gray-700">
                          {accreditation.issuedBy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-400">
              <h4 className="font-semibold text-sky-700 mb-3">Key Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-2">•</div>
                  <span className="text-gray-600 text-sm">
                    Standardized quality education
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-2">•</div>
                  <span className="text-gray-600 text-sm">
                    Recognition by higher education institutions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-2">•</div>
                  <span className="text-gray-600 text-sm">
                    Regular quality audits and improvements
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-2">•</div>
                  <span className="text-gray-600 text-sm">
                    Internationally recognized standards
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accreditation Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-sky-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Our Accreditation Journey
          </h3>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="bg-orange-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="w-1 h-full bg-sky-200 my-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Application & Self-Assessment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Rigorous internal evaluation against quality parameters
                      and submission of comprehensive documentation.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="bg-orange-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="w-1 h-full bg-sky-200 my-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      External Verification
                    </h4>
                    <p className="text-gray-600 text-sm">
                      On-site inspections by accreditation authorities
                      evaluating facilities, teaching methods, and adherence to
                      standards.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="bg-orange-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="w-1 h-full bg-sky-200 my-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Quality Improvement Plan
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Implementation of recommended enhancements to further
                      strengthen educational delivery and infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-orange-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Certification & Renewal
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Receipt of formal accreditation and commitment to ongoing
                      quality assurance through periodic reviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-sky-50 p-6 rounded-lg">
              <h4 className="font-semibold text-sky-700 mb-4">
                Our Quality Framework
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 relative">
                      <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <div className="relative w-4 h-4 bg-sky-500 rounded-full"></div>
                    </div>
                    <h5 className="font-medium text-gray-800">
                      Academic Excellence
                    </h5>
                  </div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 relative">
                      <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <div className="relative w-4 h-4 bg-sky-500 rounded-full"></div>
                    </div>
                    <h5 className="font-medium text-gray-800">
                      Infrastructure & Resources
                    </h5>
                  </div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 relative">
                      <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <div className="relative w-4 h-4 bg-sky-500 rounded-full"></div>
                    </div>
                    <h5 className="font-medium text-gray-800">
                      Teaching Quality
                    </h5>
                  </div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 relative">
                      <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <div className="relative w-4 h-4 bg-sky-500 rounded-full"></div>
                    </div>
                    <h5 className="font-medium text-gray-800">
                      Student Outcomes
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
