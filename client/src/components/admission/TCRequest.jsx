import { useState } from "react";
import { CreditCard, FileText } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../../assets/constant";
import { loadRazorpayScript } from "../../assets/constant";
export default function TCRequest() {
  const [formData, setFormData] = useState({
    studentName: "",
    admissionNumber: "",
    aadharUid: "",
    parentName: "",
    reason: "",
    contact: "",
    email: "",
  });

  const handleReset = () => {
    setFormData({
      studentName: "",
      admissionNumber: "",
      aadharUid: "",
      parentName: "",
      reason: "",
      contact: "",
      email: "",
    });
  };
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkTcRequests = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.studentName ||
      !formData.admissionNumber ||
      !formData.aadharUid ||
      !formData.parentName ||
      !formData.reason ||
      !formData.contact ||
      !formData.email
    ) {
      toast.warn("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    if (isNaN(formData.contact) || formData.contact.length !== 10) {
      toast.warn("Please enter a valid 10-digit phone number.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        `${API}/api/tc-request/admission-number/${formData.admissionNumber}`
      );

      if (res.status === 200 && res.data < 2) {
        // const isScriptLoaded = await loadRazorpayScript();
        // if (!isScriptLoaded) {
        //   toast.error("Failed to load Razorpay. Please try again.");
        //   setLoading(false);
        //   return;
        // }

        // const orderRes = await axios.post(`${API}/api/create-razorpay-order`, {
        //   amount: 50000,
        //   currency: "INR",
        //   receipt: `rcptid_${formData.admissionNumber}`,
        // });

        // const { id: orderId, amount } = orderRes.data;

        // const options = {
        //   key: "RAZORPAY_KEY_ID", // Replace with your actual key
        //   amount,
        //   currency: "INR",
        //   name: "Your School/College Name",
        //   description: "Transfer Certificate Request",
        //   order_id: orderId,
        //   handler: async function (response) {
        //     const paymentData = {
        //       ...formData,
        //       paymentStatus: "paid",
        //       transactionId: response.razorpay_payment_id,
        //     };
        //     await handleSubmit(paymentData);
        //     setLoading(false);
        //   },
        //   prefill: {
        //     name: formData.studentName,
        //     email: formData.email,
        //     contact: formData.contact,
        //   },
        //   theme: {
        //     color: "#0ea5e9",
        //   },
        //   modal: {
        //     ondismiss: () => {
        //       toast.info("Payment cancelled. No data saved.");
        //       setLoading(false);
        //     },
        //   },
        // };

        // const rzp = new Razorpay(options);
        // rzp.open();
        await handleSubmit({
          ...formData,
          paymentStatus: "pending",
          transactionId: "NA",
        });
        setLoading(false);
      } else {
        toast.warn("You have reached your academic requests!");
        setLoading(false);
      }
    } catch (err) {
      toast.error("Failed to check TC requests or initiate payment.");
      console.error(err);
      setLoading(false);
    }
  };

  const handleSubmit = async (data) => {
    const toastId = toast.loading("Submitting TC Request...");
    try {
      const res = await axios.post(`${API}/api/tc-request`, data);
      if (res.status === 201) {
        handleReset();
        toast.update(toastId, {
          render: "TC Requested successfully!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      } else {
        throw new Error("Failed to request TC");
      }
    } catch (err) {
      toast.update(toastId, {
        render: "Failed to Request TC!",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      console.error("Failed to Request TC", err);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gray-800"> Transfer </span>
          <span className="text-sky-600"> Certificate (TC) Request</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          "Fill in the details below to request a Transfer Certificate. Payment
          is required to process your request."
        </p>
      </div>

      <form
        onSubmit={checkTcRequests}
        className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-2xl"
      >
        <div className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="text"
            name="admissionNumber"
            placeholder="Admission Number"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="text"
            name="aadharUid"
            placeholder="Aadhar or UID No. of Student"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="text"
            name="parentName"
            placeholder="Parent/Guardian Name"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <textarea
            name="reason"
            placeholder="Reason for TC Request"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-full py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold transition 
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-sky-600 hover:bg-sky-700 text-white"
    }`}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              />
            </svg>
          ) : (
            <>
              <CreditCard size={20} /> Request for TC
            </>
          )}
        </button>
      </form>
    </section>
  );
}
