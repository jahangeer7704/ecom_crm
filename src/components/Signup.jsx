import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
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
    if (
      !emailRegex.test(formData.emailOrPhone) &&
      !phoneRegex.test(formData.emailOrPhone)
    ) {
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
  const inputStyle = "w-full border-b py-2 outline-none text-zinc-700";
  return (
    <>
      <div className="min-h-screen flex items-center bg-white">
        <div className="flex justify-between max-md:justify-center items-center w-full">
          <img src={"/image.png"} alt="" className="h-45 w-1/2 max-md:hidden" />
          <div className="w-full flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-[400px] flex flex-col items-center h-fit gap-6"
            >
              <div className="flex flex-col gap-1 w-full">
                <h2 className="text-3xl font-bold  mb-3 ">Create an Account</h2>
                <p className="text-zinc-500 text-sm font-light">
                  Enter your datails below
                </p>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className={inputStyle}
                />
                <input
                  type="text"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleInputChange}
                  placeholder="Enter email or Phone number"
                  className={inputStyle}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={inputStyle}
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <div class="flex flex-col items-start justify-between w-full gap-2">
                <button class="bg-red-500 text-white size-full  py-2 px-4 rounded hover:bg-red-600">
                  Login
                </button>
                <div className="relative flex items-center text-zinc-300 gap-1 w-full py-2">
                  <div className="h-[1px] w-full bg-zinc-300 "></div>
                  <p className=" absolute left-[50%] translate-x-[-50%] px-2 bg-white">
                    or
                  </p>
                </div>
                <button className="border rounded flex items-center justify-center w-full p-2 gap-4 text-zinc-700">
                  <FcGoogle className="text-xl" />
                  <p>Sign in with Google</p>
                </button>
              </div>
              <div className="flex items-center w-full">
                <p className="text-sm font-light">
                  Already have a account click{" "}
                  <a className="text-blue-600" href="/signin">
                    here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
