import React, {useState } from "react";
import Button from "./Button";
import { FaLock } from "react-icons/fa";

const PinModal = ({ onClose, onConfirm }) => {
  const [pin, setPin] = useState("");

  const handleConfirm = () => {
    if (pin.length !== 4) return;
    onConfirm?.();
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <FaLock className="text-blue-600 text-2xl" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center">
          Enter Transaction PIN
        </h2>

        <p className="text-slate-500 text-center mt-2 mb-6">
          Please enter your 4-digit PIN to confirm this transaction.
        </p>

        <input
          type="password"
          maxLength={4}
          placeholder="••••"
          value={pin}
          onChange={(e) => {
            const value = e.target.value;
             if(/^\d*$/.test(value)){
              setPin(value);
             }
          }}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-center text-2xl tracking-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4 mt-6">
          <Button
            text="Cancel"
            variant="danger"
            fullWidth
            onClick = {onClose}
          />

          <Button
            text="Confirm"
            onClick={handleConfirm}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default PinModal;