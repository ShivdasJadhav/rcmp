import axios from "axios";
import { X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { API } from "../assets/constant";

const AdmissionEnquiryForm = ({ setShowEnq }) => {
  const [formData, setFormData] = useState({
    admissionClass: "",
    studentName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dateOfBirth: "",
    fatherMobile: "",
    email: "",
    category: "",
    lastSchoolAttended: "",
    fatherOccupation: "",
    motherOccupation: "",
    address: "",
    referredBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    // validate
    if (
      !formData.admissionClass ||
      !formData.studentName ||
      !formData.fatherName ||
      !formData.motherName ||
      !formData.gender ||
      !formData.dateOfBirth ||
      !formData.fatherMobile ||
      !formData.email ||
      !formData.category ||
      !formData.lastSchoolAttended ||
      !formData.fatherOccupation ||
      !formData.motherOccupation ||
      !formData.address ||
      !formData.referredBy
    ) {
      toast.warn("Please fill in all required fields.");
      return;
    }
    const toastId = toast.loading("Submitting Enquiry...");
    try {
      await axios.post(`${API}/api/enquiry`, formData).then((res) => {
        if (res.status === 201) {
          toast.update(toastId, {
            render: "Enquiry form submitted successfully!",
            type: "success",
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
          });
          setShowEnq(false);
        } else {
          throw new Error("failed to submit the enquiry");
        }
      });
    } catch (err) {
      toast.update(toastId, {
        render: "Failed to Submit Enquiry!",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
      console.log("failed to submit the query", err);
    }
  };

  return (
    <div className="fixed top-0 z-50 overflow-scroll w-full bg-sky-800 py-12 flex items-center justify-center p-6 no-scrollbar">
      <div className="w-full max-w-2xl rounded-md h-[90vh] overflow-y-scroll no-scrollbar">
        <form
          onSubmit={handleSubmit}
          className="bg-sky-50 shadow-md rounded-lg p-8 space-y-6 relative"
        >
          <button
            type="button"
            onClick={() => setShowEnq(false)}
            className="absolute top-4 right-4 px-1 py-1"
          >
            <X className=" w-6 h-6 text-sky-800" />
          </button>
          <h2 className="text-2xl font-bold text-center text-sky-800 mb-6">
            Admission Enquiry Form
          </h2>

          {/* Admission Class */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label
                htmlFor="admissionClass"
                className="block text-gray-700 font-bold mb-2"
              >
                Admission Sought For Class *
              </label>
              <select
                id="admissionClass"
                name="admissionClass"
                value={formData.admissionClass}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              >
                <option value="">--select--</option>
                <option value="P.N.C">P.N.C</option>
                <option value="N.C">N.C</option>
                <option value="K.G">K.G</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>

            {/* Student Name */}
            <div className="col-span-2">
              <label
                htmlFor="studentName"
                className="block text-gray-700 font-bold mb-2"
              >
                Student Name *
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Father's Name */}
            <div className="col-span-2">
              <label
                htmlFor="fatherName"
                className="block text-gray-700 font-bold mb-2"
              >
                Father's Name *
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Mother's Name */}
            <div className="col-span-2">
              <label
                htmlFor="motherName"
                className="block text-gray-700 font-bold mb-2"
              >
                Mother's Name *
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Gender */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-bold mb-2">
                Gender *
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    className="form-radio text-sky-600"
                    required
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="form-radio text-sky-600"
                    required
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="col-span-2">
              <label
                htmlFor="dateOfBirth"
                className="block text-gray-700 font-bold mb-2"
              >
                Date of Birth *
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Father's Mobile No. */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="fatherMobile"
                className="block text-gray-700 font-bold mb-2"
              >
                Father's Mobile No. *
              </label>
              <input
                type="tel"
                id="fatherMobile"
                name="fatherMobile"
                value={formData.fatherMobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Email */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email-Id *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            {/* Category */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2"
              >
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              >
                <option value="">Select Category</option>
                <option value="GENERAL">GENERAL</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="SBC">SBC</option>
                <option value="MINORITY">MINORITY</option>
              </select>
            </div>

            {/* Last School Attended */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="lastSchoolAttended"
                className="block text-gray-700 font-bold mb-2"
              >
                Last School Attended
              </label>
              <input
                type="text"
                id="lastSchoolAttended"
                name="lastSchoolAttended"
                value={formData.lastSchoolAttended}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Father's Occupation */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="fatherOccupation"
                className="block text-gray-700 font-bold mb-2"
              >
                Father's Occupation
              </label>
              <select
                id="fatherOccupation"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Occupation</option>
                <option value="Business">Business</option>
                <option value="Govt.Employee">Govt. Employee</option>
                <option value="Army">Army</option>
                <option value="Ex-Army">Ex-Army</option>
                <option value="Doctor">Doctor</option>
                <option value="Advocate">Advocate</option>
                <option value="Engineer">Engineer</option>
                <option value="Teacher">Teacher</option>
                <option value="Shopkeeper">Shopkeeper</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Private Job">Private Job</option>
              </select>
            </div>

            {/* Mother's Occupation */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="motherOccupation"
                className="block text-gray-700 font-bold mb-2"
              >
                Mother's Occupation
              </label>
              <select
                id="motherOccupation"
                name="motherOccupation"
                value={formData.motherOccupation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Occupation</option>
                <option value="Business">Business</option>
                <option value="Govt.Employee">Govt. Employee</option>
                <option value="Army">Army</option>
                <option value="Ex-Army">Ex-Army</option>
                <option value="Doctor">Doctor</option>
                <option value="Advocate">Advocate</option>
                <option value="Engineer">Engineer</option>
                <option value="Teacher">Teacher</option>
                <option value="Shopkeeper">Shopkeeper</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Private Job">Private Job</option>
                <option value="Housewife">Housewife</option>
              </select>
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                rows={4}
                required
              />
            </div>

            {/* Referred By */}
            <div className="col-span-2">
              <label
                htmlFor="referredBy"
                className="block text-gray-700 font-bold mb-2"
              >
                Referred By
              </label>
              <input
                type="text"
                id="referredBy"
                name="referredBy"
                value={formData.referredBy}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionEnquiryForm;
