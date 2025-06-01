import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the highlighted errors.");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Sending message...");

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.data.success) {
        toast.dismiss(); // dismiss loading
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        toast.dismiss();
        toast.error("❌ Failed to send message.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.dismiss();
      toast.error("❌ Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white border border-gray-300 shadow-xl rounded-xl p-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 flex items-center justify-center gap-2 mb-10">
          Get in Touch <span className="text-2xl">🏠</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-1">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 p-3 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-1">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-1">Phone Number</label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className={`w-full pl-10 p-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                  placeholder="+91 9876543210"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-1">Message</label>
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full pl-10 p-3 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none`}
                  placeholder="Tell us what you're looking for…"
                ></textarea>
              </div>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 text-white font-semibold rounded-md transition duration-300 ${
              isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
