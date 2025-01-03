import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  // Validation functions
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phoneNo) => /^0[0-9]{9}$/.test(phoneNo);
  const validateAddress = (address) => /^[0-9a-zA-Z,\/\s]+$/.test(address);
  const validatePassword = (password) => password.length === 8;

  const handleNameChange = (e) => {
    const input = e.target.value;
    setName(input);

    if (!validateName(input)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name should only contain letters and spaces",
      }));
    } else {
      setErrors((prevErrors) => {
        const { name, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);

    if (!validateEmail(input)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    setPhone(input);

    if (!validatePhone(input)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNo: "Phone number should start with 0 and contain 10 digits",
      }));
    } else {
      setErrors((prevErrors) => {
        const { phoneNo, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleAddressChange = (e) => {
    const input = e.target.value;
    setAddress(input);

    if (!validateAddress(input)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: "Invalid address",
      }));
    } else {
      setErrors((prevErrors) => {
        const { address, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    if (!validatePassword(input)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be exactly 8 characters long",
      }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await axios.get(`http://localhost:8080/customer/checkEmail`, {
        params: { email }
      });
      return response.data.exists; // Assuming the backend returns { exists: true/false }
    } catch (error) {
      console.error("Error checking email existence:", error);
      return false; // Return false if there's an error
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!name || !validateName(name)) validationErrors.name = "Name is required and should only contain letters";
    if (!email || !validateEmail(email)) validationErrors.email = "Valid email is required";
    if (!phoneNo || !validatePhone(phoneNo)) validationErrors.phoneNo = "Phone number is required and should start with 0 and contain 10 digits";
    if (!address || !validateAddress(address)) validationErrors.address = "Valid address is required";
    if (!password || !validatePassword(password)) validationErrors.password = "Password is required and must be exactly 8 characters long";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      setEmailError("Email already exists.");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await axios.post("http://localhost:8080/customer/addCustomer", {
        name,
        email,
        phoneNo,
        address,
        password,
      });
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Error during registration: " + error.response?.data || error.message);
    }
  };

  
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8 space-y-6">
          <h1 className="text-2xl font-bold text-blue-900 text-center">
            Create an Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Naduni Harshika"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                value={name}
                onChange={handleNameChange}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div>
              <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                placeholder="0711306789"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                value={phoneNo}
                onChange={handlePhoneChange}
                required
              />
              {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Your Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="1/18, Opatha, Galle."
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                value={address}
                onChange={handleAddressChange}
                required
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline font-medium">
              Login here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
