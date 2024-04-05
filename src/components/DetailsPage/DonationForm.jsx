import { FaIndianRupeeSign } from "react-icons/fa6";
import Button from "../Button";
import Model from "../Model";
import { useCallback, useEffect, useRef, useState } from "react";
import { useController, useForm } from "react-hook-form";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { database } from "../../utils/firebaseConfig";
import toast from "react-hot-toast";
import { SpinnerCircular } from "spinners-react";

const DonationForm = ({
  controller,
  campaignID,
  updateDonations,
  currRaised,
  currTip,
}) => {
  const defaultValues = {
    amount: 0,
    percentAmount: 0,
  };
  const date = new Date().getTime();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  const amount = watch("amount");
  const percentAmount = watch("percentAmount");
  const totalAmount = Number(percentAmount) + Number(amount);
  const [model, toggleModel] = controller;
  const [loading, setLoading] = useState(false);
  const campaignDoc = doc(database, "campaigns", campaignID);

  const getTotalTip = async () => {
    const data = await getDoc(campaignDoc);
    return data.data().totalTip;
  };
  const getTotalRaised = async () => {
    const data = await getDoc(campaignDoc);
    return data.data().raisedAmount;
  };

  const submitForm = async (data) => {
    setLoading(true);
    data.tip = percentAmount;
    data.campaignId = campaignID;
    data.date = date;
    addDoc(collection(database, "donations"), data)
      .then((added) => {
        toast.success("Donated to campaign sucessfully");
        updateDonations();
        toggleModel();
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Cannot donate to campaign");
        console.log(err);
        setLoading(false);
      });

    updateDoc(campaignDoc, {
      raisedAmount: (await getTotalRaised()) + +amount,
      totalTip: (await getTotalTip()) + +percentAmount,
    })
      .then((updated) => console.log("Updated"))
      .catch((err) => alert(err));
  };

  return (
    <Model title="Donation Form" controller={controller}>
      <form
        className="p-8 max-sm:p-2 grid gap-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <select name="" id="" className="border p-4 text-gray-500 rounded-md">
          <option value="">Choose a donation type</option>
        </select>
        <div className="text-sm text-center">Choose or enter your amount </div>

        <div className="flex justify-center gap-x-4">
          <div
            onClick={() => setValue("amount", 1500)}
            className="border px-4 py-2 rounded-full border-blue-400 text-blue-400"
          >
            1500
          </div>
          <div
            onClick={() => setValue("amount", 3000)}
            className="border px-4 py-2 rounded-full border-blue-400 text-blue-400"
          >
            3000
          </div>
          <div
            onClick={() => setValue("amount", 5000)}
            className="border px-4 py-2 rounded-full border-blue-400 text-blue-400"
          >
            5000
          </div>
          {/* <Button type="outline" onClick={() => setValue("amount", 1500)}>
            <FaIndianRupeeSign /> 1500
          </Button>
          <Button type="outline" onClick={() => setValue("amount", 3000)}>
            <FaIndianRupeeSign /> 3000
          </Button>
          <Button type="outline" onClick={() => setValue("amount", 5000)}>
            <FaIndianRupeeSign /> 5000
          </Button> */}
        </div>
        <input
          type="number"
          min={0}
          id="amount"
          {...register("amount")}
          placeholder="Enter your own amount"
          className="border-b border-black px-4 py-3 placeholder:text-zinc-400"
        />

        <input
          type="text"
          placeholder="Name *"
          {...register("name")}
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="email"
          {...register("email")}
          placeholder="Email address *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="tel"
          {...register("mobile")}
          placeholder="Mobile number *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="text"
          {...register("address")}
          placeholder="Address *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="text"
          {...register("pan")}
          placeholder="Pan card (Optional : Required for Tax benifits) *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400 uppercase"
        />
        <div className="flex justify-center">
          <Button submit type="primary">
            {loading ? (
              <SpinnerCircular
                secondaryColor="lightgray"
                color="white"
                size={30}
              />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Model>
  );
};

export default DonationForm;
