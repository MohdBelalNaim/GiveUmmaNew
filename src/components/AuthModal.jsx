import React, { useState } from "react";
import Signup from "./AuthModal/Signup";
import Signin from "./AuthModal/Signin";

const AuthModal = () => {
  const [signup, setSignup] = useState(true);

  return (
    <div className="bg-white w-[36%] max-sm:w-[96%] rounded-xl p-4 relative top-5 animate__animated animate__bounceIn">
      <div className="grid grid-cols-2">
        <div
          className="font-bold border-b-2 text-center py-3 cursor-pointer"
          onClick={() => setSignup(false)}
        >
          Login
        </div>
        <div
          className="font-bold border-b-2 text-center py-3 cursor-pointer"
          onClick={() => setSignup(true)}
        >
          Signup
        </div>
      </div>
      {signup ? <Signup /> : <Signin />}
    </div>
  );
};

export default AuthModal;
