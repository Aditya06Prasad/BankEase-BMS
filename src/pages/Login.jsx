import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../components/Button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex bg-slate-100">
      {" "}
      {/* Left Section (40%) */}
      <div className="w-[35%] bg-blue-600 flex flex-col justify-center items-center text-white p-12">
        <h1 className="text-5xl font-bold mb-4">BankEase</h1>
        <p className="text-xl text-blue-100 text-center max-w-md">
          Secure, Simple and Smart Banking for Everyone.
        </p>
      </div>
      {/* Right Section (60%) */}
      <div className="w-[65%] bg-white flex justify-center items-center">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>

          <p className="text-slate-500 mt-2 mb-8">
            Login to access your banking dashboard.
          </p>
          <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // condition ? valueIfTrue : valueIfFalse
                  id="password"
                  placeholder="Password"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="flex items-center justify-between mt-3 mb-5">
                {/* // Remember me */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-slate-600 cursor-pointer"
                  >
                    Remember Me
                  </label>
                </div>
                {/*  Forgot Password */}
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Forgot Password
                </Link>
              </div>
              <Button text="Login" type="submit"></Button> {/* By Using Button components */}
            </div>
            <div className="flex items-center my-2">
              <div className="flex-1 border-t border-slate-300"></div>
              <span className="px-4 text-sm text-slate-500">OR</span>
              <div className="flex-1 border-t border-slate-300"></div>
            </div>
          </form>
          <div className="text-center gap-3.5">
              <p className="text-slate-600 py-2"> Don't have an account?{" "}</p>
              <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-700">
                  Register
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
