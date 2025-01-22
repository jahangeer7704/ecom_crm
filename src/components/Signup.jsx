import React, { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,15}$/; 
    const passwordMinLength = 6;

    if (!formData.name) {
      setError("Name is required.");
      return;
    }
    if (!emailRegex.test(formData.emailOrPhone) && !phoneRegex.test(formData.emailOrPhone)) {
      setError("Please enter a valid email address or phone number.");
      return;
    }
    if (formData.password.length < passwordMinLength) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    alert("Signup successful!");
    setFormData({ name: "", emailOrPhone: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className="hidden md:block">
          <img
            src="public/image.png" 
            alt="Signup illustration"
            className="w-full h-auto"
          />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
          <p>Enter your datails below</p>
        
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="W-full text-black py-2 px-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
              />
            </div>
            <div>
              
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleInputChange}
                placeholder="Enter your email or phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-blue-500">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
