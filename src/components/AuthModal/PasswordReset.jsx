import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { FaArrowLeft, FaRegEnvelope } from "react-icons/fa";
import { auth } from "../../utils/firebaseConfig";
import { SpinnerCircular } from "spinners-react";

const PasswordReset = ({ controller }) => {
  const [sent, setSent] = useState("");
  const [email, setEmail] = useState("");
  const [reset, setReset] = controller;
  const [loading, setLoading] = useState(false);

  function resetPassword() {
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
          setSent(true);
          setLoading(false)
      })
      .catch((err) => {
          console.log(err);
          setLoading(true)
      });
  }
  return (
    <>
      {sent ? (
        <section className="p-4">
          <div className="text-lg font-bold text-center">
            We have sent you an email with the link to reset your GiveUmmah
            password
          </div>
          <div className="text-7xl py-5 flex justify-center">
            <FaRegEnvelope />
          </div>
          <button
            onClick={() => setSent(setReset(false))}
            className="w-full bg-black text-white text-center py-3 rounded-lg mt-4"
          >
            Go back to login
          </button>
        </section>
      ) : (
        <section className="p-4">
          <div className="text-2xl font-bold">Reset password</div>
          <div className="text-sm py-2">
            Please enter the email associated with your GiveUmmah account
          </div>
          <input
            type="text"
            className="border border-gray-400 mt-3 w-full px-4 py-3 rounded-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={() => resetPassword()}
            className="w-full bg-black text-white text-center py-3 rounded-lg mt-4"
          >
            {loading ? (
              <div className="flex justify-center">
                <SpinnerCircular size={30} color="#ffffff" />
              </div>
            ) : (
              "Continue"
            )}
          </button>
          <div
            onClick={() => setReset(false)}
            className="flex items-center justify-center cursor-pointer gap-4 mt-5"
          >
            <FaArrowLeft /> Go back
          </div>
        </section>
      )}
    </>
  );
};

export default PasswordReset;
