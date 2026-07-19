import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Button";
import InputField from "../components/InputField.jsx";
import PasswordField from "../components/PasswordField.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked");
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>

      <p className="text-slate-500 mt-2 mb-8">
        Login to access your banking dashboard.
      </p>

      <form autoComplete="off" onSubmit={handleLogin}>
        <InputField
          label="Email Address"
          type="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField
          label="Password"
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between mt-3 mb-5">
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

          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="flex justify-center mt-3 mb-4">
          <Button text="Login" type="submit" />
        </div>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-slate-300"></div>

          <span className="px-4 text-sm text-slate-500">OR</span>

          <div className="flex-1 border-t border-slate-300"></div>
        </div>

        <p className="text-center text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
