import React, { useState } from "react";
import axios from "axios";
import {
  FileText,
  Camera,
  UploadCloud,
  AlertCircle,
  PersonStanding,
  ContactRound,
  GraduationCap,
} from "lucide-react";
import { API } from "../../assets/constant";
import { toast } from "react-toastify";

const PrimaryWingAdmission = () => {
  const [formData, setFormData] = useState({
    // Student Details
    studentFirstName: "",
    studentMiddleName: "",
    studentLastName: "",
    studentAadharNo: "",
    studentAadharFile: null,
    studentPhoto: null,
    studentBirthCertificate: null,
    admissionClass: "",

    // Father Details
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherAadharFile: null,
    fatherPhoto: null,

    // Mother Details
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherAadharFile: null,
    motherPhoto: null,

    // Additional details
    domicileCertificate: null,
    contactNo: "",
    abcCard: null,
    abcId: "",
  });

  const [errors, setErrors] = useState({});

  const validateFileSize = (file) => {
    // Maximum file size: 2MB
    return file && file.size <= 2 * 1024 * 1024;
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];

    if (!validateFileSize(file)) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "File size must be less than 2MB",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }));

    // Clear previous error for this field
    if (errors[fieldName]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      // Student Details
      studentFirstName: "",
      studentMiddleName: "",
      studentLastName: "",
      studentAadharNo: "",
      studentAadharFile: null,
      studentPhoto: null,
      studentBirthCertificate: null,
      admissionClass: "",

      // Father Details
      fatherFirstName: "",
      fatherMiddleName: "",
      fatherLastName: "",
      fatherAadharFile: null,
      fatherPhoto: null,

      // Mother Details
      motherFirstName: "",
      motherMiddleName: "",
      motherLastName: "",
      motherAadharFile: null,
      motherPhoto: null,

      // Additional details
      domicileCertificate: null,
      contactNo: "",
      abcCard: null,
      abcId: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate details for submission
    if (
      !formData.studentFirstName ||
      !formData.studentMiddleName ||
      !formData.studentLastName ||
      !formData.studentAadharNo ||
      !formData.fatherFirstName ||
      !formData.fatherMiddleName ||
      !formData.fatherLastName ||
      !formData.motherFirstName ||
      !formData.motherMiddleName ||
      !formData.motherLastName ||
      !formData.abcId ||
      !formData.admissionClass
    ) {
      toast.warn("Please fill in all required fields.");
      return;
    }

    if (isNaN(formData.contactNo) || formData.contactNo.length !== 10) {
      toast.warn("Please enter a valid contact number.");
      return;
    }

    if (
      !formData.studentAadharFile ||
      !formData.fatherAadharFile ||
      !formData.motherAadharFile
    ) {
      toast.warn("Please upload Aadhar files.");
      return;
    }

    if (
      !formData.studentPhoto ||
      !formData.fatherPhoto ||
      !formData.motherPhoto
    ) {
      toast.warn("Please upload photos.");
      return;
    }

    if (
      !formData.domicileCertificate ||
      !formData.studentBirthCertificate ||
      !formData.abcCard
    ) {
      toast.warn("Please upload additional documents.");
      return;
    }

    const toastId = toast.loading("Submitting Admission Form...");
    // Create FormData for file upload
    const formSubmitData = new FormData();

    // Append all form fields to FormData
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formSubmitData.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        `${API}/api/admission`,
        formSubmitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.update(toastId, {
          render: "Admission form submitted successfully!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });
        handleReset();
      } else {
        throw new Error("Failed to submit admission form");
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Failed to submit admission form",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
      console.error("Submission failed", error);
    }
  };

  const renderNameInputs = (prefix, label) => (
    <div className="grid md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sky-800 mb-2">{label} First Name</label>
        <input
          type="text"
          name={`${prefix}FirstName`}
          onChange={handleInputChange}
          className="w-full p-2 border rounded bg-white focus:outline-sky-300"
          required
        />
      </div>
      <div>
        <label className="block text-sky-800 mb-2">{label} Middle Name</label>
        <input
          type="text"
          name={`${prefix}MiddleName`}
          onChange={handleInputChange}
          className="w-full p-2 border rounded bg-white focus:outline-sky-300"
        />
      </div>
      <div>
        <label className="block text-sky-800 mb-2">{label} Last Name</label>
        <input
          type="text"
          name={`${prefix}LastName`}
          onChange={handleInputChange}
          className="w-full p-2 border rounded bg-white focus:outline-sky-300"
          required
        />
      </div>
    </div>
  );

  const renderFileUpload = (fieldName, label, icon = <FileText />) => (
    <div>
      <label className="block text-sky-800 mb-2 flex items-center my-2 gap-2">
        {icon} {label}
      </label>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => handleFileChange(e, fieldName)}
        className="w-full p-2 border rounded bg-white file:mr-4 file:rounded file:border-0 file:bg-gray-200 file:px-4 file:py-2"
      />
      {errors[fieldName] && (
        <p className="text-orange-500 flex items-center">
          <AlertCircle className="mr-2" /> {errors[fieldName]}
        </p>
      )}
    </div>
  );

  return (
    <div className="relative bg-white p-6 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Details Section */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-sky-700 flex items-center gap-2 my-2">
            <PersonStanding /> Student Details
          </h2>
          {renderNameInputs("student", "Student")}

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sky-800 mb-2 flex items-center">
                <GraduationCap className="mr-2" /> Admission Class
              </label>
              <select
                name="admissionClass"
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-white focus:outline-sky-300"
                required
              >
                <option value="">Select Class</option>
                <option value="1">P.N.C</option>
                <option value="2">N.C</option>
                <option value="3">K.G</option>
              </select>
            </div>
            <div>
              <label className="block text-sky-800 mb-2">
                Student Aadhar Number
              </label>
              <input
                type="text"
                name="studentAadharNo"
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-white focus:outline-sky-300"
                required
              />
            </div>
            {renderFileUpload("studentAadharFile", "Student Aadhar Document")}
            {renderFileUpload(
              "studentBirthCertificate",
              "Student Birth Certificate"
            )}

            {renderFileUpload(
              "studentPhoto",
              "Student Passport Photo",
              <Camera />
            )}
          </div>
        </div>

        {/* Father Details Section */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-sky-700 flex items-center gap-2 my-2">
            <ContactRound /> Father Details
          </h2>
          {renderNameInputs("father", "Father")}

          {renderFileUpload("fatherAadharFile", "Father Aadhar Document")}
          {renderFileUpload("fatherPhoto", "Father Passport Photo", <Camera />)}
        </div>

        {/* Mother Details Section */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-sky-700 flex items-center gap-2 my-2">
            <ContactRound /> Mother Details
          </h2>
          {renderNameInputs("mother", "Mother")}
          {renderFileUpload("motherAadharFile", "Mother Aadhar Document")}
          {renderFileUpload("motherPhoto", "Mother Passport Photo", <Camera />)}
        </div>

        {/* Additional Documents Section */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-sky-700 flex items-center gap-2 my-2">
            <FileText /> Additional Details
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {renderFileUpload("domicileCertificate", "Domicile Certificate")}
            {renderFileUpload("abcCard", "ABC Card")}
            <div>
              <label className="block text-sky-800 mb-2">ABC Id</label>
              <input
                type="text"
                name={`abcId`}
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-white focus:outline-sky-300"
                required
              />
            </div>
            <div>
              <label className="block text-sky-800 mb-2">Contact Number</label>
              <input
                type="tel"
                name={`contactNo`}
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-white focus:outline-sky-300"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition-colors flex items-center"
          >
            <UploadCloud className="mr-2" /> Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrimaryWingAdmission;
