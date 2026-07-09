import React, { useState } from "react";

import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Empty field validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phone
    ) {
      setError("Please fill in all the details.");
      return;
    }

    // Email validation
    if (
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      setError("Please enter a valid email.");
      return;
    }

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords didn't match.");
      return;
    }

    console.log(formData);

    setSuccess("Registration successful!");

    // Clear the form
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField
          label="Email Address"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <PasswordField
          label="Password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <PasswordField
          label="Confirm Password"
          id="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <InputField
          label="Phone Number"
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />

        <Button text="Register" type="submit" />

        {error && (
          <p className="mt-3 text-sm text-red-500">
            {error}
          </p>
        )}

        {success && (
          <p className="mt-3 text-sm text-green-600">
            {success}
          </p>
        )}
      </form>
    </AuthLayout>
  );
};

export default Register;