import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/customer/login",
        {
          email,
          password,
        }
      );

      if (response.data) {
        alert("Login successful!");
        navigate("/home"); // Redirect to the homepage
      } else {
        alert("Login faild!");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Incorrect password. Please try again.");
      } else if (error.response && error.response.status === 404) {
        alert(
          "You are not a registered customer. Please register and login to place your order."
        );
        navigate("/register");
      } else {
        alert("An error occurred. Please try again later.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 sm:p-10 md:p-12">
          <h1 className="text-2xl font-bold text-center text-blue-900">
            Welcome Back!
          </h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Sign in to continue to your account
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm px-4 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm px-4 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-500">
              Don’t have an account yet?{" "}
              <a
                href="/register"
                className="font-medium text-indigo-600 hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
