

import { database } from "../utils/firebaseConfig";
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
const value = collection(database, "users");

export async function createUser(name, email, photo) {
    const q = query(value, where("email", "==", email));
    let data = await getDocs(q);
    if (data.docs.length == 0) {
      setDoc(doc(database,"users",email), {
        name: name,
        email: email,
        dob:"",
        phone: "",
        city: "",
        pan: "",
        aadhar: "",
        facebook: "",
        linkedin: "",
        photo: photo??""
        
      }).then((added) => console.log("User added"))
        .catch(err=>console.log(err))
    } else {
      console.log("User already exists");
    }
  }