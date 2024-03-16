import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../utils/firebaseConfig";
import { toast } from "react-hot-toast";
import { SpinnerCircular } from "spinners-react";
import { createUser } from "../../utils/createUser";
import PasswordReset from "./PasswordReset";

const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);

  const googleSignIn = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        createUser(user.displayName, user.email, user.photoURL);
        localStorage.setItem("user", user.uid);
        toast.success("Signed in successfully!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Something went wrong!!!");
      });

  const [emailCred, setEmailCred] = useState("");
  const [passwordCred, setPasswordCred] = useState("");

  const emailSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, emailCred, passwordCred)
      .then((userCredentials) => {
        const user = userCredentials.user;
        localStorage.setItem("user", user.uid);
        toast.success("Signed in");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Invalid email or password");
        setLoading(false);
      });
  };

  return (
    <>
      {reset ? (
        <PasswordReset controller={[reset, setReset]} />
      ) : (
        <section className="p-4">
          <div className="text-2xl font-bold mb-4">Login</div>
          <div
            className="flex items-center justify-center border-[1px] gap-3 py-2 rounded-lg border-black cursor-pointer"
            onClick={googleSignIn}
          >
            <i className="bi bi-google"></i>
            <div>Continue with Google</div>
          </div>
          <div className="text-center text-gray-500  py-1">or</div>
          <form onSubmit={(e) => emailSignin(e)}>
            <input
              type="email"
              className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
              placeholder="Email Address"
              value={emailCred}
              onChange={(e) => setEmailCred(e.target.value)}
              required
            />
            <input
              type="password"
              className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
              placeholder="Password"
              value={passwordCred}
              onChange={(e) => setPasswordCred(e.target.value)}
              required
            />
            <div
              onClick={() => setReset(true)}
              className="text-sm mt-2 py-3 cursor-pointer font-bold"
            >
              Forgot password?
            </div>
            <button
              className="bg-black w-full text-white text-lg rounded-lg py-2 mt-3"
              disabled={loading && true}
            >
              {loading ? (
                <div className="flex justify-center">
                  <SpinnerCircular size={30} color="#ffffff" />
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default Signin;
