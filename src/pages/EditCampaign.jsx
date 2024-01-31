import React, { useState,useRef, useEffect } from "react";
import HomeNavbar from "../components/HomeNavbar";
import "@mdxeditor/editor/style.css";
import { useForm } from "react-hook-form";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const EditCampaign = () => {
  const {id} = useParams()

  const { register, handleSubmit,setValue } = useForm()
  const[loading,setLoading] = useState(true)
  

  async function getData() {
    const ref = doc(database, "campaigns", id)
    const data = await getDoc(ref)
    const values = data.data()

    setValue("title", values.campaignTitle)
    setValue("date", values.date)
    setValue("amount", values.goalAmount)
    setValue("benificiaryName",values.benificiaryName)
    setValue("benificiaryEmail", values.benificiaryEmail)
    setLoading(false)
  } 

  useEffect(() => {
      getData()
  },[])

  function updateData(d) {
    alert(JSON.stringify(d))
  }

  return (
    <>
      {loading && <Loader/>}
      <HomeNavbar />
      <div className="w-[56%] mx-auto">
        <div className="font-bold text-2xl ">Edit your campaign</div>
        <form onSubmit={handleSubmit(updateData)}>
          <div className="font-medium py-3 border-b">Basic details</div>
          <input
            type="text"
            className="border rounded p-2 mt-4 w-full"
            placeholder="Title of campaign"
            {...register("title")}
          />
          <input
            type="date"
            className="border rounded p-2 w-full mt-4"
            placeholder="Title of campaign"
            {...register("date")}
          />

          <div className="flex items-center gap-2 mt-4">
            <div className="text-2xl text-gray-600 border py-1 rounded px-3">
              ₹
            </div>
            <input
              type="number"
              className="border rounded p-2 w-full"
              placeholder="Amount"
              {...register("amount")}
            />
          </div>

          <div className="font-medium py-3 border-b">Benificiary details</div>
          <input
            type="text"
            className="border rounded p-2 mt-4 w-full"
            placeholder="Benificiary name"
            {...register("benificiaryName")}
          />
          <input
            type="text"
            className="border rounded p-2 mt-4 w-full"
            placeholder="Benificiary email"
            {...register("benificiaryEmail")}
          />

          <button className="w-full bg-black text-white mt-4 mb-8 rounded-md py-2">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditCampaign;
