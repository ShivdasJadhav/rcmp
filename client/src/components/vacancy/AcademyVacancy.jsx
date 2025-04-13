import React, { useEffect, useState } from "react";
import {
  Calendar,
  Briefcase,
  Target,
  User,
  X,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import axios from "axios";
import { API } from "../../assets/constant";
import { schoolInfo } from "../../assets/constant";

const AcademyVacancy = () => {
  const [vacancies, setVacancies] = useState(null);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  const ContactInfoSection = () => (
    <div className="bg-blue-50 p-6 rounded-lg mt-6 ">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Contact for Inquiries
      </h3>

      <div className="space-y-4">
        {/* Phone Numbers */}
        <div className="flex items-center">
          <Phone className="mr-3 text-blue-600" />
          <div>
            <p className="font-medium text-gray-700">Contact Numbers:</p>
            <a
              key={1}
              href={`tel:${schoolInfo.phone}`}
              className="text-blue-800 hover:text-blue-600 block"
            >
              {schoolInfo.phone}
            </a>
            <a
              key={2}
              href={`tel:${schoolInfo.phone}`}
              className="text-blue-800 hover:text-blue-600 block"
            >
              {schoolInfo.phone1}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <Mail className="mr-3 text-blue-600" />
          <div>
            <p className="font-medium text-gray-700">Email:</p>
            <a
              href={`mailto:${schoolInfo.email}`}
              className="text-blue-800 hover:text-blue-600"
            >
              {schoolInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Inquiry Button */}
      <div className="mt-6">
        <a
          href={`mailto:${schoolInfo.email}`}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Mail className="mr-2" /> Send your Resume/CV
        </a>
      </div>
    </div>
  );

  const fetchVacancies = async () => {
    try {
      const res = await axios.get(`${API}/api/jobs`);
      if (res.status !== 200) return alert("❌ Failed to fetch vacancies");
      setVacancies(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  };

  const fetchVacancy = async (id) => {
    try {
      const res = await axios.get(`${API}/api/jobs/${id}`);
      if (res.status !== 200) return alert("❌ Failed to fetch vacancy");
      setSelectedVacancy(res.data);
    } catch (error) {
      console.error("Error fetching vacancy:", error);
    }
  };
  useEffect(() => {
    fetchVacancies();
  }, []);

  return (
    <div className="bg-white p-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800">Current Job</span>
          <span className="text-sky-600"> Openings</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore our career opportunities and apply for positions that match
          your skills and interests.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {vacancies &&
          vacancies.map((vacancy) => (
            <div
              key={vacancy._id}
              className="border rounded-lg p-6 bg-white shadow-md relative hover:shadow-xl transition-all duration-300"
            >
              {/* Date Posted - Top Right */}
              <div className="absolute top-4 right-4 flex items-center text-gray-500">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">
                  {new Date(vacancy.updatedAt).toLocaleDateString()}
                </span>
              </div>

              {/* Job Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {vacancy.jobTitle}
                </h2>
                <p className="text-gray-600 mb-4">{vacancy.jobDescription}</p>

                {/* Read More Button */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => fetchVacancy(vacancy._id)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More...
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Vacancy Details Modal */}
      {selectedVacancy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 md:w-3/4 max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVacancy(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            {/* Detailed Job Information */}
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedVacancy.jobTitle}
                </h2>
                <p className="text-gray-600">
                  {selectedVacancy.jobDescription}
                </p>
              </div>

              {/* Job Details Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Key Responsibilities */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Target className="mr-2 text-blue-500" /> Key
                    Responsibilities
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedVacancy.keyResponsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <User className="mr-2 text-blue-500" /> Qualifications &
                    Requirements
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedVacancy.qualificationsAndRequirements.map(
                      (qual, index) => (
                        <li key={index}>{qual}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Employment Type */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="mr-2 text-blue-500" /> Employment
                  Details
                </h3>
                <p className="text-gray-700">
                  <strong>Type:</strong> {selectedVacancy.employmentType}
                </p>
              </div>
              {/* Posted Date */}
              <div className="text-right mt-6 text-gray-500 flex justify-end items-center">
                <Calendar size={16} className="mr-2" />
                <p>
                  Posted on:{" "}
                  {new Date(selectedVacancy.updatedAt).toLocaleDateString()}
                </p>
              </div>

              {/* Contact Information */}
              <ContactInfoSection />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AcademyVacancy;
