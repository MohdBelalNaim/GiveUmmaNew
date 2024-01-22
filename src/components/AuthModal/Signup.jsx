import React, { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../utils/firebaseConfig";
import { toast } from "react-hot-toast";
import { SpinnerCircular } from "spinners-react";
import { createUser } from "../../utils/createUser";

const Signup = ({ controller }) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authPopup, setAuthpopup] = controller;
  const [loading, setLoading] = useState(false);
  let fullname = firstName+" "+lastName
  
  const signupWithEmailandPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        toast.success("User created successfully");
        console.log(userCredentials);
        // localStorage.setItem("user",userCredentials.user.uid)
        createUser(fullname,email)
        setAuthpopup(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.type);
        toast.error("This email is either invalid or already in use");
        setLoading(false);
      });
  };

  const googleSignIn = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        createUser(user.displayName, user.email, user.photoURL)
        localStorage.setItem("user",user.email)
        toast.success("Signed in successfully!");
        setAuthpopup(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!");
      });
  return (
    <section className="p-4">
      <div className="text-2xl font-bold mb-4">Signup</div>
      <div
        className="flex items-center justify-center border-[1px] gap-3 py-2 rounded-lg border-black cursor-pointer"
        onClick={googleSignIn}
      >
        <i className="bi bi-google"></i>
        <div>Continue with Google</div>
      </div>
      <div className="text-center text-gray-500  py-1">or</div>
      <form onSubmit={(e) => signupWithEmailandPassword(e)}>
        <input
          type="text"
          className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-2 shadow-inner rounded-lg"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex gap-3 mt-3">
          <input type="checkbox" className="w-4" name="" id="consent" />
          <div className="text-xs">
            <label htmlFor="consent">
              I’d like to receive awesome e-mails and updates from GiveUmma
            </label>
          </div>
        </div>
        <button
          className="bg-black w-full text-white text-lg rounded-lg py-2 mt-3 "
          disabled={loading && true}
        >
          {loading ? (
            <div className="flex justify-center">
              <SpinnerCircular size={30} color="#ffffff" />
            </div>
          ) : (
            "Sign up"
          )}
        </button>
      </form>
      <div className="text-sm text-center mt-3">
        Already have an account? Login
      </div>
      <div className="text-sm text-center mt-3">
        By continuing, you agree with GiveUmma's Terms of Use and Privacy
        Policy.
      </div>
    </section>
  );
};

export default Signup;
