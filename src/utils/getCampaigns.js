import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "./firebaseConfig";

async function getCampaigns(type) {
    const ref = collection(database, "campaigns")
    const q = query(ref, where("status", "==", type))
    const data = await getDocs(q)
    return data
}

export default getCampaigns