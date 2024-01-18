import React,{useState} from 'react'
import styles from '../assets/css/navbar.module.css'
import { FaTimes } from 'react-icons/fa'

import Signup from './AuthModal/Signup';
import Signin from './AuthModal/Signin';

const AuthModal = ({controller}) => {
    
    const [authPopup,setAuthPopup] = controller
    const[signup,setSignup] = useState(true)
return (
<div className={`${styles.searchOverlay} flex justify-center items-start`}>
    <div
        className="bg-white w-[36%] max-sm:w-[96%] rounded-xl p-4 shadow-xl relative top-5 animate__animated animate__bounceIn">
        <div className="cursor-pointer" onClick={()=>setAuthPopup(false)}>
            <FaTimes />
        </div>
        <div className="grid grid-cols-2">
            <div className="font-bold border-b-2 text-center py-3 cursor-pointer" onClick={()=> setSignup(false)}
                >
                Login
            </div>
            <div className="font-bold border-b-2 text-center py-3 cursor-pointer" onClick={()=> setSignup(true)}
                >
                Signup
            </div>
        </div>
        {signup ? <Signup/>: <Signin/> }
    </div>
</div>
)
}

export default AuthModal