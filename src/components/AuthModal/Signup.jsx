import React,{useState} from 'react'
import { signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth";
import { auth, provider } from "../../utils/firebaseConfig";
import {toast} from "react-hot-toast"

const Signup = () => {
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const signupWithEmailandPassword = () =>{
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredentials)=>{
            console.log(userCredentials.user)
            toast.success("User created successfully")
        })
        .catch(err=>{
            toast.error("Something went wrong")
        })
    }

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
return (
<section className="p-4">
    <div className="text-2xl font-bold mb-4">Signup</div>
    <div className="flex items-center justify-center border-[1px] gap-3 py-2 rounded-lg border-black cursor-pointer"
        onClick={googleSignIn}>
        <i className="bi bi-google"></i>
        <div>Continue with Google</div>
    </div>
    <div className="text-center text-gray-500  py-1">or</div>
    <input type="text" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-2 shadow-inner rounded-lg"
        placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}
    />
    <input type="text" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
        placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}
    />
    <input type="text" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
        placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}
    />
    <input type="text" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
        placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}
    />
    <div className="flex gap-3 mt-3">
        <input type="checkbox" className="w-4" name="" id="consent" />
        <div className="text-xs">
            <label htmlFor="consent">
                I’d like to receive awesome e-mails and updates from
                GiveUmma
            </label>
        </div>
    </div>
    <button onClick={signupWithEmailandPassword} className="bg-black w-full text-white text-lg rounded-lg py-2 mt-3 ">
        Signup
    </button>
    <div className="text-sm text-center mt-3">
        Already have an account? Login
    </div>
    <div className="text-sm text-center mt-3">
        By continuing, you agree with GiveUmma's Terms of Use and
        Privacy Policy.
    </div>
</section>
)
}

export default Signup