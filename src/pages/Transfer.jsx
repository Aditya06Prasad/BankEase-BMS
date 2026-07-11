import React, { useState } from "react";

import PinModal from "../components/PinModal";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Transfer = () => {
  const [showPinModal, setShowPinModal] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    recipientName: "",
    accNum: "",
    ifscCode: "",
    amount: "",
  });

  const handleChange = (e) => {
    setSuccess("");
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.recipientName ||
      !formData.accNum ||
      !formData.ifscCode ||
      !formData.amount
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (!formData.recipientName.trim()) {
      setError("Please enter a valid recipient name.");
      return;
    }
    const ifscPattern = /^[A-Z]{4}0[A-Z0-9]{6}$/;

    if (!ifscPattern.test(formData.ifscCode.toUpperCase())) {
      setError("Please enter a valid IFSC code.");
      return;
    }
    setError("");
    setShowPinModal(true);
  };

  const handleTransferSuccess = () => {
    setShowPinModal(false);
    setSuccess("Money Transferred Successfully");
    setError("");

    setFormData({
      recipientName: "",
      accNum: "",
      ifscCode: "",
      amount: "",
    });
  };
  return (
    <main className="p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-2">Transfer Money</h1>

        <p className="text-gray-500 mb-6">
          Send money securely to another bank account.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <InputField
            label="Recipient Name"
            id="recipientName"
            placeholder="Enter recipient name"
            value={formData.recipientName}
            onChange={handleChange}
          />

          <InputField
            label="Account Number"
            id="accNum"
            type="number"
            placeholder="Enter Account Number"
            value={formData.accNum}
            onChange={handleChange}
          />

          <InputField
            label="IFSC Code"
            id="ifscCode"
            placeholder="Enter IFSC Code"
            value={formData.ifscCode}
            onChange={handleChange}
          />

          <InputField
            label="Amount"
            id="amount"
            type="number"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
          />
          {success && <p className="text-green-600 text-sm">{success}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button text="Transfer Money" type="submit" fullWidth />
        </form>
      </div>

      {showPinModal && (
        <PinModal
          onClose={() => setShowPinModal(false)}
          onConfirm={handleTransferSuccess}
        />
      )}
    </main>
  );
};

export default Transfer;
