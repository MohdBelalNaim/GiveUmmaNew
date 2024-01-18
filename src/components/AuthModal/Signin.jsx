import React,{useState} from 'react'
import { signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../utils/firebaseConfig";
import {toast} from "react-hot-toast"

const Signin = () => {
    const googleSignIn = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        hideAuth()
        setMenu(false)
      })
      .catch((error) => {
        console.log(error);
        hideAuth()
    });

    const[emailCred,setEmailCred] = useState("")
    const[passwordCred,setPasswordCred] = useState("")

    const emailSignin = () =>{
        signInWithEmailAndPassword(auth,emailCred,passwordCred)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log(user)
            toast.success("Signed in")
        })
        .catch(err=>{
            console.log(err)
            toast.error("Invalid email or password")
        })
    }
return (
<section className="p-4">
    <div className="text-2xl font-bold mb-4">Login</div>
    <div className="flex items-center justify-center border-[1px] gap-3 py-2 rounded-lg border-black cursor-pointer"
        onClick={googleSignIn}>
        <i className="bi bi-google"></i>
        <div>Continue with Google</div>
    </div>
    <div className="text-center text-gray-500  py-1">or</div>
    <input type="text" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
        placeholder="Email Address" value={emailCred} onChange={e=>setEmailCred(e.target.value)}
    />
    <input type="text" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
        placeholder="Password" value={passwordCred} onChange={e=>setPasswordCred(e.target.value)}
    />
    <button onClick={emailSignin} className="bg-black w-full text-white text-lg rounded-lg py-2 mt-3">
        Login
    </button>
    <div className="text-sm text-center mt-3">
        Don't have an account? Signup
    </div>
</section>
)
}

export default Signin